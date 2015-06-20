var router = require('express').Router();
var path = require('path');
router.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'../layouts','posts.html'));
});

module.exports = router;
