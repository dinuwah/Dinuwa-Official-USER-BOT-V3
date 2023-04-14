import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💌 Developer Bot `, `ɪɴɴᴏᴄᴇɴᴛ ᴍᴏʀᴇ ᴛʜᴀɴ ɢᴏᴏɢʟᴇ`, `Dinuwa-Official-USER-BOT-V3@gmail.com`, `Sri Lanka`, `💝  https://github.com/dinuwah`, `💝  ᴏᴡɴᴇʀ 💝 Dinuwa Official²⁰²³ 💝`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `💝 ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ`, `💝 ᴅᴏɴᴛ sᴘᴀᴍ/ᴄᴀʟʟ ᴍᴇ 💝`, `ɴᴏᴛʜɪɴɢ`, `Sri Lanka`, `💝 https://github.com/dinuwah/Dinuwa-Official-USER-BOT-V3`, `💝 Dinuwa-Official-USER-BOT-V3`]
  ], fkontak)
  await m.reply(`Hi cuddh mk itim @${m.sender.split('@')[0]}, මූ තමා මගේ owner, 😃\nඕන වුනොත් contact කරපන් වට්සැප්`)
  } 
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
