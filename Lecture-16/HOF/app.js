



// function fun(f) {
//     // console.log(f);
//     // f();
// }

// function innerFun() {
//     console.log("Inside Innerfun");
// }


// fun(innerFun); //fun will be a higher order function



// function fun() { //This is a HOF Since it is returning another function
    
//     var a = 100;

//     function innerFun() {
//         a = a + 1;
//         console.log(a);
//     }

//     return innerFun;
// }

// var f = fun();

// f();
// f();
// f();
// f();


// function greaterThan(m) {
//     return function (n) {
//         return m < n;
//     }
// }


// let greaterThan10 = greaterThan(10);

// let greaterThan50 = greaterThan(50);


