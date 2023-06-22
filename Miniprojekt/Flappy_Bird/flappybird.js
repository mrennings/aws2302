const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const screenWidth = canvas.clientWidth;
const screenHeight = canvas.clientHeight;

let gameStarted = false;
let animationFrameHandle = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const pipes = [];
const pipeCount = 3;
for (let i = 0; i < pipeCount; i++) {
    pipes.push({
        x: screenWidth + i * (screenWidth + 50) / pipeCount,
        width: 50,
        holeHeight: 150,
        level: getRandomInt(1, 7),
        speed: -3,
        draw(ctx) {
            const heights = this.getPipeHeights();

            ctx.fillStyle = 'green';
            ctx.fillRect(this.x, 0, this.width, heights[0]);
            ctx.fillRect(this.x - 10, heights[0] - 20, this.width + 20, 20);
            ctx.fillRect(this.x, screenHeight - heights[1], this.width, heights[1]);
            ctx.fillRect(this.x - 10, screenHeight - heights[1], this.width + 20, 20);
        },
        update() {
            this.x += this.speed;
            if (this.x < -this.width) {
                this.x = screenWidth;
                this.level = getRandomInt(1, 7);
            }
        },
        getPipeHeights() {
            const upperPipeHeight = 100 + 40 * this.level;
            const lowerPipeHeight = screenHeight - (upperPipeHeight + this.holeHeight);
            return [
                upperPipeHeight,
                lowerPipeHeight
            ];
        },
        getPipes() {
            const heights = this.getPipeHeights();

            return [{
                x1: this.x,
                y1: 0,
                x2: this.x + 50,
                y2: heights[0]
            },
            {
                x1: this.x,
                y1: screenHeight - heights[1],
                x2: this.x + 50,
                y2: screenHeight
            }
            ];
        }
    });
}

const bird = {
    x: 150,
    y: 200,
    speed: 0,
    radius: 20,
    gravity: 0.4,
    flapForce: -7,
    checkOverlap(X1, Y1, X2, Y2) {
        let Xn = Math.max(X1, Math.min(this.x, X2));
        let Yn = Math.max(Y1, Math.min(this.y, Y2));
        let Dx = Xn - this.x;
        let Dy = Yn - this.y;
        return (Dx * Dx + Dy * Dy) <= this.radius * this.radius;
    },
    flap() {
        if (this.y <= 0) return;
        this.speed = this.flapForce;
    },
    update() {
        this.speed += this.gravity;
        this.y += this.speed;
    },
    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x - 15, this.y - 5, 12, Math.PI, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x + 7, this.y - 5, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(this.x + 6, this.y - 6, 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x - 20, this.y + 5, 12, Math.PI, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = 'orange';
        ctx.beginPath();
        ctx.arc(this.x + 22, this.y + 10, 10, Math.PI, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = 'orange';
        ctx.beginPath();
        ctx.arc(this.x + 18, this.y + 10, 6, 0, Math.PI);
        ctx.fill();
        ctx.stroke();
    }
};

bird.draw(ctx);

document.addEventListener(
    'keydown',
    function (event) {
        if (!gameStarted) {
            gameStarted = true;
            animationFrameHandle = window.requestAnimationFrame(loop);
        }
        bird.flap();
    },
    false
);

let score = 0;

ctx.font = 'bold 48px Arial';

bird.draw(ctx);

ctx.fillStyle = 'blue';
ctx.fillText(Math.floor(score / 100).toString(), 15, 50);

function loop() {
    ctx.clearRect(0, 0, screenWidth, screenHeight);

    bird.update();
    bird.draw(ctx);

    for (let i = 0; i < pipeCount; i++) {
        pipes[i].draw(ctx);
        pipes[i].update();

        const upperLowerPipe = pipes[i].getPipes();

        const upperPipe = upperLowerPipe[0];
        const lowerPipe = upperLowerPipe[1];
        if (bird.checkOverlap(upperPipe.x1, upperPipe.y1, upperPipe.x2, upperPipe.y2) ||
            bird.checkOverlap(lowerPipe.x1, lowerPipe.y1, lowerPipe.x2, lowerPipe.y2) ||
            bird.y > screenHeight) {
            window.cancelAnimationFrame(animationFrameHandle);
            animationFrameHandle = undefined;
            return;
        }
    }

    score++;
    ctx.fillStyle = 'blue';
    ctx.fillText(Math.floor(score / 100).toString(), 15, 50);

    animationFrameHandle = window.requestAnimationFrame(loop);
}

