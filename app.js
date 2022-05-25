const dataResponse = document.getElementById('kards-container');
const dataCards = document.getElementById('test');

/*fetch('https://rickandmortyapi.com/api/character', {
    method: 'GET'
})
.then(res => {
    return res.json();
})
.then(data => {

    let characters = data.results;

    for (let index = 0; index < 3; index++) {
      
    const card = 
                    `<div class="kard">
                        <img src="${characters[index].image}" alt="" class="kard-image">
                        <h3>Name: ${characters[index].name}</h3>
                        <h3>Status: ${characters[index].status}</h3>
                        <h3>Species: ${characters[index].species}</h3>
                        <h3>Type: ${characters[index].type}</h3>
                        <h3>Gender: ${characters[index].gender}</h3>
                        <div class="kard-buttons">
                            <i class="fa-solid fa-star kard-like-button"></i>
                            <Button class="kard-add-button">Add as a player</Button>
                        </div>
                    </div>`

    dataResponse.innerHTML += card;

};

})

.catch(error => alert("ERROR")); */

fetch('https://rickandmortyapi.com/api/character', {
    method: 'GET'
})
.then(res => {
    return res.json();
})
.then(data => {

    let characters = data.results;

    for (let index = 0; index < characters.length; index++) {
      
    const card = 
                    `<div class="swiper-slide card">
                        <div class="card-content">
                          <div class="image">
                            <img src="${characters[index].image}" alt="">
                          </div>
                          
                            <h3>${characters[index].name}</h3>
                            <h3>Status: ${characters[index].status}</h3>
                            <h3>Specie: ${characters[index].species}</h3>
                            <h3>Location: ${characters[index].location.name}</h3>
                          
                          <div class="kard-buttons">
                          <i class="fa-solid fa-star kard-like-button"></i>
                            <button class="kard-add-button">Add Card</button>
                          </div>
                        </div>
                      </div> `

               /* `  <div class="swiper-slide kard">
                        <img src="${characters[index].image}" alt="" class="kard-image">
                        <h3>Name: ${characters[index].name}</h3>
                        <h3>Status: ${characters[index].status}</h3>
                        <h3>Species: ${characters[index].species}</h3>
                        <h3>Type: ${characters[index].type}</h3>
                        <h3>Gender: ${characters[index].gender}</h3>
                        <div class="kard-buttons">
                            <i class="fa-solid fa-star kard-like-button"></i>
                            <Button class="kard-add-button">Add as a player</Button>
                        </div>
                    </div>` */

    dataCards.innerHTML += card;

};

})

.catch(error => alert("ERROR"));