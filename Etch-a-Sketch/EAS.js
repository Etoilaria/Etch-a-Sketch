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
