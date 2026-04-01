const container = document.querySelector(".flex-container");
const square = document.createElement("div");
square.setAttribute("class", "flex-square");

function generateSquares(){
    for (let i = 0; i < (16 * 16); i++) {
        container.appendChild(square.cloneNode(true));
    }
}

generateSquares();
