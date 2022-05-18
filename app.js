const dataResponse = document.getElementById('test');

fetch('https://rickandmortyapi.com/api/character', {
    method: 'GET'
})
.then(res => {
    return res.json();
})
.then(data => {

    let characters = data.results;

    characters.forEach(character => {

    const card = 
                    // `<div class="kard">
                    //     <img src="${character.image}" alt="" class="kard-image">
                    //     <h3>Name: ${character.name}</h3>
                    //     <h3>Status: ${character.status}</h3>
                    //     <h3>Species: ${character.species}</h3>
                    //     <h3>Type: ${character.type}</h3>
                    //     <h3>Gender: ${character.gender}</h3>
                    //     <div class="kard-buttons">
                    //         <i class="fa-solid fa-star kard-like-button"></i>
                    //         <Button class="kard-add-button">Add as a player</Button>
                    //     </div>
                    // </div>`

                    `<div class="swiper-slide card">
            <div class="card-content">
              <div class="image">
                  <img src="${character.image}" alt="">
              </div>
  
              <div class="media-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-github"></i>
              </div>
  
              <div class="name-profession">
                <span class="${character.name}">1</span>
                <span class="profession">Web Developer</span>
              </div>
  
              <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>
  
              <div class="button">
                <button class="aboutMe">About Me</button>
                <button class="hireMe">Hire Me</button>
              </div>
            </div>
          </div>`

    dataResponse.innerHTML += card;

});

})

.catch(error => alert("ERROR"));