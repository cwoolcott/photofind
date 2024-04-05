const buttonEl = document.querySelector("button");
const imageTextEl = document.querySelector("#imageText");
const displayEl = document.querySelector(".display");



function getImage(imageTextValue){

    const url = `https://api.pexels.com/v1/search?query=${imageTextValue}&per_page=1`;


    fetch(url, {
        headers: {
            "Authorization" : "NEqSEG6M0ti11Dq0CkAdgcFZMrTarjoVOYOq9fMTerBvaqo2qn1eaq4s"
        } 
    }).then(function(response){
        return response.json();
    }).then(function(data){

        const imageEl = document.createElement("img");
        imageEl.setAttribute("src", data.photos[0].src.large);

        const imageLabelEl = document.createElement("h2");
        imageLabelEl.textContent = data.photos[0].alt;

        displayEl.setAttribute("style", 
        "background-color: " + data.photos[0].avg_color + ";"
        )
        
        displayEl.append(imageEl);
        displayEl.append(imageLabelEl);


        
        console.log(data)
    }) 
    .catch(function (error) {
        alert('Unable to connect to PEXELS');
    });;
}



buttonEl.addEventListener("click", function(){
    const imageTextValue = imageTextEl.value.trim();
    if (imageTextValue){
        displayEl.textContent = "";
        getImage(imageTextValue)
    }
})
