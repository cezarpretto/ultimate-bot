'use strict'

const execute = (msg, match, bot, data) => {
  let opts = createKeyboard(data)
  bot.sendMessage(msg.chat.id, 'Entendi. O que você deseja fazer agora?', opts).catch(console.log)
}

const createKeyboard = (data) => {
  return {
    reply_markup: {
      resize_keyboard: true,
      one_time_keyboard: true,
      selective: true,
      inline_keyboard: [
        // [
        //   {
        //     text: 'Ver Faturamentos',
        //     callback_data: `${data}|faturamento`
        //   }
        // ],
        [
          {
            text: 'Ver valores de PIS/COFINS',
            callback_data: `${data}|piscofins`
          }
        ],
        // [
        //   {
        //     text: 'Ver valores do Simples',
        //     callback_data: `${data}|vlSimples`
        //   }
        // ],
        // [
        //   {
        //     text: 'Ver Movimentos',
        //     callback_data: `${data}|movimentos`
        //   }
        // ],
        // [
        //   {
        //     text: 'CMV',
        //     callback_data: `${data}|cmv`
        //   }
        // ],
        // [
        //   {
        //     text: 'Ver Produtos mais Vendidos',
        //     callback_data: `${data}|produtosMaisVendidos`
        //   }
        // ]
      ]
    }
  }
}

module.exports = { execute }
