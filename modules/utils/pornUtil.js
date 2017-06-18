'use strict'
const axios = require('axios')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const Promise = require('promise')

const urls = [
  {
    url: 'https://www.xvideos.com/best',
    message: 'Tá na mão punheteiro'
  },
  {
    url: 'https://www.xvideos.com/tags/gay',
    message: 'Pra você eu só tenho esses aqui seu viado arrombado de merda!'
  },
  {
    url: 'https://www.xvideos.com/tags/deepthroat',
    message: 'Essas engolem igual sua mãe!'
  },
  {
    url: 'https://www.xvideos.com/tags/anal',
    message: 'Essas só não tem o cu mais largo que o seu!'
  }
]

const search = () => {
  let url = urls[Math.floor(Math.random() * urls.length)]
  return new Promise((resolve, reject) => {
    axios.get(url.url).then(data => {
      const dom = new JSDOM(data.data)
      const document = dom.window.document
      let as = Array.from(document.querySelectorAll('.thumb-block p a'))
      as = as.map(a => {
        return {
          link: `https://www.xvideos.com/${a.href}`,
          title: a.title
        }
      }).filter(a => a.title.length > 0)
        .map(a => `\n<a href="${a.link}">${a.title}</a>`).join('')
      resolve(`${as}\n\n<b>${url.message}</b>`)
    }).catch(reject)
  })
}

module.exports = {
  search
}
