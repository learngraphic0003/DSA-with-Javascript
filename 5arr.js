let prompt = require('prompt-sync')()


let arr = [34,56,4,57,87]

// let sum = 0


// for ( i = 0 ; i < arr.length; i++ ){
    
//  sum += arr[i]

 
// }
// console.log(sum)





max = arr[0]

for ( i = 1 ; i < arr.length; i++ ){ 

  if( max < arr[i])
{
  max = arr[i]
}
    
}

console.log(max)

console.log( Math.max(...arr))
