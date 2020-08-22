
var txt = document.querySelector("h5");


var phrase = [
    "Be strong.",
    "Just start now.",
    "Don't limit yourself.",
    "It is hard to beat a person who never gives up.",
    "Write it. Shoot it. Publish it..",
    "Everything you can imagine is real.",
    "You can do it",
    "Every thing will be Great",
    "Do not STOP!!!"
]

function generate() {
    return Math.floor(Math.random() * phrase.length);
}


document.querySelector(".btn").addEventListener("click",fun);
   

function fun(){ txt.innerHTML = phrase[generate()] ;};

  