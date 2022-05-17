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

       /* const card =    `<div class="card bg-dark m-1" style="width: 18rem;">

                            <img src=${character.image} class="card-img-top" alt="...">

                            <div class="card-body">

                                <h5 class="card-title fw-bold mb-3">${character.name}</h5>

                                <p class="card-text">Specie: ${character.species}</p>

                                <p class="card-text">Gender: ${character.gender}</p>

                                <p class="card-text">Location: ${character.location.name}</p>

                                <p class="card-text">Status: ${character.status}</p>

                            </div>

                        </div>`;

        dataResponse.innerHTML += card;

    });

})

.catch(error => alert("ERROR"));*/