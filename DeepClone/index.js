/**
 * @author [Mr.Cai]
 * @email [459963103@qq.com]
 * @create date 2020-01-14 16:56:35
 * @modify date 2020-01-14 16:56:35
 * @desc [手撸深克隆]
*/

const deep_clone = function(target) {
  return Object.keys(target).reduce((prev, next) => {
    const value = target[next]
    prev[next] = typeof value === 'object' ? deep_clone(value) : value
    return prev
  }, {})
}

module.exports = deep_clone
