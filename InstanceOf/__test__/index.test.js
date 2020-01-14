const instanceOf = require('../index')

describe('test instanceOf', () => {
  test('obj.__proto__.__proto__... === parent.prototype', () => {
    expect(instanceOf([], Array)).toBeTruthy()
  })
})
