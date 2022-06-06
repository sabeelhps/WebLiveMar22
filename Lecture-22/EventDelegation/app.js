const products = document.querySelectorAll('section figure');
const container = document.getElementById('container');

// THIS IS NOT A OPTIMISED APPROACH -------------------
// for (let product of products) {
//     product.addEventListener('click', function() {
//         console.log(this.innerText);
//     });
// }


// EVENT DELEGATION

container.addEventListener('click', (e) => {
    // console.log(e);
    if (e.target.nodeName === 'FIGURE') {
        console.log(e.target.innerText);
    }
});