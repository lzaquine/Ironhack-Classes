const router = require('express').Router();
const Book = require('../models/Book.model');

//Route to get all the books
router.get('/books', (req, res, next) => {
  Book.find()
    .then((allBooks) => res.render('books/book-list.hbs', { books: allBooks }))
    .catch((err) => {
      console.log('Error while creating the book');
      next(err);
    });
});

//Get Route to show the create form
router.get('/books/create', (req, res, next) => {
  res.render('books/book-create');
});

//post route to receive the info from the form and add it to the DB
router.post('/books/create', (req, res, next) => {
  const { title, author, description, rating } = req.body;

  Book.create({ title, author, description, rating })
    .then((createdBook) => {
      console.log(`Created the book ${createdBook.title}`);
      res.redirect('/books');
    })
    .catch((err) => next(err));
});

//Get route to show the edit form
router.get('/books/:booksId/edit', (req, res, next) => {
  const { booksId } = req.params;
  Book.findById(booksId)
    .then((book) => res.render('books/book-edit', book))
    .catch((err) => next(err));
});

//Post route that receives information from the edit form and edits the book on the DB
router.post('/books/:booksId/edit', (req, res, next) => {
  const { booksId } = req.params;
  const { title, author, description, rating } = req.body;

  Book.findByIdAndUpdate(booksId, { title, author, description, rating })
    .then((book) => res.redirect(`/books/${booksId}`))
    .catch((err) => next(err));
});

//Route to delete the book
router.get('/books/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Book.findByIdAndDelete(id)
    .then(() => res.redirect('/books'))
    .catch((err) => next(err));
});

//Route to find the details using params
router.get('/books/:bookId', (req, res, next) => {
  const { bookId } = req.params;
  console.log(req.params);

  Book.findById(bookId)
    .then((book) => {
      console.log(book);
      res.render('books/book-details', book);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

module.exports = router;