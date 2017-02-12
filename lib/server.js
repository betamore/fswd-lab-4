'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    app = express(),
    todo = [];

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'));
}

app.use(express.static('public'));

// to extract form data from POST bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/todo', function(request, response){
  response.render('todo', {todoList: todo});
});

app.get('/todo/delete', function(request, response){
  //Remove the todo at the specified index from the array.
  todo.splice(request.query.todo, 1);

  //Send the user back to the todo list.
  response.redirect('/todo');

});

app.post('/todo/new/', function(request, response){
  //Add our todo to the list
  todo.push(request.body.todo);

  //Send the user back to the todo list.
  response.redirect('/todo');
});

app.get('/:name', function(request, response) {
  response.render('name', {name: request.params.name, lastName: request.query.lastName, inseam: request.query.inseam});
});
// allow other modules to use the server
module.exports = app;
