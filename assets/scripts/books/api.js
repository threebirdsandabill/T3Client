'use strict'

const getBooks = function () {
  return $.ajax({
    url: 'https://wdi-library.herokuapp.com/books',
    method: 'GET'
  })
}
module.exports = {
  getBooks: getBooks
}
