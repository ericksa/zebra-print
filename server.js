var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));

}).listen(8080, "0.0.0.0");
    console.log("App now running on port 8080");
;
