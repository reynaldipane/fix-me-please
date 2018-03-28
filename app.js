const express = require('express');
const bodyParser = require('body-parser')
const app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api-crud-mongoose', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

app.use(bodyParser.urlencoded({ extended: false }))

var books = require('./routes/books');
var transactions = require('./routes/transactions');

app.get('/', (req,res) => {
  res.send('Api work')
})

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000, () => {
  console.log("Server running on port 3000");
})

module.exports=app