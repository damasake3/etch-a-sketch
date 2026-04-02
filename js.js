const container = document.querySelector(".flex-container");
const square = document.createElement("div");
square.setAttribute("class", "flex-square");

function generateSquares() {
    let size = 54; //Asymmetrical at 14...64 && size >= 66
    let squareSize = 100 / size;

    for (let i = 0; i < (size * size); i++) {
        square.setAttribute("id", `square-${i + 1}`);
        square.setAttribute("style", `height: ${squareSize}%;  width: ${squareSize}%;`);
        container.appendChild(square.cloneNode(true));
    }

    container.addEventListener("mouseover", (e) => {
        let target = e.target;

        if (target.className == "flex-square") {
            console.log(`Hovering ${target.id} ${target.className}`);
            let hoverSquare = document.getElementById(target.id);
            
            hoverSquare.setAttribute("class", "flex-square hovered");

        }

    });


}





generateSquares();
