var expect = require('chai').expect;

var ctrl = require('../../../../controllers/api/posts');

describe('controllers.api.post',function  () {
	// body...
	it('exists',function(){
		expect(ctrl).to.exists;
	});
})
