let prompt = require("prompt-sync")();

let arr = [34, 56, 4, 57, 87];

// let sum = 0

// for ( i = 0 ; i < arr.length; i++ ){

//  sum += arr[i]

// }
// console.log(sum)

// 1 max number

// max = arr[0]

// for ( i = 1 ; i < arr.length; i++ ){

//   if( max < arr[i])
// {
//   max = arr[i]
// }

// }

// console.log(max)

// console.log( Math.max(...arr))






// 2 max number

// let max = Math.max(arr[0], arr[1]);
// let smax = Math.min(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > max) {
//     smax = max;
//     max = arr[i];
//   } else if (arr[i] > smax && max != arr[i]) {
//     smax = arr[i];
//   }
// }

// console.log(smax)




// revarce number


// let temp = new Array(arr.length);

// let j = 0 
// for( let i = arr.length-1 ; i>= 0 ; i--){
// temp [j] = arr[i];
// j++
// }

// console.log(temp)






// revarce number



let i = 0, j = arr.length-1;

while(i!=j) {

  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  i++
  j--
}

console.log(arr)




// let arre = [1,1,0,1,0,1,1,0,0,1,0];

// let i = 0 , j = 0 ;

// while ( i < arre.length ) {

//   if(arre[i] === 0 ){
//     let temp = arre[i]
//     arre[i] = arre[j]
//     arre[j] = temp;
//     j++
//   }
//   i++

// }


// console.log( arre)






