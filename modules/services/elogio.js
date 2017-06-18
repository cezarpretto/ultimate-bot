'use strict'

const answers = [
  'São seus olhos gracinha!',
  'Já sei quem vou comer hoje 😂',
  'Obrigado. Eu sou foda!',
  'Assim eu fico envergonhado 😳',
  'Bacana!',
  'Urra...',
  'Eita 😳😳😳',
  'Eu não mereço tanto!',
  'Eu sei!',
  'Sou isso e muito mais meu querido!',
  'Sua mãe também gosta',
  'Porra... tudo isso?',
  'Sua irmã curte também',
  'É nóis mano 👍',
  'Sei...',
  'Isso é só interesse que eu sei!! 👍',
  'Você deve falar isso para todos!!',
  'Sou mesmo!',
  'Agora fala uma coisa que ninguém saiba...'
]

const execute = (bot, msg) => {
  const reply = { 'reply_to_message_id': msg.message_id }
  bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)], reply).catch(console.log);
}

module.exports = {
  execute
}
