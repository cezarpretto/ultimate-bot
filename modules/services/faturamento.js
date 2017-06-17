'use strict'

const execute = (msg, match, bot, data) => {
  let opts = {
    reply_markup: {
      force_reply: true,
      selective: true,
      data: data
    }
  }
  bot.sendMessage(msg.chat.id, 'Digite o mês e o ano separado por barra. Por exemplo: 10/2017', opts).then(sentMsg => {
    bot.onReplyToMessage(sentMsg.chat.id, sentMsg.message_id, reply => {
      bot.removeReplyListener(reply.reply_to_message.message_id)
      bot.sendMessage(msg.chat.id, `Certo. Vou pesquisar os faturamentos referentes a ${reply.text} do cnpj ${data}`)
    })
  }).catch(console.log)
}

module.exports = { execute }
