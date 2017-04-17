const chai = require('chai')
const assert = chai.assert
const dailyPlanner = require('../src/main')

describe('#dailyPlanner function', function () {
  it('returns type string', function () {
    var result = dailyPlanner()
    assert.isString(result, 'Nope. Not a string!')
  })
  it('should return the string "Working" if Monday-Thursday is inputted', function () {
    var actual = dailyPlanner('Wednesday')
    var expected = 'Working'
    assert.equal(actual, expected)
  })
  it('should return the string "TGIF" if Friday is inputted', function () {
    var actual = dailyPlanner('Friday')
    var expected = 'TGIF'
    assert.equal(actual, expected)
  })
  it('should return the string "Weekend" if Saturday/Sunday is inputted', function () {
    var actual = dailyPlanner('Sunday')
    var expected = 'Weekend'
    assert.equal(actual, expected)
  })
  it('should return the string "pick a day" if no day of week is inputted', function () {
    var actual = dailyPlanner('')
    var expected = 'Pick a day'
    assert.equal(actual, expected)
  })
  it('should return the string "pick a day" if no day of week is inputted', function () {
    var actual = dailyPlanner('Monday', 'Tuesday')
    var expected = 'Pick one day'
    assert.equal(actual, expected)
  })
})
