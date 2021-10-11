var likeNumber1 = document.getElementById("likeNumber1");
var likeNumber2 = document.getElementById("likeNumber2");
var likeNumber3 = document.getElementById("likeNumber3");


function like1(){
    var start = likeNumber1.innerText;
    console.log("likes = " + start++);
    likeNumber1.innerText = start++;
}

function like2(){
    var start = likeNumber2.innerText;
    console.log("likes = " + start++);
    likeNumber2.innerText = start++;
}

function like3(){
    var start = likeNumber3.innerText;
    console.log("likes = " + start++);
    likeNumber3.innerText = start++;
}