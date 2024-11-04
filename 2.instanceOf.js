/**
 * 
 * @param {*} obj 实例对象
 * @param {*} func 构造函数
 * @returns true false
 */
const instanceOf1 = (obj, func) => {
  if (!(obj && ['object', 'function'].includes(typeof obj))) {
    return false
  }
  
  let proto = Object.getPrototypeOf(obj)

  if (proto === func.prototype) {
    return true
  } else if (proto === null) {
    return false
  } else {
    return instanceOf1(proto, func)
  }
}
/**
 * 
 * @param {*} obj 实例对象
 * @param {*} func 构造函数
 * @returns true false
 */

let Fn = function () { }
let p1 = new Fn()

console.log(instanceOf1({}, Object))
console.log(instanceOf1(p1, Fn))
console.log(instanceOf1({}, Fn))
console.log(instanceOf1(null, Fn))
console.log(instanceOf1(1, Fn))
console.log(instanceOf1(function a() {}, Function))

console.log(11111111)


console.log(instanceOf2({}, Object))
console.log(instanceOf2(p1, Fn))
console.log(instanceOf2({}, Fn))
console.log(instanceOf2(null, Fn))
console.log(instanceOf2(1, Fn))
console.log(instanceOf1(function a() {}, Function))
