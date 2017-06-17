const IP_NCM_HELPER = require('../configs').IP_NCM_HELPER
const API_TOKEN = require('../configs').API_TOKEN
const axios = require('axios')

const search = pesquisa => {
  return axios.post(`${IP_NCM_HELPER}empresa/pesquisa`, pesquisa, {
    headers: {'Authorization': `Bearer: ${API_TOKEN}`}
  })
}

const consultaPisCofins = (periodo, cnpj) => {
  periodo = periodo.split('/').reverse().map(s => parseInt(s))
  periodo = new Date(periodo[0], periodo[1] -1, 1)
  console.log(periodo)
  let pesquisa = {
    empresa: {
      cnpj: cnpj
    },
    status: 'CNPJ',
    dtApuracao: periodo,
    limit: 1,
    offset: 0
  }
  return axios.post(`${IP_NCM_HELPER}regime/federal/apuracao/piscofins/pesquisa`, pesquisa, {
    headers: {'Authorization': `Bearer: ${API_TOKEN}`}
  })
}

module.exports = {
  search,
  consultaPisCofins
}
