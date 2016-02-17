'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(express.static('public'));

// to extract form data from POST bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(request, response) {
  response.end("Hello world!");
});

app.get('/:name', function(request, response) {
  response.end('Hello, ' + request.params.name + '!');
});

// app.post('/todo/new', function(request, response) {
//   response.end('Hello POST to /todo/new');  
// })

// allow other modules to use the server
module.exports = app;
