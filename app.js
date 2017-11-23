var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var port = 3000;
var server = app.listen(port, function(){
    console.log("server running at localhost:"+port+"/");

});