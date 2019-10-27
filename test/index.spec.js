const expect = require('chai').expect
const server = require('../index');

describe('test', () => {
  it('should return a string', () => {
    expect('ci with travis').to.equal('test error testing');
  });
});
