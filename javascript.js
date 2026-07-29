const body = document.querySelector(`body`);
const regenBtn = document.querySelector(`.regen`);
const resetBtn = document.querySelector(`.reset`);
const dimensions = document.querySelector(`.dimensions`);
const container = document.querySelector(`.container`);
const CONTAINER_WIDTH = 550;
const SQUARE_NUM_MAX = 100;
const SQUARE_NUM_MIN = 1;

//
let squareNum = 16;
container.style.width = `${CONTAINER_WIDTH}px`;

createGrid(squareNum);
//

// Painter
container.addEventListener(`mouseover`, paintPixel);
function paintPixel(e){
    if(!e.target.classList.contains(`container`)){
        e.target.style.backgroundColor = randomColor();
        if(e.target.style.opacity < 1){e.target.style.opacity = Number(e.target.style.opacity) + .1;}
    }
}

// Regen
regenBtn.addEventListener(`click`, regenerate);
function regenerate(){
    do{
        squareNum = Number(prompt(`Enter desired pixel width:\nInput must be between ${SQUARE_NUM_MIN}-${SQUARE_NUM_MAX} inclusive`));
        if(squareNum === 0){return;} // Cancel
    }while(
        squareNum < SQUARE_NUM_MIN ||
        squareNum > SQUARE_NUM_MAX ||
        !Number.isInteger(squareNum)
    )
    dimensions.textContent = `${squareNum} x ${squareNum}`;
    container.replaceChildren();
    createGrid(squareNum);
}
// Creater
function createGrid(squareNum){
    const squareDim = CONTAINER_WIDTH / squareNum;
    for(let i = 0; i < squareNum * squareNum; i++){
        const square = document.createElement(`div`);
        square.style.width = `${squareDim}px`;
        square.style.height = `${squareDim}px`;
        container.appendChild(square);
    }
}

//Reset
resetBtn.addEventListener(`click`, reset);
function reset(){
    for(const child of container.children){
        child.style.backgroundColor = `white`;
    }
}

function randomColor(){return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');}