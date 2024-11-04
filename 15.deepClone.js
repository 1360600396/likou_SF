const obj = {
  name: '佩奇',
  family: {
    father: '猪爸爸'
  },
  hobby: ['跳泥坑', '唱歌'],
}

// 封装深拷贝函数 cloneDeep()
function cloneDeep(oldObj) {
  // 先判断拷贝的是数组还是对象
  const newObj = Array.isArray(oldObj) ? [] : {}

  // 遍历拷贝属性和值
  for (let k in oldObj) {
    // console.log(k)  // k 是属性
    // console.log(oldObj[k])  // oldObj[k] 是属性值
    // 把旧对象的值给新对象的属性
    if (typeof oldObj[k] === 'object') {
      // 如果属性值是引用数据类型，则需要递归再次拷贝
      newObj[k] = cloneDeep(oldObj[k])

    } else {
      // 否则属性值是基本数据类型，则直接赋值即可
      newObj[k] = oldObj[k]
    }
  }

  // 返回新对象
  return newObj
}
const newObj = cloneDeep(obj)
newObj.family.father = 'dad'
console.log(newObj)
console.log(obj) 

