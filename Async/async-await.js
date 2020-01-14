/**
 * @author [Mr.Cai]
 * @email [459963103@qq.com]
 * @create date 2020-01-13 11:21:17
 * @modify date 2020-01-13 11:21:17
 * @desc [async的实现原理]
 */

 const async = function async(...arg) {
   return spawn(function *() {
     // ...
   })
 }

 const spawn = function(genF) {
  return new Promise((resolve, reject) => {
    genF = genF()
    function step(nextF) {
     let next
     
     try {
       next = nextF()
     } catch(err) {
       return reject(err)
     }
     
     if (next.done) {
       return resolve(next.value)
     }
     Promise.resolve(next.value).then((res) => {
      step(function() {
        return genF.next(res)
      })
     }, (e) => {
      step(function() {
        return genF.throw(e)
      })
     })
    }
    step(function() {
      return genF.next()
    })
  })
 }

 module.exports = async
 