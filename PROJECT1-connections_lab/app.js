//create a pop up with trigger warning
let a = "trigger warning: death, violence";
alert(a);


let warData;

//Wait for the entire page to load before making the fetch requests
window.addEventListener("load", () => {
    console.log("The page is ready!");
    //Fetch the war data data
    fetch('images.json')
        .then(response => response.json())
        .then(data => {
            // console.log(data.wars[7].image_url);//
            console.log(data)

            warData = data;

            // add info + image to the page


            updatePageInfo(warData.wars);
        })


    //event listener on the button

    let button = document.querySelector(".year-selector");
    button.addEventListener("click", function () {
        console.log("button is clicked!");
     updatePageInfo(warData.wars);

    })


})




//function to add info to the page
function updatePageInfo(warList) {
    console.log("Working!");
    console.log(warList);

    //Pick a random object in the array
    let randomNumber = Math.floor(Math.random() * warList.length);
    console.log(randomNumber);
    let randomWar = warList[randomNumber];
    console.log(randomWar);

    //IMAGE CODE

    //add image to the page
    let imageElement = document.createElement('img');

    imageElement.src = randomWar.image_url;
    imageElement.classList.add("imagedata");

    // let testURL = "https://encyclopedia.ushmm.org/images/large/50083758-e1cc-458c-86a0-173b2f517d99.jpg";
    // imageElement.src = testURL;

    //select for image container
    let imageContainer = document.getElementById("image-container");
    //clear out any current image
    imageContainer.innerHTML = "";
    //append new image to the page
    imageContainer.appendChild(imageElement);

    //TEXT CODE

    //create element for conflict name
    let conflictElement = document.createElement('h2');
    conflictElement.classList.add('conflict-text');
    conflictElement.innerText = randomWar.conflict;

    //create element for conflict description
    let descriptionElement = document.createElement('p');
    descriptionElement.innerText = randomWar.description;

    //add name + description to the page
    let descriptionContainer = document.getElementById('description-container');
    //clear out any current info
    descriptionContainer.innerHTML = "";
    //append both elements inside the container
    descriptionContainer.appendChild(conflictElement);
    descriptionContainer.appendChild(descriptionElement);

}
