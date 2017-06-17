const entrar = require('./services/entrar')
const sair = require('./services/sair')
const risada = require('./services/risada')
const stickerHeart = require('./services/stickerHeart')
const tuamae = require('./services/tuamae')
const saudacao = require('./services/saudacao')
const porno = require('./services/porno')

const defs = [
  {
    member: 'risada',
    regex: /lol|kkk|kkkk|huehue|h+a+h+a+|h+e+h+e+|h+i+h+i+|h+u+a+s+|j+e+j+e+|h+u+a+h+u+a|h+u+e+h+u+e/i,
    fn: (bot, msg, match) => risada.execute(bot, msg),
    eval: false
  },
  {
    member: 'stickerHeart',
    regex: /❤️|<3|S2(?:[^\d]+|$)/i,
    fn: (bot, msg) => stickerHeart.execute(bot, msg),
    eval: false
  },
  {
    member: 'tuamae',
    regex: /bot.*(puto|porra|noiado|merda|retardado|lento|doente|doido|maluco|louco|corinthiano|arrombado|gordo|nazista|gay|burro|idiota|retardado|trou?xa|maconheiro|inútil|fiduma(e|é)gua|z(e|é) r(u|o)ela|ot(á|a)rio|v(i|e)ado)|filh(o|a) da puta/i,
    fn: (bot, msg, match) => tuamae.execute(bot, msg, match ? match : []),
    eval: false
  },
  {
    member: 'saudacao',
    regex: /b(oa|om) (dia|tarde|noite)/i,
    fn: (bot, msg, match) => saudacao.execute(bot, msg, match ? match : []),
    eval: false
  },
  {
    member: 'porno',
    regex: /bot.*(?:[qual|quais]?)? *(?:[e|é]?)? *(?:[são|sao]?)? *(?:o[s])? *(porn[ô|o|ôs|os]?) *(?:top[er|zera|zêra|s] )? *([^?]+)/i,
    fn: (bot, msg, match) => porno.execute(bot, msg, match ? match : []),
    eval: false
  }
]

module.exports = {
  entrar,
  sair,
  defs,
  stickerHeart,
  tuamae,
  saudacao,
  porno
}
