//steps
//1 listen to the event of clicking the button

let button;
button = document.getElementById('button');
console.log(button);


//2 listen to event click on te button
button.addEventListener("click", bgcolour);


//2 make the background color change to black 
function bgcolour(){
   // console.log("increasing counter");
    document.body.style.background = "#000000"
}


//3 make the second sentence appear
//4 change the color of the second sentence