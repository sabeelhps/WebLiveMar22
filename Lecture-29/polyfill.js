const radiusArr = [1, 2, 3, 4, 5, 6];
// Area



// function calculateArea(radiusArr) {
//     const res = [];
//     for (let i = 0; i < radiusArr.length; i++){
//         res.push(Math.PI * radiusArr[i] * radiusArr[i]);
//     }
//     return res;
// }

// // Circumference
// function calculateCircumference(radiusArr) {
//     const res = [];
//     for (let i = 0; i < radiusArr.length; i++){
//         res.push(2* Math.PI * radiusArr[i]);
//     }
//     return res;
// }

// // Diameter
// function calculateDiameter(radiusArr) {
//     const res = [];
//     for (let i = 0; i < radiusArr.length; i++){
//         res.push(2*radiusArr[i]);
//     }
//     return res;
// }


// console.log(calculateArea(radiusArr));
// console.log(calculateCircumference(radiusArr));
// console.log(calculateDiameter(radiusArr));


// -------------------------------------------------Improved Code-------------------



// const area = radius => Math.PI * radius * radius;
// const circumference = radius => 2 * Math.PI * radius;
// const diameter = radius => 2 * radius;


// function calculate(radiusArr, logic) {
//     const res = [];
//     for (let i = 0; i < radiusArr.length; i++){
//         res.push(logic(radiusArr[i]));
//     }
//     return res;
// }

// radiusArr.map(area);
// radiusArr.calculate(area);



// console.log(calculate(radiusArr, area));
// console.log(calculate(radiusArr, circumference));
// console.log(calculate(radiusArr, diameter));


// ---------------------------------polyfill--------------

const area = radius => Math.PI * radius * radius;
const circumference = radius => 2 * Math.PI * radius;
const diameter = radius => 2 * radius;

// Polyfill
Array.prototype.calculate=function(logic) {
    const res = [];
    for (let i = 0; i < this.length; i++){
        res.push(logic(this[i]));
    }
    return res;
}


// radiusArr.map(area);
console.log(radiusArr.calculate(area));
console.log(radiusArr.calculate(circumference));
console.log(radiusArr.calculate(diameter));