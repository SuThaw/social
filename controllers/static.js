var express = require('express');
var router = express.Router();
var path = require('path');
router.use(express.static(__dirname + '/../assets'));


router.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'../layouts','posts.html'));
});

module.exports = router;
