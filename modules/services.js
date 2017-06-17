const entrar = require('./services/entrar')
const sair = require('./services/sair')
const empresaOptions = require('./services/empresaOptions')
const faturamento = require('./services/faturamento')
const piscofins = require('./services/piscofins')
const risada = require('./services/risada')
const stickerHeart = require('./services/stickerHeart')
const tuamae = require('./services/tuamae')

const defs = [
  {
    member: 'risada',
    regex: /lol|kkk|kkkk|huehue|h+a+h+a+|h+e+h+e+|h+i+h+i+|h+u+a+s+|j+e+j+e+|h+u+a+h+u+a|h+u+e+h+u+e/i,
    fn: (bot, msg, match) => risada.execute(bot, msg),
    eval: false
  },
  {
    member: "stickerHeart",
    regex: /❤️|<3|S2(?:[^\d]+|$)/i,
    fn: (bot, msg) => stickerHeart.execute(bot, msg),
    eval: false
  },
  {
    member: "tuamae",
    regex: /bot.*(puto|nazista|gay|burro|idiota|retardado|trou?xa|maconheiro|inútil|fiduma(e|é)gua|z(e|é) r(u|o)ela|ot(á|a)rio|v(i|e)ado)/i,
    fn: (bot, msg, match) => tuamae.execute(bot, msg, match ? match : []),
    eval: false
  }
]

module.exports = {
  entrar,
  sair,
  empresaOptions,
  faturamento,
  piscofins,
  defs,
  stickerHeart,
  tuamae
}
