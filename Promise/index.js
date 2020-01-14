/**
 * @author [Mr.Cai]
 * @email [459963103@qq.com]
 * @create date 2020-01-14 14:15:12
 * @modify date 2020-01-14 14:15:12
 * @desc [es5实现Promise]
 */

/**
 * @description
 *   Promise具有三种状态
 *   1. pending 未完成
 *   2. resolve 完成
 *   3. reject 拒绝
 * 
 *   Promise具有then 与 catch方法，支持链式调用
 */
function DiYPromise (fn) {
  this.pending = 'pending'
  this.promiseReturn = {
    '[[PendinValue]]': this.value,
    '[[PendinPending]]': this.pending
  }
  try {
    fn(resolve.bind(this), reject.bind(this))
  } catch (err) {
    this.error = err
  }

  return this
}

DiYPromise.prototype = {
  constructor: DiYPromise,
  then: function (thenResolve, thenReject) {
    if (this.pending === 'resolve') {
      thenResolve(this.value)
    } else if (this.pending === 'reject') {
      thenReject(this.reject)
    }

    return this
  },
  catch: function (catchBack) {
    if (this.error) {
      catchBack(this.error)
    }

    return this
  }
}

const resolve = function (data) {
  this.pending = 'resolve'
  this.value = data
}

const reject = function (error) {
  this.pending = 'reject'
  this.reject = error
}

module.exports = DiYPromise