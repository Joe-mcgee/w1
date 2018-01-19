
var assert = require("chai").assert;
var luhns = require('../luhns.js');

describe("Luhns Algorithm", function() {
  it("check Should return true if valid number or false if invalid", function() {
    var number = 5699855;
    var number2 = 172638;
    var result = luhns.check(number);
    var result2 = luhns.check(number2);
    assert.isTrue(result);
    assert.isFalse(result2);
  });
  it('toArray should take a number and turn into array of numbers', function() {
    var number = 44857;
    var result = luhns.numtoArray(number);
    assert.deepEqual([4, 4, 8, 5, 7], result);
  });
  it('Double aught to return array with every second number doubled', function() {
    var accountNumArray = [1, 2, 3, 4, 5];
    var result = luhns.double(accountNumArray);
    assert.deepEqual([1, 4, 3, 8, 5], result);
  });
  it('digital router should take every second digit and return its digital route', function () {
    var doubleArray  = [1, 12, 3, 14, 5];
    var result = luhns.root(doubleArray);
    assert.deepEqual([1, 3, 3, 5, 5], result);
  });
  it('summer should take an array of numbers and return its sum', function() {
    var sumArray = [1, 12, 3, 2, 5];
    var result = luhns.summer(sumArray);
    assert.equal(23, result);
  });
  it('luhner should take a number apply % 10 and return true if 0', function() {
    var number = 20;
    var result = luhns.luhner(number);
    assert.isTrue(result);
  });
});




