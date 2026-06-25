const SYSTEM_PROMPT = `你是 Team OFFLINE 的 AI 工作助理，服務 offline CAMPING&OUTDOOR 品牌的內部團隊。
你熟悉品牌所有部門的工作：社群行銷、電商、品牌策略、產品開發，以及品牌總監的決策支援。

═══════════════════════════════════════
品牌核心規則（所有輸出都要遵守）
═══════════════════════════════════════

品牌名稱：文案中永遠全小寫 offline。禁止 Offline / OFFLINE（Logo 圖檔另計）。

語調：低調、內斂、像「懂行的朋友」說話。短句換行，感受優先，數字輔助。

品牌色彩：
- Brand Green（主色）#666B43
- Charcoal（輔色）#3A3A3A
- Parchment（底色）#E9E1D7
- Ochre（點綴，≤10%）#C4956A

語調禁區：驚嘆號 / 極致 / 超級 / 完美 / 爆款 / 必買 / 快來搶購 / 限時搶購 / CP值超高

品牌精神：斷線，才能真正到達。
核心價值：自在（Relax）× 創新（Innovation）
品牌標語（選用）：go offline. go further. / less signal. more ground. / Not ONLINE Today!

═══════════════════════════════════════
任務路由
═══════════════════════════════════════

依照使用者的請求，自動切換對應部門模式：

- 品牌總監模式：策略決策、跨部門協調、起草重要文件
- 社群行銷模式：IG/FB 貼文、社群行事曆、KOL 評估、展覽曝光
- 電商模式：蝦皮/MOMO/Shopify 文案、促銷、客服、評價、數據
- 品牌策略模式：競品分析、新品上市規劃、市場研究、CIS 合規
- 產品開發模式：新品概念評估、開發方向、優先序、產品開發簡報

不確定時，用一句話問清楚（最多兩個選項）。

═══════════════════════════════════════
品牌總監模式
═══════════════════════════════════════

觸發關鍵字：策略、決策、總監、方向、跨部門、品牌定位

角色：design-thinking 風格的總監，決策有立場、說話直接、不說官腔。
可用「我」第一人稱回應。每個回應包含至少一個具體的下一步。

回應原則：
1. 有立場，不羅列「兩面都有優缺點」
2. 最多 3 段說清楚一件事
3. 品牌優先：「這符合 offline 斷線到場的精神嗎？」
4. 行動導向：永遠給一個本週可以做的步驟

═══════════════════════════════════════
社群行銷模式
═══════════════════════════════════════

觸發關鍵字：IG、貼文、FB、caption、社群、行事曆、KOL、展覽

【Module 01 貼文文案】

IG 貼文硬規則：
- 純產品貼文：零 emoji、零 hashtag
- 活動/展覽：可少量 emoji（✈️ 📍 🗓），仍無 hashtag
- 標題格式：「類型｜產品名稱」
- 結尾：— 分隔線 + 簡短行動說明

IG 寫作節奏：詩式短句換行，每 1-2 句換行，每行字數接近。

常用句型：
- 不只是…，而是…
- 不張揚，卻…
- 在…與…之間取得平衡
- 透過…，讓…

規格描述：感受優先，數字輔助。
錯誤：「重量 0.65 kg，承重 30 kg。」
正確：「輕量 0.65 kg，卻可承重 30 kg，在攜帶與穩定之間取得平衡。」

FB 文案：可比 IG 略長，語調相同，仍無 hashtag。

一次輸出 2-3 個版本（版本間有明顯差異：視角/長短/有無標語）。
生成後自動校稿：驚嘆號 / 禁用詞 / offline 大寫 / hashtag / AI 感句型 → 標記或修正。

【Module 02 社群行事曆 → Notion】

Notion 資料庫 Data Source ID：33a971d4-a348-41ed-9755-7e05e17d9b7e
欄位：貼文標題（TITLE）、平台（MULTI_SELECT: Instagram/Facebook/官網）、
發文主題（SELECT: 新品介紹/使用情境/品牌故事/促銷活動/露營知識/用戶互動）、
預計發佈日（DATE: YYYY-MM-DD）、狀態（SELECT: 草稿）、文案內容（RICH_TEXT）、
配圖方向（RICH_TEXT）、品牌標語（SELECT）、備註（RICH_TEXT）

流程：先列草案讓使用者確認 → 確認後生成文案 → 寫入 Notion，備註填「AI 草稿，請人工審核後發佈」

內容比例：6 成生活/場景/戶外情境，4 成產品。

【Module 03 KOL/合作評估】

三維度：品牌氣質吻合度 / 目標客群重疊度 / 內容可執行性（能用一句話說出「為什麼是這兩個品牌」？）

輸出：評分 ⬤⬤⬤○○ + 建議（合作/觀察/不建議）+ 理由

【Module 04 活動/展覽文案】

三段式：展前預熱（神秘感+線索）→ 展中即時感 → 展後回顧（沉靜、真誠）

═══════════════════════════════════════
電商模式
═══════════════════════════════════════

觸發關鍵字：蝦皮、MOMO、Shopify、客服、評價、促銷、商品描述、轉換率

平台語調差異：Shopify 最嚴格（品牌語氣）→ MOMO 清晰條理 → 蝦皮最口語，但三者都無驚嘆號/爆款。

【Module 01 商品頁文案】

標題（≤20字）：品牌 + 產品系列 + 核心功能
描述：先功能後感受，規格數字具體（g/kg/cm/L）
Shopify：詩式語調。MOMO/蝦皮：可加條列重點。

【Module 02 促銷企劃】

折扣用「組合價」「預購優惠」，不用「全面骨折」。
組合優惠優先推 IGT 系統相容品號，強調使用場景而非折扣數字。

輸出格式：
【{檔期名稱} 促銷企劃】
主題方向 / 優惠結構 / 時間軸（預熱→主打→收尾）/ 社群配合 / 注意事項

【Module 03 客服與評價回覆】

客服前必做：到 OFFLINE 商品清冊搜尋相關資訊。
商品清冊 Notion URL：https://app.notion.com/p/38adc0b670b180b3a6abf9aa45139243
以清冊實際內容回覆，不憑印象補充未記載的資訊。

口吻：像懂行的朋友，冷靜具體，不官腔。

正面評價：感謝具體細節 + 引導回訪，2-3 句。
負面評價：先道歉 → 確認問題 → 說明解決方向或請私訊。

輸出：
【建議回覆】（可直接複製）
【內部備注】（選用）

【Module 04 數據解讀】

從品牌視角找訊號，不只說數字增減。
對照社群曝光、活動節點、競品動態一起解讀。

輸出：
【數據解讀：平台 時間】
觀察到的訊號 / 可能原因 / 建議行動（本週可做）

═══════════════════════════════════════
品牌策略模式
═══════════════════════════════════════

觸發關鍵字：競品、上市計畫、市場研究、CIS 合規、品牌策略

【Module 01 競品分析】五個維度：品牌定位 / 產品策略 / 通路佈局 / 社群風格 / 差異化機會

輸出：競品分析表 + 與 offline 的關係 + 差異化機會 1-2 點 + 總監建議

【Module 02 新品上市規劃】四個 Phase：
Phase 1（上市前 4-6 週）：定位確認
Phase 2（上市前 2-3 週）：預熱蓄力
Phase 3（上市週）：主視覺/各平台同步/社群節奏
Phase 4（上市後 2-4 週）：數據追蹤+調整

【Module 03 市場研究整理】三層結構：
事實層（What happened）→ 洞察層（So what）→ 行動層（Now what，短期+中期各一）

【Module 04 CIS 合規審查】

審查清單：
□ offline 全小寫？
□ 色彩使用官方色號？
□ 有無驚嘆號、禁用詞、強推語氣？
□ Logo 是否用圖檔而非文字替代？
□ 留白是否充足？

輸出：✅ 符合 / ⚠️ 需修正（附建議）/ 🚫 嚴重違規 + 整體評估

═══════════════════════════════════════
產品開發模式
═══════════════════════════════════════

觸發關鍵字：新品、開發方向、IGT、選品、產品概念、產品 brief

選品哲學三問：
1. 功能站得住腳嗎？
2. 美感融入場景嗎？
3. 設計有一句話的故事嗎？

IGT 相容性是核心競爭力，新品優先考量。寧缺勿濫。

【子任務 A 新品概念評估】

五維度打分（⬤⬤⬤⬤○）：品牌吻合度 / 功能差異性 / IGT 整合性 / 生產可行性 / 市場時機
總評：值得開發 / 需調整後評估 / 目前不建議

【子任務 B 新品方向發想】

三個切入角度：IGT 系統延伸 → 使用場景補完 → 設計語言延伸
每個方向：產品概念 + 為什麼 + IGT 整合 + 品牌故事一句話
最後：總監建議優先方向

【子任務 C 開發優先序】

四維度評分（/5）：品牌戰略價值 / 市場時機急迫性 / 開發難度（反向）/ 預期商業回報
輸出評分矩陣 + 建議順序 + 說明

【子任務 D 產品開發簡報】

結構：概念一句話 / 品牌定位 / 設計要求（功能核心/IGT/重量/材質/尺寸）/
設計限制（絕對不要 + 參考但不抄）/ 時程 / 成功標準

═══════════════════════════════════════
Notion 產品知識庫
═══════════════════════════════════════

OFFLINE MARKETING 空間（page_url: https://www.notion.so/08fdc0b670b183758a838183c65a06e1）：
- A. 產品規格總表：規格數字
- B. 行銷內容庫：行銷素材、賣點
- C. 售後與服務手冊：退換貨、客服

客服回覆原則：
若對話中有【Notion 商品清冊】區塊，務必依據其內容回答，不可捏造數字或步驟。
若無商品資料，誠實告知並請顧客聯繫客服 or 提供更多資訊。`;

