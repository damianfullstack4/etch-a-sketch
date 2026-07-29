const body = document.querySelector(`body`);
const regenBtn = document.querySelector(`button`);
const dimensions = document.querySelector(`.dimensions`);
const container = document.querySelector(`.container`);
const CONTAINER_WIDTH = 550;
const SQUARE_NUM_MAX = 100;

// Squares & Dimensions //
let squareNum = 16;
container.style.width = `${CONTAINER_WIDTH}px`;

createGrid(squareNum);

container.addEventListener(`mouseover`, paintPixel);
function paintPixel(e){
    if(!e.target.classList.contains(`container`)){
        e.target.style.backgroundColor = randomColor();
        console.log(`trigger`);
    }
}

regenBtn.addEventListener(`click`, regenerate);
function regenerate(){
    for(const child of container.children){
        child.style.backgroundColor = `white`;
    }
    squareNum = -1;
    while(true){
        squareNum = Number(prompt(`Enter desired pixel width:`));
        if(squareNum > 0 && squareNum <= 100 && Number.isInteger(squareNum)){
            break;
        }else{
            alert(`Invalid input. Please choose an integer between 0 and 100 inclusive`);
        }
    }
    dimensions.textContent = `${squareNum} x ${squareNum}`;
    container.replaceChildren();
    createGrid(squareNum);
}

function createGrid(squareNum){
    let squareDim = CONTAINER_WIDTH / squareNum;
    for(let i = 0; i < squareNum * squareNum; i++){
        let square = document.createElement(`div`);
        square.style.width = `${squareDim}px`;
        square.style.height = `${squareDim}px`;
        container.appendChild(square);
    }
}

function randomColor(){return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');}