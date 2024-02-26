console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

document.addEventListener("DOMContentLoaded", () => {
  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      const images = data.message;
      const imageContainer = document.getElementById("image-container");

      images.forEach((imageUrl) => {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imageContainer.appendChild(imgElement);
      });
    })
    .catch((error) => console.log(error));
});

const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () => {
  fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
      const breeds = Object.keys(data.message);
      const breedList = document.getElementById("breed-list");

      breeds.forEach((breed) => {
        const liElement = document.createElement("li");
        liElement.textContent = breed;
        breedList.appendChild(liElement);
      });
    })
    .catch((error) => console.log(error));
});

document.addEventListener("DOMContentLoaded", () => {
    
  
    const breedListItems = document.querySelectorAll("#breed-list li");
  
    breedListItems.forEach((li) => {
      li.addEventListener("click", () => {
        li.style.color = "red"; 
      });
    });
  });