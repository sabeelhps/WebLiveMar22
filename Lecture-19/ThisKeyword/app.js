

// function fun() {
//     console.log(this);
// }

// fun();


// Implicit Binding
const obj = {
    name: 'Kartik',
    age: 24,
    favColor: 'blue',
    sayName: function () {
        console.log(this);
    },
    obj1: {
        l: 10,
        m: true,
        getM:function () {
            console.log(this);
        }
    }
}


// new keyword binding
// function Fun() {
//     console.log(this);
// }

// const f1 = new Fun();



// Explicit binding

function fun(name,age) {
    console.log(this);
    console.log(name);
    console.log(age);
}

const a = {
    l: 10,
    m:true,
}


// fun.call(a, "Kartik", 24);

const f = fun.bind(a);


// ..

// ...

// ..

// f("Vivek", 24);


const car = {
    name: 'Ferrari',
    price: 100,
    getPrice: function () {
        console.log(this);
    }
}

