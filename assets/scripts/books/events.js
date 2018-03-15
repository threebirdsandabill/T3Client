'use strict'

const booksApi = require('./api')
const booksUi = require('./ui')

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked

const onGetBooks = function (event) {
  event.preventDefault()
  booksApi.getBooks()
    // .then(console.log)
    .then(booksUi.onSuccess)
    .catch(booksUi.onFail)
}

const addHandlers = () => {
  $('#getAllBooks').on('click', onGetBooks)
}

module.exports = {
//  onGetBooks: onGetBooks
  onGetBooks: onGetBooks,
  addHandlers
}
