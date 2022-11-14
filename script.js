let size = 16;
const container = document.querySelector('.container');
chosenColor = 'red';


window.addEventListener('load', () => {
    createGrid();
    addListeners();
});

function createGrid() {
    for (i = 1; i <= size; i++) {
        container.appendChild(document.createElement('div')).classList.add(`row`);
    }
    let conArray = Array.from(document.querySelectorAll('.row'));
    conArray.forEach(con => {
        createRow(con);
    })
}

function createRow(con) {
    for (i = 1; i <= size; i++) {
        con.appendChild(document.createElement('div')).classList.add(`column`);
    }
}

function addListeners() {
    const colArray = Array.from(document.querySelectorAll('.column'));
    for (let col of colArray) {
        col.addEventListener('click', () => {
            color(col);
        });
    }
}

function color(col) {
    col.style.backgroundColor = chosenColor;
}