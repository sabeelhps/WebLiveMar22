const grandParent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');


grandParent.addEventListener('click', (e) => {
    console.log('grandparent');
},true);

parent.addEventListener('click', (e) => {
    console.log('parent');
    e.stopPropagation(); // this will stop the event from getting propagated any furthur
},true);

child.addEventListener('click', (e) => {
    console.log('child');
},true);