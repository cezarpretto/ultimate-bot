'use strict'
const pornUtil = require('../utils/pornUtil')

const execute = (bot, msg, match) => {
  const reply = { 'reply_to_message_id': msg.message_id }
  bot.sendMessage(msg.chat.id, 'Guenta a mão da punheta aí que eu vou pesquisar!', reply).catch(console.log)
  pornUtil.search().then(data => {
    bot.sendMessage(msg.chat.id, data, { parse_mode: 'html', reply_to_message_id: msg.message_id }).catch(console.log)
  }).catch(console.log)
}

module.exports = {
  execute
}
