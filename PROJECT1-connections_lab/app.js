//create a pop up with trigger warning
let a = "trigger warning: death, violence";
alert(a);


//Wait for the entire page to load before making the fetch requests
window.addEventListener("load", () => {
    console.log("The page is ready!");
    //Fetch images data
    fetch('images.json')
        .then(response => response.json())
        .then(data => {
            // console.log(data.wars[7].image_url);//
            //console.log(data.wars)

            //    let images = data.wars;
            //    console.log(images);

            let warsArray = data.image_url
            let randomNumber = Math.floor(Math.random() * warsArray.length);
            let nameElement = document.getElementById("selected_picture");
            nameElement.innerHTML = data.wars[randomNumber].image_url;
        })


    let button = document.getElementsByClassName("year-selector");
    button.addEventListener("click", function () {
        console.log("button is clicked!");

        fetch("images.json")
        .then(response=> response.json())
        .then(data=>{
            console.log(data);

            let imageElement = document.getElementById("selected_picture");
            imageElement.innerHTML= data.wars.image_url;
            // imageElement.src = data.wars.image_url;

        })


    })
})