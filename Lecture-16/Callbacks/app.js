

function fun(func) {
    func();// fun function is calling func internally
}


function innerFun() {
    console.log("Inner Fun");
}


// fun(innerFun);

// fun(function innerFun() {
//     console.log("Inner Fun");
// });

fun(function() {
    console.log("Inner Fun");
});