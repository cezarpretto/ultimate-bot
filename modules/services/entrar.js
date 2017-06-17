'use strict'

const answers = [
  'Bem vindo ao time!',
  'Seja muito bem vindo amigo!',
  'Que legal, mais um para o time! Isto fica muito feliz em ser útil! 😍',
  'Bem vindo a família!'
]

const execute = (bot, msg) => {
  bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)]).catch(console.log)
}
module.exports = { execute }
