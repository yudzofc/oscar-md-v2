/*============== Jangan di ganti! ==============*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
*––––––『 SOURCE CODE 』––––––*
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya3)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: 'Illena-Md',
           hydratedButtons: [{
             urlButton: {
               displayText: 'GRUP OFFICIAL BOT 🐈',
               url: 'https://chat.whatsapp.com/DnOeCnfvCvREjasisjOCpU'
             }

           },
                {
               urlButton: {
               displayText: '🌍 Igehh Owner 🌍',
               url: 'https://instagram.com/lebihkerendariandy_warholl.id'
             }

           },
               {
             quickReplyButton: {
               displayText: 'Dapatkan session',
               id: '.tutorialsession',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'Menu',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'Donasi',
               id: '.donasi',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.customPrefix = /^(sc|script|sourcecode|.sc|.script|.sourcecode)$/i
handler.command = new RegExp
handler.help = ['.script']
module.exports = handler
