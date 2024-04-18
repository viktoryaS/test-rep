// document.body.style.background = 'red';
// setTimeout(() => document.body.style.background = '', 3000);

// const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
// const fruits2 = {}
// fruits.forEach((f) => {
//     if (fruits2[f] ) {
//         fruits2[f] += 1
//     }else {fruits2[f] = 1}
// })
// console.log(fruits2)

// const myStr = 'pizza';
//  const myStr2 = myStr.split('').reverse().join('')
// console.log(myStr2)

// const arr = []
// for (let i = myStr.length -1; i >= 0; i--) {
//     arr.push(myStr[i])
// }
// console.log(arr.join(''))

// let arrey = [1, 2, false];
// // console.log(arrey.indexOf(0));
// console.log(arrey.lastIndexOf(2));

// let fruits = ['яблоло', 'апельсин', 'яблоко'];
// console.log(fruits.lastIndexOf('апельсин'))

// const arr = ['kiwi', 'apple','kiwi', 'juse'];
// const result = arr.filter(function(item,index, arrey ){

// })
// console.log(result);

// function compareNumeric(a,b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b ) return -1;
// }

// let arr = [ 1, 2, 15 ];
// arr.sort(compareNumeric);
// console.log(arr)

// [1, -2, 15, 2, 0, 8].sort(function(a, b) {
//     console.log(a + '<>' + b);
//     return a -b;
// });

// let names = 'vasi, peti, masha';
// let arr = names.split(',');
// for (let name of arr){
//     console.log(`сообщение получат: ${name}`);
// };
// let arr = ['ilia', 'kant'];
// let [firstName, surName] = arr;
// console.log(firstName);
// console.log(surName);


const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi'];
const myArrey = new Set(fruits);
console.log(Array.from(myArrey))


