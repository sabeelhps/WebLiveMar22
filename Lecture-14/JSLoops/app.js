
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);


// -------------------------------------------------------------------
// for loops

// for (initialization; condition check;updation condition) {
        // work
// }

// let num;
// for (num = 1; num <= 10; num++){
//     if (num === 5) {
//         // break;
//         continue;
//     }
//     console.log(num);
// }

// -------------------------------------------------

// while (condition) {
//     work
// }



// let num = 10;

// while (num <= 100) {
//     console.log(num);
//     num = num + 10;
// }



// ----------------------------------------------------------
// let num = 100;

// while (num <= 200) { //infinite loop
//     console.log(num);
//     num = num - 10;
// }


const fruits = [{ name: 'Mango', price: 100 }, { name: 'Guava', price: 40 }, { name: 'Apple', price: 200 }];

// for (let i = 0; i < fruits.length; i++){
//     console.log(`Price of ${fruits[i].name} is ${fruits[i].price}/kg`);
// }


// --------------------------for of Loops in JS


// for (let fruit of fruits) {
//     console.log(`Price of ${fruit.name} is ${fruit.price}/kg`);
// }



// ----------------------for in -----------------

// const car = {
//     name: 'BMW',
//     price: 100000,
//     isDiscBrake: true
// }


// for (let i in car) {
//     console.log(`${i}--->${car[i]}`);
// }


// for (let i = 1; i <= 5; i++){
//     let str = "";
//     for (let j = 1; j <= i; j++){
//         str += "* ";
//     }
//     console.log(str);
// }