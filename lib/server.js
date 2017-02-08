'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(express.static('public'));

// to extract form data from POST bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'jade');
app.set('views', './views');

app.get("/", function(request, response) {
  response.end("Hello world!");
});

app.get('/jade-example', function(req, res) {
  res.render('jade-example', { name: 'John' });
});

app.get('/:name', function(request, response) {
  response.render('name', {
    inseam: request.query.inseam,
    name: request.params.name,
    lastName: request.query.lastName
  });
});

app.post('/todo/new', function(request, response) {
  response.end('Added to do: ' + request.body.todo + ' ' + request.body.otherField);
});

// allow other modules to use the server
module.exports = app;
