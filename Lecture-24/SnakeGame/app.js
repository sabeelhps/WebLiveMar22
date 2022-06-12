const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle = 'yellow';


const cs = 67;

class Snake{

    constructor() {
        this.init_len = 5;
        this.direction = 'right',
        this.cells=[]
    }   

    createSnake() {
        for (let i = 0; i < this.init_len; i++){
            this.cells.push({
                x: i,
                y: 0
            });
        }
    }

    drawSnake() {
        for (let i = 0; i < this.cells.length; i++) {
            const cell = this.cells[i];
            if (i === this.cells.length - 1) {
                pen.fillStyle = 'red';
            } else {
                pen.fillStyle = 'yellow';
            }
            pen.fillRect(cell.x * cs, cell.y *cs, cs-2, cs-2);
        }
    }

}


const snake = new Snake();


function init() {
    snake.createSnake();
    snake.drawSnake();
}


function draw() {
    snake.drawSnake();
}

function update() {
    
}


function gameLoop() {
    update();
    draw();
}


init(); // calling a function to initialize the game

const id = setInterval(gameLoop, 100);

