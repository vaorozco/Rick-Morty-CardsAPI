const dataResponse = document.getElementById('cards-container');

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
                    `<div class="card">
                        <img src="${character.image}" alt="" class="card-image">
                        <h3>Name: ${character.name}</h3>
                        <h3>Status: ${character.status}</h3>
                        <h3>Species: ${character.species}</h3>
                        <h3>Type: ${character.type}</h3>
                        <h3>Gender: ${character.gender}</h3>
                        <div class="card-buttons">
                            <i class="fa-solid fa-star card-like-button"></i>
                            <Button class="card-add-button">Add as a player</Button>
                        </div>
                    </div>`
    dataResponse.innerHTML += card;

});

})

.catch(error => alert("ERROR"));

var splide = new Splide( '.splide', {
    perPage: 3,
    rewind : true,
  } );
  
  splide.mount();