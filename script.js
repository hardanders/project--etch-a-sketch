let size = 16;
let chosenColor = 'red';
const container = document.querySelector('.container');
const sizeBtn = document.querySelector('.pixel-button');

window.addEventListener('load', () => {
    createGrid();
});

sizeBtn.addEventListener('click', () => {
    let selection = prompt("How many squares on each side?");
    size = selection;
    container.innerHTML = '';
    createGrid();
})


function createGrid() {
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