const container = document.getElementById("main-container");

for (let i = 0; i < 256; i++) {
    // const means that it cannot be updated
    // This line creates the division for the gridbox
    const gridbox = document.createElement("div");

    // This calls for the CSS of the gridbox
    gridbox.innerHTML = "Box";
    gridbox.style.textAlign = "center";
    gridbox.style.width = "40px";
    gridbox.style.height = "40px";
    gridbox.style.background = 'rgb(255, 127, 127)';
    gridbox.style.color = "white";

    container.appendChild(gridbox);
}