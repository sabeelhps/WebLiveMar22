


// function fun() {
   
//     this.name = 'Kartik'; // window.name='Kartik'
//     console.log(this);
// }

// fun();


function Person(name,age) { //constructor function
    this.name = name;
    this.age = age;  
}

Person.prototype.sayName = function () {
    console.log(`My Name is : ${this.name}`)
}

const p1 = new Person('Vivek', 23);
const p2 = new Person('Garvit', 22);
