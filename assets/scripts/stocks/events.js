'use strict'

// Require:
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// Event Handler Functions:

// CREATE (add new stock)
const onCreateStock = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.createStock(formData)
    .then(ui.createStockSuccess)
    // pass in true to show createSuccess message
    .then(() => onIndexStocks(event, true))
    .catch(ui.createStockFailure)
}

// GET/INDEX (see all plants)
// pass in hideMessage as argument so create/update/destroy messages show
const onIndexStocks = function (event, hideMessage) {
  event.preventDefault()

  api.indexStocks()
    .then((res) => ui.indexStocksSuccess(res, hideMessage))
    .catch(ui.indexStocksFailure)
}

// DESTROY (remove selected plant)
const onDestroyStock = function (event) {
  event.preventDefault()

  // get id for plant who's remove button was clicked
  const stockId = $(event.target).data('id')

  api.destroyStock(stockId)
    .then(ui.destroyStockSuccess)
    // pass in true to show destroySuccess message
    .then(() => onIndexStocks(event, true))
    .catch(ui.destroyStockFailure)
}

// UPDATE (update info for selected stock)
const onUpdateStock = function (event) {
  event.preventDefault()

  const stockId = $(event.target).data('id')

  const form = event.target
  const formData = getFormFields(form)

  api.updateStock(stockId, formData)
    .then(ui.updateStockSuccess(stockId))
    // pass in true to show updateSuccess message
    .then(() => onIndexStocks(event, true))
    .catch(ui.updateStockFailure)
}

module.exports = {
  onCreateStock,
  onIndexStocks,
  onDestroyStock,
  onUpdateStock
}
