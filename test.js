var assert = require('assert');

describe('String#split______', function(){
  it('should return an array', function(){
    assert(Array.isArray('a,b,c'.split(',')));
  });
});
