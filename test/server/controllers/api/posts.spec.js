var expect = require('chai').expect;
var api = require('../../support/api');
var user = require('../../support/user');
var Post = require('../../../../models/post');

describe('controllers.api.posts',function(){
	describe('GET /api/posts',function(){
		beforeEach(function(done){
			Post.remove({},done);

		});

		describe('GET /api/postss',function(){
		
			beforeEach(function(done){
				var posts = [{username:'Suthaw',body:'Post 1'},{username:'TLH',body:'Post 2'},{username:'sumyat',body:'Post 3'}];
				Post.create(posts,done);
			});	

			it('has 3 posts',function(done){
				api
					.get('/api/posts')
					.expect(200)
					.expect(function(response){
						expect(response.body).to.have.length(3);
					})
					.end(done);
			});
		});

		describe('GET /api/posts',function(){
			var token;
			beforeEach(function(done){
				user.create('suthaw','plp2tlh',function(err,user){
					token = user.token;
					done(err);
				})	
			});

			beforeEach(function(done){
				api
					.post('/api/posts')	
					.send({body:'this is my new post'})
					.set('x-Auth',token)
					.expect(201)
					.end(done)
			});

			it('added 1 new post',function(done){
				Post.findOne(function(err,post){
					expect(post.body).to.equal('this is my new post');
					done(err);
					
				});
			});
		});
	});
});
