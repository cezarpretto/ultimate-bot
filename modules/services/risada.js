'use strict'

const risadas = [
  'hehehehehe',
  'hahahahaha',
  'hauhauhauh',
  'kkkkkkkkkk',
  'ri litros uahsuahsa',
  'rachei kkk',
  'to rindo muito hahahha'
]

const execute = (bot, msg) => {
  bot.sendMessage(msg.chat.id, risadas[Math.floor(Math.random() * risadas.length)], { reply_to_message_id: msg.message_id }).catch(console.log)
}

module.exports = {
  execute
}
