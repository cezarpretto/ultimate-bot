'use strict'
const empresaUtils = require('../utils/empresUtils')

const execute = (msg, match, bot) => {
  let pesquisa = {
    fantasia: match[2],
    limit: 5,
    offset: 0,
    status: 'FTS',
    ativo: true
  }
  if(true/*msg.chat.type === 'private'*/) {
    empresaUtils.search(pesquisa).then(data => {
      let opts = createKeyboard('fantasia', data.data.data)
      let answer = data.data.data.length ? 'Eu encontrei as seguintes empresas:' : 'Não consegui encontrar nenhuma empresa 😞'
      bot.sendMessage(msg.chat.id, answer, opts).catch(console.log)
    }).catch(err => {
      bot.sendMessage(msg.chat.id, 'Não foi possível completar a busca!').catch(console.log)
    })
  }else {
    bot.sendMessage(msg.chat.id, 'Esse comando só está disponível no privado. Se quiser usar vem de PV amigo!').catch(console.log)
  }
}

const createKeyboard = (field, data) => {
  let opts = {
    reply_markup: {
      resize_keyboard: true,
      one_time_keyboard: true,
      selective: true,
      inline_keyboard: []
    }
  }

  // console.log(data)

  data = data.map(empresa => {
    return [
      {
        text: empresa[field],
        callback_data: `${empresa.cnpj}|empresaOptions`
      }
    ]
  })


  opts.reply_markup.inline_keyboard = data
  return opts

}
module.exports = { execute }
