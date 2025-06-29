
let prompt = require('prompt-sync')()

let N = Number(prompt("enter the number"))


// for( i = 1 ; N >= i;i++){
//     process.stdout.write("*")
// }







//     console.log("*")
//     console.log("*")
//     console.log("*")

//     process.stdout.write("*")
//     process.stdout.write("*")
//     process.stdout.write("*")
//     process.stdout.write("*")


//     for( i = 1 ; i <= N ;i++){
//      for(j = 1; j <= N ;j++ )
//      {
//         process.stdout.write("*")
//      }
//      console.log()
// }













//     for( i = 1 ; i <= N ;i++){
//      for(j = 1; j <= i ;j++ )
//      {
//         process.stdout.write("*")
//      }
//      console.log()
// }


    for( i = 1 ; i <= N ;i++){
        let ascii = 65
     for(j = 1; j <= i ;j++ )

     {
        process.stdout.write (String.fromCharCode(ascii)+" " )  
        ascii++ 
     }
     console.log()
}