const controlsPanel = document.querySelector('#controls');
const boxesRef = document.querySelector('#boxes');
let boxWidth = 30;
let boxHeigth = 30;
let boxMargin = 5;

function getRandomColor(max) {
    return Math.floor(Math.random() * max);
};

function destroyBoxes() {
    boxesRef.innerHTML = "";
    boxWidth = 30;
    boxHeigth = 30;
};


function createBoxes(amount) {
    let boxArr = [];
    for (let i = 0; i <= amount; i += 1){
        const newDiv = document.createElement("div");
        newDiv.style.height = `${boxHeigth}px`;
        newDiv.style.width = `${boxWidth}px`;
        newDiv.style.margin = `${boxMargin}px`;
        newDiv.style.backgroundColor = `rgb(${getRandomColor(255)}, ${getRandomColor(255)}, ${getRandomColor(255)})`;
        boxArr.push(newDiv);
        boxWidth += 10;
        boxHeigth += 10;
    }
    boxesRef.append(...boxArr);
};

controlsPanel.addEventListener('click', (event) => {
    if (event.target.dataset.action === "render") {
        createBoxes(controlsPanel.firstElementChild.value);
    } else if (event.target.dataset.action === "destroy") {
        destroyBoxes();
    }
});

