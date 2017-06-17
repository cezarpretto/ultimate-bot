const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '439327437:AAH6PUDk8wqNEkTOCW9eBuy24zuE5ESoP8w'
const commands = require('./modules/commands.js')
const services = require('./modules/services.js')
const _services = services.defs

const bot = new TelegramBot(TOKEN, { polling: true })

bot.onText(/^\/([a-zA-Z]+) ?([^@]+)?(@.*bot)?/i, (msg, match) => {
  let command = match[1]
  if(command in commands) {
    command = commands[command]
    command.execute(msg, match, bot)
  }else {
    bot.sendMessage(msg.chat.id, 'Desculpe, este comando não existe!')
  }
})

bot.onText(/^([^\/]+)/i, (msg, match) => {
  _services.forEach((element, index) => {
    if(_services[index].regex.test(msg.text)) {
      _services[index].fn(bot, msg)
    }
  })
})

bot.on('callback_query', callback => {
  let data = callback.data.split('|')[0]
  let msg = callback.message
  let service = callback.data.split('|')[1]
  if (service in services) {
    service = services[service]
    service.execute(msg, null, bot, data)
  }else {
    bot.sendMessage(msg.chat.id, 'Desculpe, este comando não existe ou não foi implementado!')
  }
})

// bot.on('message', (msg, match) => {
//   console.log(msg)
//   bot.getChatAdministrators(msg.chat.id).then(data => {
//     console.log(data)
//   }).catch(console.log)
// })

bot.on("new_chat_participant", msg => {
  services.entrar.execute(bot, msg)
})

bot.on("left_chat_participant", msg => {
  services.sair.execute(bot, msg)
})
