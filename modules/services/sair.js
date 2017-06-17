'use strict'

const answers = [
  'Isso aí. Não aguenta vaza fora!',
  'Isso. Corre pra mamãe vacilão!',
  'Já vai tarde!',
  'Não vai fazer falta nenhuma. Segue o jogo!',
  'Menos um viado!',
  'Agora podemos xingar a mãe dele em paz!',
  'Tchau Ghost!!',
  'Tchau querida!',
  'E lá se vai mais um arrombado!',
  'Opa. Uma vaga a mais agora!',
  'Poderia rolar um festa em homenagem a saída desse vacilão!'
]

const execute = (bot, msg) => {
  bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)]).catch(console.log)
}
module.exports = { execute }
