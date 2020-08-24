'use strict'

// Require:
const store = require('../store')

// Update Screen Functions:

// Only show sign up and sign in on landing page:
$('#authenticated').hide()

// Sign Up:
const signUpSuccess = function () {
  $('#message').text('You are signed up! sign in to continue!')

  $('form').trigger('reset')
}
const signUpFailure = function () {
  $('#message').text('sign up failed! please try again!')
}

// Sign In:
const signInSuccess = function (response) {
  $('#message').text('signed in successfully! ')

  store.user = response.user

  $('form').trigger('reset')

  // Remove sign up and sign in options, show the rest:
  $('#unauthenticated').hide()
  $('#authenticated').show()
}

const signInFailure = function () {
  $('#message').text('sign in failed!')
}

// Sign Out:
const signOutSuccess = function () {
  $('#message').text('Sign Out Successful!')

  // Show only sign up and sign in again:
  $('#unauthenticated').show()
  // $('#sign-up').show()
  $('#authenticated').hide()
  // hide Stocks collection when signing back in after clicking see all Stocks and then signing out:
  $('#content').hide()

  store.user = null
}
const signOutFailure = function () {
  $('#message').text('Sign Out Failed! Please try again.')
}

// Change Password:
const changePasswordSuccess = function () {
  $('#message').text('Password changed successfully!')

  $('form').trigger('reset')
}
const changePasswordFailure = function () {
  $('#message').text('Password change failed! Please try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
