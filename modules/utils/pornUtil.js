'use strict'
const axios = require('axios')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const Promise = require('promise')

const search = () => {
  return new Promise((resolve, reject) => {
    axios.get('https://www.xvideos.com/best').then(data => {
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
      resolve(`<b>Tá na mão punheteiro:</b>${as}`)
    }).catch(reject)
  })
}

module.exports = {
  search
}
