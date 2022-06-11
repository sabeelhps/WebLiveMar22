const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle = 'red';


let init_x = 10;
let init_y = 20;

// This will initialise the game
function init() {
    pen.fillRect(10, 20, 100, 100);
}


// This will draw the updated game
function draw() {
    pen.clearRect(0, 0, 1200, 700);
    pen.fillRect(init_x, init_y, 100, 100);
}


// Update various properties of the game
function update() {
    init_x = init_x + 10;
}

// gameLoop
function gameLoop() {
    update();
    draw();
}

init();


const id = setInterval(gameLoop, 100);


