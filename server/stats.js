// server/stats.js — run with: node server/stats.js
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const BOT_TOKEN = process.env.BOT_TOKEN;          // from Discord Dev Portal
const GUILD_ID  = process.env.GUILD_ID;

const SERVERS  = 1;                                // update as you add servers
const PARTNERS = 0;

app.get('/api/stats', async (req, res) => {
  try {
    const r = await fetch(`[discord.com](https://discord.com/api/v10/guilds/${GUILD_ID}?with_counts=true)`, {
      headers: { Authorization: `Bot ${BOT_TOKEN}` }
    });
    const d = await r.json();
    res.json({
      servers: SERVERS,
      members: d.approximate_member_count ?? 0,
      online:  d.approximate_presence_count ?? 0,
      partners: PARTNERS
    });
  } catch {
    res.json({ servers: SERVERS, members: 0, online: 0, partners: PARTNERS });
  }
});

app.listen(3001, () => console.log('stats on :3001'));
