// const means that it cannot be updated
// This line creates the division for the gridbox
const gridbox = document.createElement("div");

// This calls for the CSS of the gridbox
gridbox.innerHTML = "Hello";
gridbox.style.width = "50px";
gridbox.style.height = "50px";
gridbox.style.background = "red";
gridbox.style.color = "white";

// When something has the ID, "main", we will add the gridbox element to the document
document.getElementById("main").appendChild(gridbox);