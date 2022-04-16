console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", (e) => {
    let imageContainer = document.getElementById("dog-breeds")
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        data.message.forEach(imgUrl => {
            const imageHolder = document.createElement("li");
            const image = document.createElement("img")
            image.setAttribute("src", imgUrl)
            imageHolder.appendChild(image);
            imageContainer.appendChild(imageHolder)
        });
    })
})
// function addImages()
