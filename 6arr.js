let arr = [1,2,3,4,5]

// let copy = arr[0];
// for( let i = 0; i< arr.length-1;i++)
// {
//     arr[i] = arr[i+1];
//     debugger
// }

// arr[arr.length-1] = copy

// console.log(arr)

let copy = arr[arr.length-1];
for ( let i = arr.length-1;i>0;i-- ){
    arr[i] = arr[i-1];
}

arr[0] = copy

console.log(arr)







for ( i = 1 ; i <= 4 ; i++  )
{
    console.log( i + " execution")
     
    for( j = 0 ; j <= 3 ;j++ )
    {
console.log("hello shubham")
        
    }
}

