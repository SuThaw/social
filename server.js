var express = require('express');
var logger = require('morgan');
var websockets = require('./websockets');
var app = express();

app.use(logger('dev'));
app.use(require('./controllers'));

app.get('/',function(req,res){
	res.sendfile('layouts/posts.html');
});



var port = process.env.PORT || 3000;
var server = app.listen(port,function(){
	console.log('serve',process.pid,' listening on',port);
});

websockets.connect(server);
