console.log("page loaded...");
var changePName = document.querySelector(".card-body h1");
var rListOne = document.querySelector("#listOne");
var rListTwo = document.querySelector("#listTwo");
var requests = document.querySelector("#cRequests");
var connections = document.querySelector("#tConnection");


function changeName() {
    changePName.innerText = "Marrisa";
}

function decreaseConnection() {
    requests.innerText--;
    console.log("requests--");
}

function increaseConnection() {
    connections.innerText++;
    console.log("connections++");
}

function removeListOne() {
    rListOne.remove();
}

function removeListTwo() {
    rListTwo.remove();
}
