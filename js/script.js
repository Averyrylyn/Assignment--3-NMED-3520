document.title = "Assignment #3"

//.myControlElement ({
    //cursor: pointer
//})

//let counterDisplayElem = document.querySelector('.counter-display')

//let count = 0;

//updateDisplay();

//function updateDisplay(){
   // counterDisplayElem.innerHTML= count;
//}

//https://dev.to/stewyearth/making-a-simple-counter-in-javascript-html-2ici//

let counter = 0;

function changecounter () {
    console.log(counter);
    if (counter <= 6){
    counter++
}
else {
    counter = 0;
}
    $(".counter-display").text(counter);
}



let imgs = ['first-img', 'second-img','third-img','forth-img','fifth-img', 'sixth-img']

//https://launchschool.com/books/javascript/read/loops_iterating 

var mouse1 = "<img src=imgs/Mouse1 .png>"
var mouse2 = "<img src=imgs/Mouse2.png>"
var mouse3 = "<img src=imgs/Mouse3.png>"
var mouse4 = "<img src=imgs/Mouse4.png>"
var mouse5 = "<img src=imgs/Mouse5.png>"
var mouse6 = "<img src=imgs/Mouse6.png>"

//$(document).on("click")
//console.log(rightclick)
//counter++

$("#Mouse1").on("click", changecounter)
$("#Mouse2").on("click", changecounter)
$("#Mouse3").on("click", changecounter)
$("#Mouse4").on("click", changecounter)
$("#Mouse5").on("click", changecounter)
$("#Mouse6").on("click", changecounter)



