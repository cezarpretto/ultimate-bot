'use strict'

const answers = [
  'Mais um viado nessa porra!',
  'Já manda uns pornô aí seu arrombado de merda!',
  'Mais um punheteiro derrotado!',
  'Opa. Mais um desajustado social entrou no grupo!',
  'Um doente mental acabou de entrar.',
  'Já vou avisando, entrou tem que mandar um pack de pornô!',
  'Cadê os pornozinho malandro?',
  'Já manda pornô. Pq a mão da punheta já está tremendo hahhahah'
]

const stickers = [
  'CAADAQADIQADevwcCv3G8gUyH9smAg',
  'CAADAQADHwADevwcCgh8jzWRpBzgAg',
]

const execute = (bot, msg) => {
  if(msg.new_chat_member.id === 448767583) {
    bot.sendMessage(msg.chat.id, 'Cheguei nessa porra seus putos. Bora zuar!!!!').catch(console.log)
  }else {
    bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)])
    bot.sendSticker(msg.chat.id, stickers[Math.floor(Math.random() * stickers.length)])
  }
}
module.exports = { execute }
