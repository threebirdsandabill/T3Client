'use strict'

const onSuccess = function (data) {
  console.log('data is ', data)
  console.log('data.books is ', data.books)
}

const onFail = function (error) {
  console.log('Failure!')
  console.error(error)
}
module.exports = {
  onSuccess: onSuccess,
  onFail
}
