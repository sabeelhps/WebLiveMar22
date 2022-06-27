console.log('Hello');


const person = {
    firstName: 'Kartik',
    lastName:'Mathur'
}

console.log(person);

person.age = 25;

delete person.firstName;

console.log(person);


const arr = [1, 2, 3, 4];

const nums = [...arr, 10, 20, 30];

console.log(nums);


const colors = ['Blue', 'Lightgreen', 'Orange', 'Purple'];


const upperCaseColors = colors.map((color) => color.toUpperCase());

console.log(upperCaseColors);


const mp = new Map();

mp.set('Mango', 60);
mp.set('Orange', 30);
mp.set('Grapes', 20);

console.log(mp);