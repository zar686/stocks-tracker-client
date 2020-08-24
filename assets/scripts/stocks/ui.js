'use strict'

// Require:
const showStocksTemplate = require('../templates/stock-list.handlebars')
// const store = require('../store')

const indexStocksSuccess = (data, hideMessage) => {
  const showStocksHtml = showStocksTemplate({ stocks: data.stocks })

  if (!hideMessage) {
    // if no stocks in list:
    if (data.stocks.length === 0) {
      $('#message').text('no stocks in your list!')
    } else {
      $('#message').text('look at all your stocks!')
    }
  }

  $('#content').empty()
  $('#content').append(showStocksHtml)
  $('#content').show()
}

const indexStocksFailure = () => {
  $('#message').text('Stocks list not showing.')
}

const createStockSuccess = (data) => {
  const showStocksHtml = showStocksTemplate({ stocks: data.stocks })

  $('#message').text('New Stock added!')
  $('#content').append(showStocksHtml)

  $('form').trigger('reset')
}

const createStockFailure = () => {
  $('#message').text('New stock not added')
}

const destroyStockSuccess = () => {
  $('#message').text('Delete Success')
}

const destroyStockFailure = () => {
  $('#message').text('Delete failed')
}

const updateStockSuccess = (stockId) => {
  $('#message').text('Stock updated!')

  $(`#updateStock-${stockId}`).modal('hide')
  // Removing show class triggers fade out transition
  $('.modal-backdrop').removeClass('show')
  return new Promise(resolve => setTimeout(() => {
    $('.modal-backdrop').remove()
    resolve()
  }, 150))
}

const updateStockFailure = () => {
  $('#message').text('Stock not updated!')
}

module.exports = {
  createStockSuccess,
  createStockFailure,
  indexStocksSuccess,
  indexStocksFailure,
  destroyStockSuccess,
  destroyStockFailure,
  updateStockSuccess,
  updateStockFailure
}
