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

// Generate the grid on page load
window.addEventListener('load', () => {
    createGrid();
});

//---------------------------------------------------------------//
// Add event listeners to header container
//---------------------------------------------------------------//

// Size button
sizeBtn.addEventListener('click', () => {
    changeSize(requestNum());
})

// Black button
blackBtn.addEventListener('click', () => {
    if (rgbToggle == true) {
        toggleRgb();
        chosenColor = 'black';
    } else {
        chosenColor = 'black';
    }
})

// Red button
redBtn.addEventListener('click', () => {
    if (rgbToggle == true) {
        toggleRgb();
        chosenColor = 'red';
    } else {
        chosenColor = 'red';
    }
})

// RGB (Rainbow) button
rgbBtn.addEventListener('click', () => {
    toggleRgb();
}) 
 
// Eraser button
eraser.addEventListener('click', () => {
    if (rgbToggle == true) {
        toggleRgb();
        chosenColor = 'white';
    } else {
        chosenColor = 'white';
    }
})

// Reset button
reset.addEventListener('click', () => {
    createGrid();
})

//---------------------------------------------------------------//
//Functions to create grid
//---------------------------------------------------------------//

/* Creates column elements with associate class, then generates 
   the rows and adds associated listeners*/
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
    setBorder();
}

// Generate the row for selected container
function createRow(con) {
    for (i = 1; i <= size; i++) {
        con.appendChild(document.createElement('div')).classList.add(`column`);
    }
}

//---------------------------------------------------------------//
// Add event listeners to container Grid
//---------------------------------------------------------------//

function addListeners() {
    let colArray = Array.from(document.querySelectorAll('.column'));
    for (let col of colArray) {
        col.addEventListener('mouseover', () => {
            rgbToggle ? rainbow(col) : toggleColor(col);
        });
    }
}

//---------------------------------------------------------------//
//              Functions to change grid size                    //
//---------------------------------------------------------------//

// Prompt the user for a number
function requestNum() {
    return selection = Number(prompt("How many squares on each side? (Up to 100)"));
}

// Sets grid size and redraws
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

//---------------------------------------------------------------//
//                 Functions to change color                     //
//---------------------------------------------------------------//

function toggleColor(col) {
    col.style.backgroundColor = chosenColor;
}

// Toggle RGB state
function toggleRgb() {
    if (!rgbToggle) {
        rgbToggle = true;
    } else {
        rgbToggle = false;
    }
}

// Returns a random color
function randomColor() {
    let randomNum = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor = '#' + randomNum;
    return randomColor;
}

// Set color to random and then change color
function rainbow(col) {
    chosenColor = randomColor();
    toggleColor(col);
}

//---------------------------------------------------------------//
//              Function to set the container border             //
//---------------------------------------------------------------//

function setBorder() {
    const getWidth = getComputedStyle(container).width;
    const width = getWidth.split('px');
    const sq = getComputedStyle(document.querySelector('.column')).border.slice(0, 1);
    const colArray = Array.from(document.querySelectorAll('.column'));
    for (let col of colArray) {
        col.style.width = (width[0] / size - (sq*2)) + 'px';
        col.style.height = (width[0] / size - (sq*2)) + 'px';
    }
}