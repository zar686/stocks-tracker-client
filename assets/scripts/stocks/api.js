// Require:
const config = require('../config')
const store = require('../store')

// AJAX Functions:

const createStock = function (formData) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/stocks',
    method: 'POST',
    // created Stock belongs to signed-in user
    user: store.user,
    data: formData
  })
}

const indexStocks = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/stocks',
    method: 'GET',
    data: {
      stock: []
    }
  })
}

const destroyStock = function (stockId) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/stocks/' + stockId,
    method: 'DELETE'
  })
}

const updateStock = function (stockId, formData) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/stocks/' + stockId,
    method: 'PATCH',
    data: formData
  })
}

module.exports = {
  createStock,
  indexStocks,
  destroyStock,
  updateStock
}
