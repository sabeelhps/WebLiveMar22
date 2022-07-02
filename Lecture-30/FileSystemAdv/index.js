const fs = require('fs');
const path = require('path');

const F1 = path.join(__dirname, 'files', 'inp1.txt');
const F2 = path.join(__dirname, 'files', 'inp2.txt');
const F3 = path.join(__dirname, 'files', 'output.txt');


// const ans = [];

// This is not a good code due to callback Hell

// fs.readFile(F1, (err, data) => {
//     if (err) throw err;
//     const arr1 = data.toString().split('\n');
//     ans.push(...arr1);
//     fs.readFile(F2, (err, data) => {
//         if (err) throw err;
//         const arr2 = data.toString().split('\n');
//         ans.push(...arr2);

//         ans.sort((a, b) => a - b); //sorting the array
//         const res = ans.join('\n'); //joining all the elements with '\n'

//         fs.writeFile(F3, res, (err) => {
//             if (err) throw err;
//             console.log('File Written Successfully!');
//         })
//     });
// });



// ----------------------------------------------------------


// Better way using promises

// function readFile1() {
//     return new Promise((resolve, reject) => {
//         fs.readFile(F1, (err, data) => {
//             if (err) throw err;
//             resolve(data.toString().split('\n'));
//         })
//     })
// }

// function readFile2() {
//     return new Promise((resolve, reject) => {
//         fs.readFile(F2, (err, data) => {
//             if (err) throw err;
//             resolve(data.toString().split('\n'));
//         })
//     })
// }

function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) throw err;
            resolve(data.toString().split('\n'));
        })
    })
}

function writeF3(res) {
    return new Promise((resolve, reject) => {
        fs.writeFile(F3,res, (err) => {
            if (err) throw err;
            resolve();
        })
    })
}




const ans = [];

readFile(F1)
    .then((arr1) => {
        ans.push(...arr1);
        return readFile(F2);
    })
    .then((arr2) => {
        ans.push(...arr2);
        ans.sort((a, b) => a - b);
        const res = ans.join('\n');
        return writeF3(res);
    })
    .then(() => {
        console.log('File Written Successfully!');
    })
    .catch((err) => {
        console.log("Inside Reject-----------------------")
        console.log(err);
        console.log(err.message);
    });





