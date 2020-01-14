const async = require('../async-await')

const asyncFn = async(function *() {
  var testAsync = 0
  yield new Promise(resolve => {
    resolve(5)
  }).then(res => {
    testAsync = res
  })
  testAsync = 2
  return testAsync
})


/**
 * 正常情况
 *  testAsync = 5
 * 调用async后， 需要等待
 *  testAsync = 2
 *  测试正确 √
 */
describe('getAsyncData', () => {
  it('expect testAsync toBe 2', () => {
    expect(asyncFn).resolves.toBe(2)
  })
})
