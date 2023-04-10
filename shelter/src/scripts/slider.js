console.log("Slider");

const cardsContainer = document.querySelector(".cards__container");

let count = 3;
let petsArray = shufflePetsArray();
let currentCards = petsArray.slice(0, 3);

// console.log(petsArray);
// console.log(currentCards);


window.addEventListener("load", handleLoad);
window.addEventListener("resize", handleResize);



// LOAD
function handleLoad() {
    // changeCount();
    shufflePetsArray();
    createCards();
}

// RESIZE
function handleResize() {
    changeCount();
}



// CREATE CARDS
function createCards() {
    for(let i = 0; i < count; i++) {
        const currentPet = petsArray[i];

        // console.log(currentPet);
        
        fetch("../src/data/pets.json")
            .then((res) => res.json())
            .then((data) => {
                const petData = data.find((pet) => pet.name.toLowerCase() === currentPet);
                createCardElement(petData);
            });
    }
}


// CREATE CARD ELEMENT
function createCardElement(petData) {
    const cardElement = `
        <div class="card" data-pet-name=${petData.name.toLowerCase()}>
            <div class="card__image">
                <img src=${petData.img} alt=${petData.type} ${petData.name}>
            </div>

            <h4 class="pet__name">${petData.name}</h4>
            <button class="button button__secondary">Learn more</button>
        </div>
    `;

    cardsContainer.insertAdjacentHTML("beforeend", cardElement);
}

// CHANGE COUNT
function changeCount() {
    if (window.innerWidth > 940) count = 3;
    if (window.innerWidth <= 940) count = 2;
    if (window.innerWidth <= 630) count = 1;
}

// SHUFFLE ARR
function shufflePetsArray() {
    const pets = ["jennifer", "sophia", "woody", "scarlett", "katrine", "timmy", "freddie", "charly"];

    const shuffledPets = pets.sort(() => Math.random() - 0.5);
    return shuffledPets;
}

