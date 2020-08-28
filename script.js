let order = []
let clickedOrder = []
let score = 0;

const blue = document.getElementById("blue");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i + 1));
    }
};


let lightColor = (element, number) => {
    number *= 600;
    setTimeout(() => {
        element.classList.add("selected");
    }, number - 300);
    setTimeout(() => {
        element.classList.remove("selected");
    });
};

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }

    }
    if(clickedOrder.length==order.length) {
        alert(`Pontuação: ${score}\n You got it!`);
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add("selected");

    setTimeout(() => {
        createColorElement(color).classList.remove("selected");
        checkOrder();
    }, 300);
}

let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}

let nextLevel = () => {
    score++;
    shuffleOrder();
}

let gameOver = () => {
    alert(`Pontuação: ${score}\n You lost!`);
    order = [];
    clickedOrder = [];

    playGame();
}


let playGame = () => {
    score = 0;

    nextLevel();
}

green.addEventListener("click", click(0));
red.addEventListener("click", click(1));
yellow.addEventListener("click", click(2));
blue.addEventListener("click", click(3));


green.onclick = () => click(0);
red.onclick = () => click(0);
yellow.onclick = () => click(0);
blue.onclick = () => click(0);

playGame();