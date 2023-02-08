const mongoose = require('mongoose');

// Note: If you connect to a database that doesn't exist, Mongoose will create the DB for you as soon as you create your first document!
// creating/using the first_mongoose db
mongoose.connect('mongodb://127.0.0.1:27017/first_mongoose', {
    // Note: The useNewUrlParser and useUnifiedTopology are options we pass to get rid of deprecation messages in our terminal.
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

