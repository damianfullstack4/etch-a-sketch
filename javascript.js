const body = document.querySelector(`body`);
const container = document.querySelector(`.container`);
const CONTAINER_WIDTH = 600;
const SQUARE_NUM_MAX = 100;

// Squares & Dimensions //
let squareNum = 16;
container.style.width = `${CONTAINER_WIDTH}px`;

createGrid(squareNum);

container.addEventListener(`mouseover`, paintPixel);
function paintPixel(e){
    if(!e.target.classList.contains(`container`)){
        e.target.style.backgroundColor = `red`;
        console.log(`trigger`);
    }
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