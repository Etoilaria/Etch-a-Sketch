// Function for user input on grid size
function Gridsize() {
    var size = prompt("Choose a number from 1-100:");
    var isNum = !isNaN(Number(size));
    var isBoundary = size >= 1 && size <= 100;
    if (isNum && isBoundary) {
        alert("Changing grid size...");
        createGrid(size);
    } else {
        alert("You didn't enter a valid number from 1-100");
        Gridsize();
    }
}

// Function to create grid
function createGrid(size) {
    const container = document.getElementById("gridContainer");
    container.innerHTML = ''; // Clear the existing grid

    const gridSize = 640; // Total grid container size in pixels
    const boxSize = gridSize / size; // Calculate box size based on grid size

    for (let i = 0; i < size * size; i++) {
        const gridbox = document.createElement("div");
        gridbox.classList.add("gridbox");
        gridbox.style.width = `${boxSize}px`;
        gridbox.style.height = `${boxSize}px`;
        container.appendChild(gridbox);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    createGrid(16); // Initial grid size
});
