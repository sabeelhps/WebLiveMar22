

const menu = ['Kadhai Paneer', 'Dal Makhni', 'Masala Dosa', 'Chicken Soup'
    , 'Chicken Butter Masala', 'Veg Chowmein', 'Egg Curry', 'Egg Maggie',
    'Chicken Fry', 'Chicken Biryani', 'Khichdi', 'Handi Paneer', 'Onion Parantha',
    'Garlic Naan', 'Onion Pizza', 'Garlic Bread', 'Onion Rings', 'Chilli Paneer'];


function isVeg(food) {
    if (food.toLowerCase().includes('chicken') || food.toLowerCase().includes('egg')) {
        return false;
    }
    return true;
}

function isOnionGarlicFree(food) {
    if (food.toLowerCase().includes('onion') || food.toLowerCase().includes('garlic')) {
        return false;
    }
    return true;
}


const vegMenu = menu.filter(isVeg);
const jainMenu = menu.filter(isVeg).filter(isOnionGarlicFree);

console.log(menu);
console.log(vegMenu);
console.log(jainMenu);




function getListOfUsersWithRewards(users) {
    
    return users.map(function (user, idx) {
        return { id: idx + 1, name: user, reward: Math.floor(Math.random() * 10 + 1) };
    });
}



const users = ['Amit', 'Ajay', 'Deepak', 'Mukesh'];

const usersList = getListOfUsersWithRewards(users);
console.log(users);
console.log(usersList);


