
// ----------------------------------------map------------

// function square(num) {
    
//     return num ** 2;
// }


// const nums = [1, 2, 3, 4, 5];

// const numSquare = nums.map(square);


// console.log(nums);
// console.log(numSquare);





// const fruits = ['Mango', 'Grapes', 'Guava', 'Orange'];

// const newFruitsList = fruits.map(function (fruit, idx, fruits) {
//     return fruit.toLowerCase();
// });


// const newFruitsArray = fruits.map(function (fruit,index) {
//     return { name: fruit, id: index + 1 };
// })


// console.log(fruits);
// console.log(newFruitsList);
// console.log(newFruitsArray);



// --------------------------------filter------------------


// function isEven(num) {
//     if (num % 2 == 0) {
//         return true;
//     }
//     return false;
// }

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const evenNums = nums.filter(isEven);


// console.log(nums);
// console.log(evenNums);


// --------------------------------reduce -------------------



// const arr = [10, 20, 30, 40, 50];


// const totalSum = arr.reduce(function (sum,curr) {
//     return sum + curr;
// },0);

// console.log(totalSum);




// const cart = [
//     { name: 'Iphone', price: 100, qty: 1 },
//     { name: 'Reebok Shoes', price: 200, qty: 2 },
//     { name: 'Watch', price: 10, qty: 3 }
// ];


// const totalPrice = cart.reduce(function (sum, item) {
//     return sum + item.price * item.qty;
// }, 0);

// console.log(totalPrice);

// total Amount the use has to pay?

// --------------------------------------sort------------------


// const arr = [100, 10, 30, 20, 70, 50, 60];

// arr.sort(function (a,b) {
//     return a - b;
// });

// console.log(arr);

