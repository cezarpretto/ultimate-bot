const accounting = require('accounting')

const floatToCurrency = currency => accounting.formatMoney(currency, 'R$ ', 2, '.', ',')

module.exports = {
  floatToCurrency
}
