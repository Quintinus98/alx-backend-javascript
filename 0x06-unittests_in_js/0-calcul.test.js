const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 3.0), 4);
  });
  it('should round > .5', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should round down < .5', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('should round >= .5', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
