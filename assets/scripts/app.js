'use strict'

// Require:
const authEvents = require('./auth/events')
const stockEvents = require('./stocks/events')

// Event Listeners:
$(() => {
  // Authentication
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)

  // Stock Listeners:
  $('#create-stock').on('submit', stockEvents.onCreateStock)
  $('#index-stocks').on('click', stockEvents.onIndexStocks)
  $('.content').on('click', '.btn-danger', stockEvents.onDestroyStock)
  $('.content').on('submit', '.update-stock', stockEvents.onUpdateStock)
})
