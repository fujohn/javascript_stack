const BookController = require('../controllers/book.controller');

module.exports = (app) => {
    app.post('/api/books', BookController.create);  
}
