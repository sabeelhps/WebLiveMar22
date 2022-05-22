


const person = {
    name: 'Kartik',
    age: 25,
    isAdult: true,
    favColor:['blue','green','purple']
}


//This is will create a p1 object having person as its protype object 
const p1 = Object.create(person);
const p2 = Object.create(p1);

