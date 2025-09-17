//steps

// alert: TW
alert("Content may be triggering // abuse, psychological violence");


//1 listen to the event of clicking the button

let button;
button = document.getElementById('button');
console.log(button);


//2 listen to event click on te button
button.addEventListener("click", bgcolour, fscolour);


//2 make the background color change to black 
function bgcolour() {
    // console.log("increasing counter");
    document.body.style.backgroundColor = "#000000";
}


//3 change the color of the second sentence
function fscolour() {
    document.getElementById("second-sentence").style.color = "#FFFF00";
}
