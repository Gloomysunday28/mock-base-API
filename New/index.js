/**
 * @author [Mr.Cai]
 * @email [459963103@qq.com]
 * @create date 2020-01-14 15:58:40
 * @modify date 2020-01-14 15:58:40
 * @desc [实现一个new操作符]
*/

function DiYNew(constructFn, ...arg) {
  const newObj = {}
  newObj.__proto__ = constructFn.prototype
  const res = constructFn.call(newObj, ...arg)
  return typeof res === 'object' ? res : newObj
}

module.exports = DiYNew