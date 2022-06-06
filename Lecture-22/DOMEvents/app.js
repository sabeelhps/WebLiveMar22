const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const form = document.querySelector('form');


// console.dir(btn);

function scream() {
    console.log('scream....');
}

function shout() {
    console.log('shouttttt!....');
}


btn.addEventListener('click', scream);
btn.addEventListener('click', shout);



// btn.onclick = scream;
// btn.onclick = shout;

// ---------------------------------mouse events------------


h1.addEventListener('mouseenter', function () {
    this.classList.add('heading');
});

h1.addEventListener('mouseleave', function () {
    if (this.classList.contains('heading')) {
        this.classList.remove('heading');
    }
});

//------------------------------keyboard Events---------------


input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        console.log('You pressed the enter key!');
    }
});


// ------------------------------submit events---------------

form.addEventListener('submit', function (e) {
    e.preventDefault(); // this function changes the default behaviour of the form
    // console.log('form submitted');

    console.log(form.elements[1].value);
    console.log(form.elements[2].value);

});
