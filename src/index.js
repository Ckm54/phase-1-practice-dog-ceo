console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", (e) => {
    let imageContainer = document.getElementById("dog-image-container")
    const breedList = document.getElementById("dog-breeds")

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        data.message.forEach(imgUrl => {
            const image = document.createElement("img")
            image.setAttribute("src", imgUrl)
            imageContainer.appendChild(image)
        });
    })

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        for(const breed in data.message) {
            defaultLoad(breed)
        }
        document.querySelectorAll("li").forEach(elem => {
            elem.addEventListener("click", changeColor)
        })
        const dropDown = document.getElementById("breed-dropdown")
        dropDown.onchange = (event) => {
            breedList.innerHTML = ''
            for(const breed in data.message) {
                const inputText = event.target.value;
                updateDom(breed, inputText)
            }
            
        }
    })
    function changeColor() {
        this.style.color = "blue"
    }
    
    function defaultLoad(breed) {
        let breedText = document.createElement("li")
        breedText.innerText = breed
        breedList.appendChild(breedText)
        console.log(breed.charAt(0) ==  "a")
    }
    
    function updateDom(breed, input) {
        // let breedText = document.createElement("li")
        // breedText.innerText = breed
        // breedList.appendChild(breedText)
        if(breed.charAt(0) == input){
            defaultLoad(breed)
        }
    }
})

