var ul = document.querySelector("header ul");
var cookie = document.querySelector("div.cookies");
var select = document.getElementById("CF");
// var option = select.option[select.selectedIndex];
var tHot1 = document.querySelector("span.tempHot1");
var tHot2 = document.querySelector("span.tempHot2");
var tHot3 = document.querySelector("span.tempHot3");
var tHot4 = document.querySelector("span.tempHot4");
var tCold1 = document.querySelector("span.tempCold1");
var tCold2 = document.querySelector("span.tempCold2");
var tCold3 = document.querySelector("span.tempCold3");
var tCold4 = document.querySelector("span.tempCold4");


function loading() {
    alert("Loading weather report");
}

function cookies() {
    cookie.remove();
}

function temp() {
    if (select.value == "°F"){
        tHot1.innerHTML = "75°";
        tHot2.innerHTML = "80°";
        tHot3.innerHTML = "69°";
        tHot4.innerHTML = "78°";
        tCold1.innerHTML = "64°";
        tCold2.innerHTML = "66°";
        tCold3.innerHTML = "60°";
        tCold4.innerHTML = "69°";
    }
    else if (select.value == "°C"){
        tHot1.innerHTML = "24°";
        tHot2.innerHTML = "27°";
        tHot3.innerHTML = "21°";
        tHot4.innerHTML = "26°";
        tCold1.innerHTML = "18°";
        tCold2.innerHTML = "19°";
        tCold3.innerHTML = "16°";
        tCold4.innerHTML = "21°";        
    }
}