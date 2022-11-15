let size = 16;
let chosenColor = 'red';
let rgbToggle = false;
const container = document.querySelector('.container');
const sizeBtn = document.querySelector('.pixel-button');
const blackBtn = document.querySelector('.black');
const redBtn = document.querySelector('.red');
const rgbBtn = document.querySelector('.rgb');
const eraser = document.querySelector('.eraser');
const reset = document.querySelector('.reset');

function addListeners() {
    let colArray = Array.from(document.querySelectorAll('.column'));
    for (let col of colArray) {
        col.addEventListener('mouseover', () => {
            rgbToggle ? rainbow(col) : toggleColor(col);
        });
    }
}

window.addEventListener('load', () => {
    createGrid();
});

sizeBtn.addEventListener('click', () => {
    changeSize(requestNum());
})

blackBtn.addEventListener('click', () => {
    if (rgbToggle == true) {
        toggleRgb();
        chosenColor = 'black';
    } else {
        chosenColor = 'black';
    }
})

redBtn.addEventListener('click', () => {
    if (rgbToggle == true) {
        toggleRgb();
        chosenColor = 'red';
    } else {
        chosenColor = 'red';
    }
})

rgbBtn.addEventListener('click', () => {
    toggleRgb();
}) 
 
eraser.addEventListener('click', () => {
    if (rgbToggle == true) {
        toggleRgb();
        chosenColor = 'white';
    } else {
        chosenColor = 'white';
    }
})

reset.addEventListener('click', () => {
    createGrid();
})

function requestNum() {
    return selection = Number(prompt("How many squares on each side? (Up to 100)"));
}

function changeSize(num) {
    if (isNaN(num) || num <= 0 || num == '') {
        alert('Pick a number!!');
    } else if (num > 100) {
        alert('Make it less than 100!!');
    } else {
        size = selection;
        container.innerHTML = '';
        createGrid();
    }
}

function createGrid() {
    container.innerHTML = '';
    for (i = 1; i <= size; i++) {
        container.appendChild(document.createElement('div')).classList.add(`row`);
    }
    let conArray = Array.from(document.querySelectorAll('.row'));
    conArray.forEach(con => {
        createRow(con);
    })
    addListeners(); 
    setGridSize();
}

function createRow(con) {
    for (i = 1; i <= size; i++) {
        con.appendChild(document.createElement('div')).classList.add(`column`);
    }
}

function toggleColor(col) {
    col.style.backgroundColor = chosenColor;
}

function toggleRgb() {
    if (!rgbToggle) {
        rgbToggle = true;
    } else {
        rgbToggle = false;
    }
}

function setGridSize() {
    const getWidth = getComputedStyle(container).width;
    const width = getWidth.split('px');
    const sq = getComputedStyle(document.querySelector('.column')).border.slice(0, 1);
    const colArray = Array.from(document.querySelectorAll('.column'));
    for (let col of colArray) {
        col.style.width = (width[0] / size - (sq*2)) + 'px';
        col.style.height = (width[0] / size - (sq*2)) + 'px';
    }
}

function randomColor() {
    let randomNum = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor = '#' + randomNum;
    return randomColor;
}
function rainbow(col) {
    chosenColor = randomColor();
    toggleColor(col);
}