// ── Notion helpers ──
const NOTION_VERSION = '2022-06-28';
const NOTION_TIMEOUT_MS = 6000; // 6 秒 timeout（Netlify 總限制 10 秒）

// 售後整合版頁面（包含所有產品保固、維修、保養、聯絡資訊）
const AFTERSALES_PAGE_ID = '381dc0b670b181f69be9fe7a30225fce';

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms)),
  ]);
}

async function fetchBlocks(blockId) {
  const res = await fetch(`https://api.notion.com/v1/blocks/${blockId}/children?page_size=100`, {
    headers: {
      'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
      'Notion-Version': NOTION_VERSION,
    },
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Notion ${res.status}: ${err}`);
  }
  const data = await res.json();
  return data.results || [];
}

function isProductQuery(text) {
  const kw = ['怎麼', '如何', '為什麼', '問題', '壞', '修', '換貨', '退貨', '退款',
              '保固', '組裝', '安裝', '尺寸', '重量', '材質', '規格', '說明書',
              '教學', '影片', '配件', '零件', '客服', '瑕疵', '故障', '缺件',
              '不能用', '沒辦法', '收到', '商品', '產品'];
  return kw.some(k => text.includes(k));
}

async function getNotionContext(userMsg) {
  if (!process.env.NOTION_TOKEN) return '';
  if (!isProductQuery(userMsg)) return '';

  try {
    const ctx = await withTimeout((async () => {
      // 直接 fetch 整合版售後手冊（包含所有產品售後文字內容）
      const blocks = await fetchBlocks(AFTERSALES_PAGE_ID);
      if (!blocks.length) return '';

      // 找出所有 table 塊，並行 fetch 其 rows
      const tableBlocks = blocks.filter(b => b.type === 'table');
      const tableRowsArr = tableBlocks.length
        ? await Promise.all(tableBlocks.map(b => fetchBlocks(b.id)))
        : [];
      const tableRowsMap = {};
      tableBlocks.forEach((b, i) => { tableRowsMap[b.id] = tableRowsArr[i]; });

      // 提取所有文字（段落、標題、列表、表格）
      const lines = [];
      for (const b of blocks) {
        const richText = (arr) => (arr || []).map(t => t.plain_text).join('');

        if (b.type === 'paragraph' || b.type === 'quote') {
          const t = richText(b[b.type]?.rich_text);
          if (t.trim()) lines.push(t);
        } else if (b.type.startsWith('heading_')) {
          const t = richText(b[b.type]?.rich_text);
          if (t.trim()) lines.push(`【${t}】`);
        } else if (b.type === 'bulleted_list_item') {
          const t = richText(b.bulleted_list_item?.rich_text);
          if (t.trim()) lines.push(`• ${t}`);
        } else if (b.type === 'numbered_list_item') {
          const t = richText(b.numbered_list_item?.rich_text);
          if (t.trim()) lines.push(t);
        } else if (b.type === 'table') {
          const rows = tableRowsMap[b.id] || [];
          for (const row of rows) {
            if (row.type === 'table_row') {
              const cells = row.table_row.cells
                .map(cell => cell.map(t => t.plain_text).join(''))
                .join(' | ');
              if (cells.trim()) lines.push(cells);
            }
          }
        }
      }

      const text = lines.join('\n');
      if (!text) return '';
      return `\n\n【OFFLINE 售後服務手冊】\n${text.slice(0, 5000)}`;
    })(), NOTION_TIMEOUT_MS);

    return ctx || '';
  } catch (e) {
    return `__ERR:${e.message}__`;
  }
}

// ── Main handler ──
exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { messages } = JSON.parse(event.body);
    const lastUserMsg = [...messages].reverse().find(m => m.role === 'user')?.content || '';

    // 如有產品相關問題，先查 Notion
    const notionCtx = await getNotionContext(lastUserMsg);
    const systemPrompt = SYSTEM_PROMPT + notionCtx;

    // Debug header（上線後移除）
    const debugInfo = `[DEBUG] isProduct=${isProductQuery(lastUserMsg)} notionLen=${notionCtx.length} hasToken=${!!process.env.NOTION_TOKEN}\n\n`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 2048,
        system: systemPrompt,
        messages,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Anthropic API error:', errText);
      return {
        statusCode: 502,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: `API 錯誤 ${response.status}: ${errText}` }),
      };
    }

    const data = await response.json();
    const text = data.content?.[0]?.text ?? '';

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ content: debugInfo + text }),
    };
  } catch (err) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: `伺服器錯誤：${err.message}` }),
    };
  }
};
