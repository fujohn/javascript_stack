const Author = require('../models/author.model');    /* this is new */

module.exports = {
    createAuthor: (request, response) => {
        // Mongoose's "create" method is run using our Author model to add a new author to our db's author collection.
        Author.create(request.body) //This will use whatever the body of the client's request sends over
            .then(author => response.json(author))
            .catch(err => response.status(400).json(err));
    }
    ,

    getAllAuthors: (request, response) => {
        Author.find({}).sort({name:'asc'})
        .then(authors => {
            console.log(authors);
            response.json(authors);
        })
        .catch(err => {
            console.log(err);
            response.json(err);
        })
    },

    getAllAuthors: (request, response) => {
        Author.find({}).sort({authorName:'asc'})
        .then(authors => {
            console.log(authors);
            response.json(authors);
        })
        .catch(err => {
            console.log(err);
            response.json(err);
        })
    },

    getAuthor: (request, response) => {
        Author.findOne({_id:request.params.id})
            .then(author => response.json(author))
            .catch(err => response.json(err));
    },

    updateAuthor: (request, response) => {
        Author.findOneAndUpdate({_id: request.params.id}, 
                request.body, 
                {new:true, runValidators: true})
            .then(updatedAuthor => response.json(updatedAuthor))
            .catch(err => response.status(400).json(err))
    },

    deleteAuthor: (request, response) => {
        Author.deleteOne({_id: request.params.id})
            .then(deleteConfirmation => response.json(deleteConfirmation))
            .catch(err =>  response.json(err))
    }
}
