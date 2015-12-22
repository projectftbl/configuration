var should = require('chai').should()
  , sut = require('../lib');

var DEFAULT = 'default'
  , ENVIRONMENT = 'environment';

describe('Default configuration', function() {
		
  before(function() {
    this.setting = sut('default');
	});
	
  it('should retrieve setting', function() {
    this.setting.should.equal(DEFAULT);
  });

});

describe('Environment configuration', function() {
		
  before(function() {
    this.setting = sut('environment');
  });
	
  it('should retrieve setting', function() {
    this.setting.should.equal(ENVIRONMENT);
  });
	
});

describe('Overridden configuration', function() {
		
  before(function() {
    this.setting = sut('override');
  });
	
  it('should retrieve setting', function() {
    this.setting.should.equal(ENVIRONMENT);
  });
	
});

describe('Nested configuration', function() {
		
  before(function() {
    this.setting = sut('nested:setting');
  });
	
  it('should retrieve setting', function() {
    this.setting.should.equal(DEFAULT);
  });
	
});

describe('Nested environment configuration', function() {
		
  before(function() {
    this.setting = sut('nested:another');
  });
	
  it('should retrieve setting', function() {
    this.setting.should.equal(ENVIRONMENT);
  });
	
});