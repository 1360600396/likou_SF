/**
 * 
 * @param {*} array 深层嵌套的数据
 * @returns array 新数组
 */
const flat=function (array){
  let result=[]
for(let item of array){
  if(Array.isArray(item)){
    flat(item).forEach(element => {
      result.push(element)
    });
  }
  else{
    result.push(item)
  }
}
return result
}

const flat0 =function (array){
  // let result=[]
 return array.reduce((prev,cur)=>{
return prev.concat(Array.isArray(cur)?flat(cur):cur)
},[])


let arr1 = [
  1,
  [ 2, 3, 4 ],
  [ 5, [ 6, [ 7, [ 8 ] ] ] ]
]
console.log(flat1(arr1))

// js原生的flat方法
/**
 * 
 * @param {*} array 深层嵌套的数据
 * @returns 新数组
 */
const flat2 = (array) => {
  return array.flat(Infinity)
}

let arr2 = [
  1,
  [ 2, 3, 4 ],
  [ 5, [ 6, [ 7, [ 8 ] ] ] ]
]

console.log(flat2(arr2))


let arr3 = [
  1,
  [ 2, 3, 4 ],
  [ 5, [ 6, [ 7, [ 8 ] ] ] ]
]

console.log(flat3(arr3))
