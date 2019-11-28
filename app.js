var express = require('express');
// var request = require('request');
// var path = require('path');
// var http = require('http');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
  console.log('> GET REQUEST!');

  res.sendFile(__dirname + "/public/index.html");
});

const server = app.listen(port, function(){
  console.log(process.version);
  console.log(`Express running → PORT ${server.address().port}`);
});
