'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    app = express();

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
  response.end(request.query.todo);
});

app.get('/:name', function(request, response) {
  response.render('name', {name: request.params.name, lastName: request.query.lastName, inseam: request.query.inseam});
  // var greeting = 'Hello, ',
  //     endGreetingPunctuation = '!',
  //     firstName = request.params.name,
  //     lastName = request.query.lastName,
  //     inseam = request.query.inseam,
  //     message = '';
  //
  // if (firstName && lastName) {
  //   message = greeting + firstName + ' ' + lastName + endGreetingPunctuation;
  // } else if (firstName) {
  //   message = greeting + firstName + endGreetingPunctuation;
  // }
  //
  // if (inseam) {
  //   message = message + ' And I understand your inseam is ' + inseam + ' inches.';
  // }
  //
  // if (inseam > 34) {
  //   message = message + ' Wow, you are tall!';
  // } else if (inseam < 26) {
  //   message = message + ' How is the weather down there?';
  // }
  //
  // response.end(message);


});


app.post('/todo/new/', function(request, response){
  response.redirect('/todo?todo=' + request.body.todo);
});
// allow other modules to use the server
module.exports = app;
