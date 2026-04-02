const container = document.querySelector(".sketch-box");
const square = document.createElement("div");
square.setAttribute("class", "flex-square");

function initializeSquares() {
    generateSquares(16);
}

function generateSquares(s) {
    let size = s;
    let squareSize = 100/size;
    console.log(`size: ${s}`);
    clearSquares();

    for (let i = 0; i < (size * size); i++) {
        square.setAttribute("id", `square-${i + 1}`);
        square.setAttribute("style", `height: ${squareSize}%;  width: ${squareSize}%;`);
        container.appendChild(square.cloneNode(true));
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