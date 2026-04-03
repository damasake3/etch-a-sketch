const container = document.querySelector(".sketch-box");
const square = document.createElement("div");
const rangeInput = document.querySelector("#range");
const rangeMsg = document.querySelector("#rangeMsg");
square.setAttribute("class", "flex-square");

const menu = document.querySelector("#menu");

const colorModes = [
    "Default", "Black", "RGB"
];

for (const mode of colorModes) console.log(mode);

let colorMode = colorModes[0];

console.log(`Color Mode: ${colorMode}`);

function initializeSquares() {
    generateSquares(16);
}

function generateSquares(s) {
    let size = s;
    let squareSize = 100 / size;
    console.log(`size: ${s}`);

    if (size < 1 || size > 100) {
        rangeMsg.innerText = "Range [1-100] only";
        rangeMsg.setAttribute("style", "color: red;");
    }
    else {
        clearSquares();
        rangeMsg.innerText = "";
        rangeMsg.removeAttribute("style", "color: red;");
        for (let i = 0; i < (size * size); i++) {
            square.setAttribute("id", `square-${i + 1}`);
            square.setAttribute("style", `height: ${squareSize}%;  width: ${squareSize}%;`);
            container.appendChild(square.cloneNode(true));
        }
    }

}

function clearSquares() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function generateRGB() {
    let rgbCombo = [];
    let rgb;
    for (let i = 0; i < 3; i++) {
        rgb = Math.floor(Math.random() * 255) + 1;
        rgbCombo.push(rgb);
    }

    console.log(rgbCombo);
    return `rgb(${rgbCombo[0]}, ${rgbCombo[1]}, ${rgbCombo[2]})`;
}

container.addEventListener("mouseover", (e) => {
    let target = e.target;

    if (target.className == "flex-square") {
        console.log(`Hovering ${target.id} ${target.className}`);
        let hoverSquare = document.getElementById(target.id);

        if (colorMode == colorModes[0]) {
            console.log(`Using Color Mode: ${colorMode}`);
            hoverSquare.style.backgroundColor = "blue";
        }
        else if (colorMode == colorModes[1]) {
            console.log(`Using Color Mode: ${colorMode}`);
            hoverSquare.style.backgroundColor = "black";
        }
        else if (colorMode == colorModes[2]) {
            console.log(`Using Color Mode: ${colorMode}`);
            hoverSquare.style.backgroundColor = `${generateRGB()}`;
        }

    }

});

rangeInput.addEventListener("keydown", (e) => {
    if (e.code == "Enter") {
        e.preventDefault();
    }
});

rangeInput.addEventListener("keyup", (e) => {
    let value = e.target.value;
    if (e.code == "Enter") {
        generateSquares(value);
    }
});

menu.addEventListener("click", (e) => {
    let target = e.target;

    switch (target.id) {
        case "blackBtn":
            console.log("BlackBtn clicked!");
            colorMode = colorModes[1];
            break;
        case "rgbBtn":
            console.log("RgbBtn clicked!");
            colorMode = colorModes[2];
            break;
        case "normalBtn":
            console.log("NormalBtn clicked!");
            colorMode = colorModes[0];
            break;
    }

});

initializeSquares();