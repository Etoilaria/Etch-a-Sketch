//Function for user input on grid size
function Gridsize() {
    var size = prompt("Choose a number from 1-100:")
    var isNum = !isNaN(Number(size))
    var isBoundary = size >= 1 && size <= 100
    if (isNum) {
        if (isBoundary) {
            alert("Changing grid size...")
        }
        else {
            alert("You didn't enter a number from 1-100")
        }
    }
    else {
        alert("You didn't enter a valid number")
    }
}
// Function to create grid //
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("main-container");

    for (let i = 0; i < 256; i++) {
        const gridbox = document.createElement("div");
        gridbox.innerHTML = "Box";
        gridbox.style.color = "white";
        gridbox.classList.add("gridbox");

        container.appendChild(gridbox);
    }
});
