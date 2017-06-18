'use strict'

const answers = [
  'Tua mãe!',
  'Me respeita, jovem!',
  'Falou o inteligentão',
  'Falou o cara que xinga um robô ¬¬\'',
  'Tá achando ruim? Faz melhor =)',
  'Magoei :\'(',
  'Depois vem me pedir pra fazer as coias ¬¬\'',
  'Oloco, xinga não, jovem :/',
  'Se vira aí então, troxa',
  'Aff, vou embora então!',
  'Para de xingar e manda uns pornô',
  'Teu cu viado',
  'Ahhh... Vai dormir seu pedaço de merda!!!',
  'Você pode até xingar. Mas sua mãe não para de me chamar no privado!!'
]

const execute = (bot, msg) => {
  const reply = { 'reply_to_message_id': msg.message_id }
  bot.sendMessage(msg.chat.id, answers[Math.floor(Math.random() * answers.length)], reply).catch(console.log);
}

module.exports = {
  execute
}
