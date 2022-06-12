const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');
pen.fillStyle = 'yellow';


const cs = 67;
const W = 1000;
const H = 600;
let food = null;
let score = 0;

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

    updateSnake() {
        const headX = this.cells[this.cells.length - 1].x;
        const headY = this.cells[this.cells.length - 1].y;

        let nextX;
        let nextY;

        // Collision conditionn for food
        if (food.x === headX && food.y === headY) {
            food = generateRandomFood();
            score++;
        } else {
            this.cells.shift();
        }

        if (this.direction === 'left') {
            nextX = headX - 1;
            nextY = headY;
            if (nextX * cs < 0) {
                gameOver();
            }
        }
        else if (this.direction === 'up') {
            nextX = headX;
            nextY = headY - 1;
            if (nextY * cs < 0) {
                gameOver();
            }
        }
        else if (this.direction === 'down') {
            nextX = headX;
            nextY = headY + 1;
            if (nextY*cs > H - cs) {
                gameOver();
            }
        }
        else if (this.direction === 'right') {
            nextX = headX + 1;
            nextY = headY;
            if (nextX * cs > W - cs) {
                gameOver();
            }
        }

        this.cells.push({
            x: nextX,
            y: nextY
        });

    
    }

    changeSnakeDirection(direction) {
        this.direction = direction;
    }

}


const snake = new Snake();


function init() {
    snake.createSnake();
    snake.drawSnake();
    food = generateRandomFood();

    function keypressed(e) {
        if (e.key === 'ArrowLeft') {
            snake.changeSnakeDirection('left');
        }
        else if(e.key ==='ArrowDown') {
            snake.changeSnakeDirection('down');
        }
        else if (e.key === 'ArrowUp') {
            snake.changeSnakeDirection('up')
        }
        else if(e.key ==='ArrowRight') {
            snake.changeSnakeDirection('right');
        }
        // console.log(snake.direction);
    }



    document.addEventListener('keydown', keypressed);
}


function draw() {
    pen.clearRect(0, 0, W, H);
    pen.fillStyle = 'red';
    pen.font = '40px serif';
    pen.fillText(`Score : ${score}`, 50, 50);
    pen.fillRect(food.x *cs, food.y*cs, cs, cs);
    pen.fillStyle = 'yellow';
    snake.drawSnake();
}

function update() {
    snake.updateSnake();
}


function gameLoop() {
    update();
    draw();
}


function generateRandomFood() {
    const foodX = Math.floor(Math.random() * (W - cs)/cs);
    const foodY = Math.floor(Math.random() * (H - cs)/cs);

    const food={
        x: foodX,
        y: foodY
    }

    return food;
}


init(); // calling a function to initialize the game

const id = setInterval(gameLoop, 100);

function gameOver() {
    clearInterval(id);
}


