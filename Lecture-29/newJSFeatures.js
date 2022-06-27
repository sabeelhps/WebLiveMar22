

// ------------------spread operator--------

const arr = [1, 2, 3, 4];

const arr1 = [...arr, 30, 40, 50];

// console.log(arr1);

const obj = {
    l: 10,
    m: 'Hello',
    n:true
}

const obj1 = {
    ...obj,
    name:'Monu'
}

// console.log(obj1);


// ----------------------------------Rest Parameters-------


function addition(a, b, c, ...nums) {
    // console.log(nums);
    // console.log(arguments);
    return a + b + c + nums.reduce((sum, curr) => curr + sum, 0);
}

// console.log(addition(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// console.log(addition(1, 2, 3, 4, 5, 6, 7));
// console.log(addition(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14));


// -------------------------------Destructuring--------------


const fruits = ['Mango', 'Apple','Orange'];


// const firstFruit = fruits[0];
// const secondFruits = fruits[1];

// Array Destructring
const [firstFruit , secondFruit, thirdFruit='DefaultFruit'] = fruits; 

// console.log(firstFruit);
// console.log(secondFruit);
// console.log(thirdFruit);


// Object Destructring

const car = {
    name: 'BMW',
    price: 100,
}

// const name = car.name;
// const price = car.price;

const { price, name:carName='Anonymous',  } = car;

console.log(carName);
console.log(price);
