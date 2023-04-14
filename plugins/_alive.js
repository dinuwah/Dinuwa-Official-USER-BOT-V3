import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────═[💖Dinuwa Official²⁰²³💖]═────⋆
│╭───────────────···
┴│☂︎    HEY ${conn.getName(m.sender)}
⬡│☂︎ 🤪I\'m alive now..Dinuwa Official²⁰²³🥰
┬╰────────────────···
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···
┴│            *Dinuwa Official²⁰²³*
⬡│☂︎ *WHATSAPP BOT CODED BY👇🏽*
⬡│☂︎           *Dinuwa Official²⁰²³*
⬡│☂︎           *OWNER:Dinuwa Official²⁰²³*
⬡│☂︎ *wa.me/94740804536*
┏ ┅ ━━━━━━━━━ ┅ ➔
┇ 《 Dinuwa MD BOT 》
┣ ┅ ━━━━━━━━━ ┅ ➔
┃  
┃ 
┃ 
┃ ❤️ Install Bot  : https://github.com/dinuwah/Dinuwa-Official-USER-BOT-V3
┃ 
┃ ❤️ Join PUBLIC group : https://chat.whatsapp.com/IKbvhlnSXFWDnW7ZxSWwLN
  💖 JOIN SUPPORT GROUP : https://chat.whatsapp.com/Jyjqx7KBfgjDC7QcefHB1S
┃ 
┃ ❤️ RamUsage  : 20.23 GB / 62.14 GB
┃ 
┃ ❤️ Version  : V3
┃
┃ ❤️ Time : 13:09:07
┃ 
┃ ❤️ Owner : Dinuwa Official 
┃
┃ ❤️ Powered By  +94740804536
┗ ┅ ━━━━━━━━━ ┅ ➔
❤️Dinuwa MD BOT ❤️
│╰────────────────···
╰──────────═┅═───────
*Thanks For Using 💖Dinuwa Official²⁰²³💖*
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler
