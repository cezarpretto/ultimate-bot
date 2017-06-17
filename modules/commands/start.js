'use strict'

const execute = (msg, match, bot) => {
  bot.sendMessage(msg.chat.id, createResponse(msg)).catch(console.log)
}

const createResponse = msg => `Oi ${msg.from.first_name}. Tudo bem? Eu sou o bot da Planos Assessoria. Isto ficará muito feliz em ser útil!`

module.exports = { execute }
