'use strict'
const empresaUtils = require('../utils/empresUtils')
const utils = require('../utils/utils')

const execute = (msg, match, bot, data) => {
  let opts = {
    reply_markup: {
      force_reply: true,
      data: data
    }
  }
  bot.sendMessage(msg.chat.id, 'Digite o mês e o ano separado por barra. Por exemplo: 10/2017', opts).then(sentMsg => {
    bot.onReplyToMessage(sentMsg.chat.id, sentMsg.message_id, reply => {
      bot.removeReplyListener(reply.reply_to_message.message_id)
      // bot.sendMessage(msg.chat.id, `Certo. Vou pesquisar os faturamentos referentes a ${reply.text} do cnpj ${data}`)
      empresaUtils.consultaPisCofins(reply.text, data).then(response => {
        let answer
        if(response.data.data.length) {
          let r = response.data.data[0]
          answer =
          `Empresa: <b>${r.empresa.fantasia}</b>\nPeríodo: ${reply.text}\nValor do PIS: ${utils.floatToCurrency(r.empresa.pis[0].vlDebito)}\nValor do COFINS: ${utils.floatToCurrency(r.empresa.cofins[0].vlDebito)}`
        }else {
          answer = 'Não consegui encontrar nenhum resultado para o período pesquisado.'
        }
        bot.sendMessage(msg.chat.id, answer, {parse_mode: 'html'})
      }).catch(console.log)
    })
  }).catch(console.log)
}

module.exports = { execute }
