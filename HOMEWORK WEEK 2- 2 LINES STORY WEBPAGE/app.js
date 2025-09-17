//steps

alert("Content may be triggering // abuse, phsichological violence");

//1 listen to the event of clicking the button

let button;
button = document.getElementById('button');
console.log(button);

//2 listen to event click on the button
button.addEventListener("click", bgcolour, fscolour);

//2 make the background color change to black 
function bgcolour(){
   // console.log("increasing counter");
    document.body.style.background = "#000000";
}

//3 change the color of the second sentence to yellow
function fscolour (){
    document.getElementById("second-sentence").style.color = "#FFFF00";
}

