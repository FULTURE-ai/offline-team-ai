#!/usr/bin/env python3
"""
offline AI 指令佇列 Daemon
從 Notion 讀取待執行任務，在本機執行後回寫結果。
"""

import time
import json
import logging
import subprocess
from datetime import datetime
from pathlib import Path

import requests

# ── 路徑設定 ──
BASE_DIR    = Path(__file__).parent
CONFIG_PATH = BASE_DIR / "config.json"
LOG_PATH    = BASE_DIR / "daemon.log"
TASKS_DIR   = BASE_DIR / "tasks"

# ── Logging ──
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler(LOG_PATH, encoding="utf-8"),
        logging.StreamHandler(),
    ],
)
log = logging.getLogger(__name__)

NOTION_VERSION = "2022-06-28"
POLL_INTERVAL  = 60  # 秒


def load_config():
    with open(CONFIG_PATH, encoding="utf-8") as f:
        return json.load(f)


def notion_headers(token):
    return {
        "Authorization": f"Bearer {token}",
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
    }


def get_pending_tasks(token, db_id):
    url = f"https://api.notion.com/v1/databases/{db_id}/query"
    payload = {
        "filter": {"property": "狀態", "select": {"equals": "待執行"}},
        "sorts": [{"timestamp": "created_time", "direction": "ascending"}],
        "page_size": 10,
    }
    res = requests.post(url, headers=notion_headers(token), json=payload, timeout=15)
    res.raise_for_status()
    return res.json().get("results", [])


def update_task(token, page_id, status, result=""):
    url = f"https://api.notion.com/v1/pages/{page_id}"
    props = {"狀態": {"select": {"name": status}}}
    if result:
        props["結果摘要"] = {"rich_text": [{"text": {"content": result[:2000]}}]}
    if status == "完成":
        props["完成時間"] = {"date": {"start": datetime.now().strftime("%Y-%m-%d")}}
    requests.patch(url, headers=notion_headers(token), json={"properties": props}, timeout=15)


def execute_task(command, config):
    """執行對應的任務腳本，回傳結果字串。"""
    script = TASKS_DIR / f"{command}.py"
    if not script.exists():
        raise FileNotFoundError(f"找不到任務腳本：{script}")

    # 用 login shell 執行，確保繼承使用者的 NAS 掛載與完整環境
    import shlex
    result = subprocess.run(
        ["/bin/bash", "-l", "-c", f"python3 {shlex.quote(str(script))}"],
        capture_output=True,
        text=True,
        timeout=300,
        env={**__import__("os").environ, "DAEMON_CONFIG": str(CONFIG_PATH)},
    )
    if result.returncode != 0:
        raise RuntimeError(result.stderr.strip() or "腳本執行失敗")
    return result.stdout.strip() or "執行完成"


def run_once(config):
    token = config["notion_token"]
    db_id = config["command_queue_db_id"]

    tasks = get_pending_tasks(token, db_id)
    if not tasks:
        return

    log.info(f"發現 {len(tasks)} 個待執行任務")

    for task in tasks:
        page_id = task["id"]
        title   = task["properties"].get("指令", {}).get("title", [])
        command = title[0]["text"]["content"] if title else ""

        if not command:
            update_task(token, page_id, "錯誤", "指令名稱為空")
            continue

        log.info(f"開始執行：{command}（page: {page_id}）")
        update_task(token, page_id, "執行中")

        try:
            result = execute_task(command, config)
            update_task(token, page_id, "完成", result)
            log.info(f"完成：{command} → {result[:80]}")
        except Exception as e:
            error = str(e)
            update_task(token, page_id, "錯誤", error)
            log.error(f"失敗：{command} → {error}")


def main():
    log.info("=== offline AI Daemon 啟動 ===")
    config = load_config()
    log.info(f"輪詢間隔：{POLL_INTERVAL} 秒")

    while True:
        try:
            run_once(config)
        except Exception as e:
            log.error(f"Daemon 錯誤：{e}")
        time.sleep(POLL_INTERVAL)


if __name__ == "__main__":
    main()
