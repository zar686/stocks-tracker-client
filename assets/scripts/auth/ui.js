'use strict'

// Require:
const store = require('../store')

// Update Screen Functions:

// Only show sign up and sign in on landing page:
$('#authenticated').hide()

// Sign Up:
const signUpSuccess = function () {
  $('#message').text('Sign Up successful!')

  $('form').trigger('reset')
}
const signUpFailure = function () {
  $('#message').text('Sign up failed!')
}

// Sign In:
const signInSuccess = function (response) {
  $('#message').text('signed in!')

  store.user = response.user

  $('form').trigger('reset')

  // Remove sign up and sign in options, show the rest:
  $('#unauthenticated').hide()
  $('#authenticated').show()
}

const signInFailure = function () {
  $('#message').text('Sign in failed')
}

// Sign Out:
const signOutSuccess = function () {
  $('#message').text('Sign out successful')

  // Show only sign up and sign in again:
  $('#unauthenticated').show()
  // $('#sign-up').show()
  $('#authenticated').hide()
  // hide stock collection when signing back in after clicking see all stocks and then signing out:
  $('#content').hide()

  store.user = null
}
const signOutFailure = function () {
  $('#message').text('sign out failed')
}

// Change Password:
const changePasswordSuccess = function () {
  $('#message').text('Password successfully changed')

  $('form').trigger('reset')
}
const changePasswordFailure = function () {
  $('#message').text('Password change not successful')
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
