let size = 16;
let chosenColor = 'red';
const container = document.querySelector('.container');
const sizeBtn = document.querySelector('.pixel-button');
const blackBtn = document.querySelector('.black');
const redBtn = document.querySelector('.red');
const rgbBtn = document.querySelector('.rgb');
const eraser = document.querySelector('.eraser');
const reset = document.querySelector('.reset');

window.addEventListener('load', () => {
    createGrid();
});

sizeBtn.addEventListener('click', () => {
    changeSize(requestNum());
})

blackBtn.addEventListener('click', () => {
    addListeners();
    chosenColor = 'black';
})

redBtn.addEventListener('click', () => {
    addListeners();
    chosenColor = 'red';
})

rgbBtn.addEventListener('click', () => {
    rainbow();
})

eraser.addEventListener('click', () => {
    addListeners;
    chosenColor = 'white';
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

function randomColor() {
    let randomNum = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor = '#' + randomNum;
    return randomColor;
}

function rainbow() {
    const newCon = document.getElementsByClassName('container');
    for (let i = 0; i < newCon.length; i++) {
        newCon[i].addEventListener("mouseover", handlemouseover);
        newCon[i].addEventListener("mouseout", handlemouseout);
    }
}

function handlemouseover() {
    chosenColor = randomColor();
}

function handlemouseout() {
    chosenCOlor = randomColor();
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

function addListeners() {
    let colArray = Array.from(document.querySelectorAll('.column'));
    for (let col of colArray) {
            col.addEventListener('mouseover', () => {
                toggleColor(col);
            });
        }
    }

function toggleColor(col) {
    /* if (col.style.backgroundColor != chosenColor) { */
        col.style.backgroundColor = chosenColor;
/*     } else {
        col.style.backgroundColor = document.body.style.backgroundColor;
    } */
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