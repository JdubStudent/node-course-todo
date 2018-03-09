const express = require('express');
const bp = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {User} = require('./models/User');

var app = express();

app.use(bp.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new Todo({
   text: req.body.text 
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });

});

app.listen(3000, () => {
  console.log('Started server on port 3000');
});

// var newTodo = new Todo({
//   text: '  Go to fiji  ',
//   trim: true
// });

// newTodo.save()
// .then((doc) => {
//   console.log('Saved todo', doc);
// }, (error) => {
//   console.log('error saving todo');
// });

// var newUser = new User({
//   email: 'jdub@me.com',
//   username: 'Jdub'
// });

// newUser.save()
// .then((doc) => {
//   console.log('Added new user:', doc);
// }, (err) => {
//   console.log('Error adding user', err);
// });