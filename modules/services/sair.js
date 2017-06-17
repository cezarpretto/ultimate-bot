'use strict'

const answers = [
  'Vixiii',
  'O que aconteceu?',
  '😢😢'
]

const execute = (bot, msg) => {
  bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)]).catch(console.log)
}
module.exports = { execute }
