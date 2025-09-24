console.log("1 - Loading!");

//Wait for the entire page to load before making the fetch requests
window.addEventListener('load', () => {

    console.log("The page is ready!");




    //Fetch images data
    fetch('images.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let images = data.images;
            console.log(images);

            let randomNum = Math.floor(Math.random() * images.length);
            let randomimages = images[randomNum].name;
            console.log(randomimages);

            //add the picture to the page
            //??????  let nameEl = document.querySelector('#data-container-1');
            //?????nameEl.innerText = randomimages;
        });
});