

// function delay(n) {
//     for (let i = 1; i <= n; i++){
//         const x = new Date().getTime();
//         while (new Date().getTime() <= x + 1000) { 
    
//         }
//     }
   
//     fun();
// }




// function fun() {
//     console.log("Inside Fun");
// }


console.log("START");

setTimeout(function cb() { 
    console.log("Inside CB");
}, 8000);


console.log("END");



// console.log("START");

// setTimeout(() => {
//     console.log("Inside CB");
// }, 1000);

// let num = 100;

// while (num < 200) {
//     console.log(num);
//     num = num - 10;
// }

