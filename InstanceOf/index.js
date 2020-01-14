/**
 * @author [Mr.Cai]
 * @email [459963103@qq.com]
 * @create date 2020-01-14 14:54:25
 * @modify date 2020-01-14 14:54:25
 * @desc [实现InstanceOf] 
 *  instanceof是指后面的对象的prototype是否是存在于前者的原型链上
 *  obj.__proto__.__proto__... === parent.prototype
 */

const InstanceOf = function(child, parent) {
  const prototype = parent.prototype
  const __proto__ = child.__proto__
  
  if (!prototype || !__proto__) return false
  if (__proto__ === prototype) return true

  return InstanceOf(parent, parent.__proto__)
}

module.exports = InstanceOf
