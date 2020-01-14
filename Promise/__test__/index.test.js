const DiYPromise = require('../index')

describe('test promise', () => {
  test('resolve promise', () => {
    new DiYPromise((resolve, reject) => {
      resolve('resolve')
    }).then(res => {
      expect(res).toBe('resolve')
    })
  })

  test('reject promise', () => {
    new DiYPromise((resolve, reject) => {
      reject('reject')
    }).then(() => {}, res => {
      expect(res).toBe('reject')
    })
  })
})
