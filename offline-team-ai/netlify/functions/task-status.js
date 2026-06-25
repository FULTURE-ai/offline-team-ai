const NOTION_VERSION = '2022-06-28';

exports.handler = async (event) => {
  const headers = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' };

  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers };

  const taskId = event.queryStringParameters?.id;
  if (!taskId || !process.env.NOTION_TOKEN) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'missing id' }) };
  }

  try {
    const res = await fetch(`https://api.notion.com/v1/pages/${taskId}`, {
      headers: {
        'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
        'Notion-Version': NOTION_VERSION,
      },
    });
    if (!res.ok) throw new Error(`notion ${res.status}`);
    const data = await res.json();

    const status = data.properties['狀態']?.select?.name || '未知';
    const result = data.properties['結果摘要']?.rich_text?.[0]?.text?.content || '';
    const cmd    = data.properties['指令']?.title?.[0]?.text?.content || '';

    return { statusCode: 200, headers, body: JSON.stringify({ status, result, cmd }) };
  } catch (e) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: e.message }) };
  }
};
