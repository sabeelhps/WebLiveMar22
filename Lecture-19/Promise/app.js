

// Creating a promise
const p = new Promise((resolve, reject) => { // resolve and reject are function
    
    setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 10);
        console.log(randomNum);
        if (randomNum % 2 === 0) {
            resolve(randomNum);
        } else {
            reject();
        }
    }, 2000);
});


// consuming a promise

p.then((num) => {
    console.log("Inside Resolve")
    // console.log(num);
    })
    .catch(() => {
        console.log("Inside Reject");
    });








