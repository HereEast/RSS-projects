console.log("Slider");

const slider = document.querySelector(".cards");
const slide = document.querySelector(".slide");
const nextSlide = document.querySelector(".button__right");

let count = 3;
let petsArray = shufflePetsArray();

window.addEventListener("load", handleLoad);
nextSlide.addEventListener("click", handleNext);


function handleNext() {
    const currentWidth = slider.clientWidth;
    const pos = slide.style.left;

    // slide.style.left = pos - currentWidth + "px";
    console.log(slide.style.left);
}



// LOAD
function handleLoad() {
    // changeCount();
    shufflePetsArray();
    createSlide(petsArray);
}

function createSlide(arr) {
    const width = slider.clientWidth;

    for(let i = 0; i < 3; i++) {
        const cardsRow = createCardsRow(arr);
        cardsRow.style.width = width + "px";

        slide.append(cardsRow);
    }

    console.log(width);
    slide.style.width = (width * 3) + "px";
}

// CREATE CARDS
function createCardsRow(arr) {
    const cardsContainer = document.createElement("div");
    cardsContainer.classList.add("cards__container");

    for(let i = 0; i < count; i++) {
        const currentPet = arr[i];
        
        fetch("../src/data/pets.json")
            .then((res) => res.json())
            .then((data) => {
                const pet = data.find((p) => p.name.toLowerCase() === currentPet);
                const card = createCardElement(pet);
                cardsContainer.insertAdjacentHTML("beforeend", card);
            });
    }

    return cardsContainer;
}


// CREATE CARD ELEMENT
function createCardElement(pet) {
    const cardElement = `
        <div class="card" data-pet-name=${pet.name.toLowerCase()}>
            <div class="card__image">
                <img src=${pet.img} alt=${pet.type} ${pet.name}>
            </div>

            <h4 class="pet__name">${pet.name}</h4>
            <button class="button button__secondary">Learn more</button>
        </div>
    `;

    return cardElement;
}

// CHANGE COUNT
function changeCount() {
    if (window.innerWidth > 940) count = 3;
    if (window.innerWidth <= 940) count = 2;
    if (window.innerWidth <= 630) count = 1;
}

// SHUFFLE ARR
function shufflePetsArray() {
    const pets = ["jennifer", "sophia", "woody", "scarlett", "katrine", "timmy", "freddie", "charly", "charly"];

    const shuffledPets = pets.sort(() => Math.random() - 0.5);
    return shuffledPets;
}

