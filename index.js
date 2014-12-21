var express = require('express');
var request = require('request');
var config = require('./config.js');
var app = express();

// Prepares the meetup API URL for upcoming events
function meetupUrl (group) {

  return 'http://api.meetup.com/2/events'
    + '?sign=true'
    + '&photo-host=public'
    + '&group_urlname=' + group
    + '&key=' + config.key;
}

// Some CORS ...
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/:group/events', function (req, res) {

  request(meetupUrl(req.params.group)).pipe(res);
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Meetup proxy listening at http://%s:%s', host, port);

});
