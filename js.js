const container = document.querySelector(".sketch-box");
const square = document.createElement("div");
const rangeInput = document.querySelector("#range");
const rangeMsg = document.querySelector("#rangeMsg");
square.setAttribute("class", "flex-square");

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

container.addEventListener("mouseover", (e) => {
    let target = e.target;

    if (target.className == "flex-square") {
        console.log(`Hovering ${target.id} ${target.className}`);
        let hoverSquare = document.getElementById(target.id);

        hoverSquare.setAttribute("class", "flex-square hovered");

    }

});

initializeSquares();