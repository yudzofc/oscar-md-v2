let handler = async m => m.reply(`
╭─「 𝐃𝐨𝐧𝐚𝐬𝐢 𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐚𝐢𝐧𝐢𝐧 𝐃𝐨𝐚𝐧𝐠:𝐯 」
│ •⛽ 𝐃𝐚𝐧𝐚 [0856-9365-0294]
│ •⛽ 𝐏𝐮𝐥𝐬𝐚 [0856-0038-0823]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
