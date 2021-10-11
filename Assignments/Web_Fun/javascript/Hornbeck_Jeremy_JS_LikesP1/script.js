var like1 = document.querySelector("span");

function like(){
    var start = like1.innerText;
    console.log("likes = " + start++);
    like1.innerText = start++;
}