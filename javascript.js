// Box Div Functions
function txtOn() {
    document.getElementById("box").innerHTML = "Click the buttons below for some JS magic!";
}

function txtOff() {
    document.getElementById("box").innerHTML = "";
}

// Button Functions
function grow() {
    document.getElementById("box").style.height = "300px";
    document.getElementById("box").style.width = "300px";
    document.getElementById("box").style.transition = "all 1s";
}

function blue() {
    document.getElementById("box").style.backgroundColor = "blue";
    document.getElementById("box").style.transition = "all 1s";
}

function fade() {
    document.getElementById("box").style.opacity = ".5";
    document.getElementById("box").style.transition = "all 1s";
}

function leftBorder() {
    document.getElementById("box").style.borderLeft = "30px solid black";
    document.getElementById("box").style.transition = "all 1s";
}

function reset() {
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";
    document.getElementById("box").style.borderLeft = "0 solid black";
    document.getElementById("box").style.transition = "all 1s";
}