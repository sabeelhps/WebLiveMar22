

// const URL = 'https://jsonplaceholder.typicode.com/posts/1';

// fetch(URL)
//     .then((res) => {
//         // console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });


// Async


// async function add(x, y) {
//     if ((x + y) % 2 !== 0) {
//         throw new Error("sum is odd");
//     }
//     return x + y;
// }

// add(6, 7)
//     .then((val) => {
//         console.log('Inside Resolve')
//         console.log(val);
//     })
//     .catch((err) => {
//         console.log('Inside Reject')
//         console.log(err);
//     });

// -------Await Keyword



async function getPost() {
    try {
        // console.log('starting to fetch the data');
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        // console.log('starting to parse the json from the res');
        const data = await res.json();
        // console.log('Data fetched');
        // console.log(data);
    }
    catch (e) {
        console.log('something went wrong...');
        console.log(e);
    }
}

console.log("START");

getPost();
console.log('After getPost()...')
console.log('After getPost()...')
console.log('After getPost()...')
console.log('After getPost()...')
console.log('After getPost()...')
console.log('After getPost()...')
console.log('After getPost()...')
console.log('After getPost()...')




