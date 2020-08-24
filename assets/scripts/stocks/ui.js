'use strict'

// Require:
const showStocksTemplate = require('../templates/stock-list.handlebars')
// const store = require('../store')

const indexPlantsSuccess = (data, hideMessage) => {
  const showStocksHtml = showStocksTemplate({ stocks: data.stocks })

  if (!hideMessage) {
    // if no stocks in collection:
    if (data.stocks.length === 0) {
      $('#message').text('no stocks in your list!')
    } else {
      $('#message').text('Stocks List!')
    }
  }

  // Hide "outdated" stock collection:
  $('#content').empty()
  $('#content').append(showStocksHtml)
  $('#content').show()
}

const indexStocksFailure = () => {
  $('#message').text('Stocks not found. Please try again')
}

const createStockSuccess = (data) => {
  const showStocksHtml = showStocksTemplate({ stocks: data.stocks })

  $('#message').text('New stock added')
  $('#content').append(showStocksHtml)

  $('form').trigger('reset')
}

const createStockFailure = () => {
  $('#message').text('Stock not added')
}

const destroyStockSuccess = () => {
  $('#message').text('Stock Deleted!')
}

const destroyStockFailure = () => {
  $('#message').text('Delete not successful!')
}

const updateStockSuccess = (stockId) => {
  $('#message').text('stock updated!')

  $(`#updateStock-${stockId}`).modal('hide')
  // Removing show class triggers fade out transition
  $('.modal-backdrop').removeClass('show')
  return new Promise(resolve => setTimeout(() => {
    $('.modal-backdrop').remove()
    resolve()
  }, 150))
}

const updateStockFailure = () => {
  $('#message').text('Stock not updated.')
}

module.exports = {
  createStockSuccess,
  createStockFailure,
  indexPlantsSuccess,
  indexStocksFailure,
  destroyStockSuccess,
  destroyStockFailure,
  updateStockSuccess,
  updateStockFailure
}
