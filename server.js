var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(require('./auth'));
app.use('/api/posts',require('./controllers/api/posts'));



app.use('/api/sessions',require('./controllers/api/sessions'));
app.use('/api/users',require('./controllers/api/users'));
app.use(require('./controllers/static.js'));

app.get('/',function(req,res){
	res.sendfile('layouts/posts.html');
});



var port = process.env.PORT || 3000;
var server = app.listen(port,function(){
	console.log('serve',process.pid,' listening on',port);
});
require('./websockets').connect(server);
