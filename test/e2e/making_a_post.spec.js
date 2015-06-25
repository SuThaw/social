var db = require('../../db');
var chai = require('chai');
chai.use(require('chai-as-promised'));
var expect = require('chai').expect;
describe('making a post',function(){
	it('log in and create a new post',function(){
		browser.get('http://localhost:3001');
		element(by.css('nav .login')).click();
		element(by.model('username')).sendKeys('suthaw');
		element(by.model('password')).sendKeys('plp2tlh');
		element(by.css('form .btn')).click();
		element(by.css('nav .post')).click();
		var post = 'my new post' + Math.random() ;
		element(by.model('postBody')).sendKeys(post);
		element(by.css('form .btn')).click();
/*
		element
			.all(by.css('ul.list-group li'))
			.first()
			.getText()
			.then(function(text){
				expect(text).to.contain(post);	
		});
*/

		expect(element.all(by.css('ul.list-group li')).first().getText()).to.eventually.contain(post);
	});
	afterEach(function(){
//		db.connection.db.dropDatabase();
	});

});
