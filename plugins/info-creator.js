const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: ᴹᴿ᭄ YudsOffcོ_96ঔৣ꧂
item.ORG: ᴹᴿ᭄ YudsOffcོ_96ঔৣ꧂
item1.TEL;waid=6285693650294:6285600380823@s.whatsapp.net
item1.X-ABLabel:owner selalu ada 
item2.YOUTUBE;type=INTERNET: https://instagram.com/lebihkerendariandy_warholl.id

item2.X-ABLabel:Igehh
item3.ADR:;;🎍MARS;;;;
item3.X-ABADR:ac
item3.X-ABLabel:asal kota
item4.URL:https//bit.ly/profil_wahyu 
item4.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER BOT', 
            contacts: [{ vcard }]  
        }
    }
)
let jarot = 'https://telegra.ph/file/b6b25d5ff74febec06fb4.jpg'
await conn.send3ButtonImg(m.chat, jarot, `*Hai kak @${m.sender.split('@')[0]} 👋,  Itu nomor owner gw…*`, '📮: jngn di spam kack', 'Store', '.store', 'Back', '.menu', 'Donasi', '.donasi', sentMsg)}
handler.help = ['owner2', 'creator2']
handler.tags = ['info']

handler.command = /^(owner2|creator2)$/i

module.exports = handler
