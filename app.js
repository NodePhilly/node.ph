

/**
 * Module dependencies.
 */

var http = require('http');
var path = require('path');
var express = require('express');
var routes = require('./routes');
var event = require('./routes/event');
var twitter = require('./routes/twitter');
var techweek = require('./routes/techweek');
var contact = require('./routes/contact');
var sponsor = require('./routes/sponsor');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/sponsor', sponsor.index);
app.get('/events', event.events);
app.get('/tweets', twitter.tweets);
app.get('/tweetpics', twitter.tweetpics);
app.get('/phillytechweek', techweek.index);
app.get('/contact', contact.index);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
