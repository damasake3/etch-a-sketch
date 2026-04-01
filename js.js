const container = document.querySelector(".flex-container");
const square = document.createElement("div");
square.setAttribute("class", "flex-square");

function generateSquares() {
    for (let i = 0; i < (16 * 16); i++) {
        square.setAttribute("id", `square-${i + 1}`);
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
