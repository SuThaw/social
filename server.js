var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api/posts',require('./controllers/api/posts'));
app.use(require('./controllers/static.js'));

app.get('/',function(req,res){
	res.sendfile('layouts/posts.html');
});



app.listen(3000,function(){
	console.log('serve listening on',3000);
});
