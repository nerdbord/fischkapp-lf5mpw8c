//new card component
const addNewBtn = document.querySelector(".addNew");
const newCardContainer = document.querySelector(".new-card-container");
const card = document.querySelector(".new-card");
const cancelBtn = document.querySelector(".cancel-btn");
const nextBtn = document.querySelector(".next-btn");
const backBtn = document.querySelector(".back-btn");
const saveBtn = document.querySelector(".save-btn");
let cardCounter = 0;


// display initial cards
document.addEventListener("DOMContentLoaded", () => {
  let appState = {
    flashcards: [
      { front: "Koń", back: "Horse" },
      { front: "Królik", back: "Rabbit" },
      { front: "Pies", back: "Dog" },
    ],
  };

  const app = document.getElementById("app");
  const cardTemplate = document.querySelector("#card-template");
  cardTemplate.classList.remove("hidden");
  const cardTemplateBack = document.getElementById("card-back-read-only");
  cardTemplateBack.classList.add("hidden");
  const cardList = document.querySelector("#card-list");

  appState.flashcards.forEach((flashcard, index) => {
    const cardToAdd = cardTemplate.cloneNode(true);
    cardToAdd.id = "card_" + index;
    const cardFront = cardToAdd.querySelector(".front-output");
    cardFront.innerText = flashcard.front;
    cardList.append(cardToAdd);
  });
  console.log(`you have ${appState.flashcards.length} card/s.`);
});

addNewBtn.addEventListener("click", () => {
  newCardContainer.classList.remove("hidden");
});

let playing = false;

const cardFlip = () => {
  if (playing) return;
  playing = true;
  anime({
    targets: card,
    rotateY: { value: "+=180", delay: 100 },
    easing: "easeInOutSine",
    duration: 400,
    complete: function (anim) {
      playing = false;
    },
  });
};

  cancelBtn.addEventListener("click", function () {
  newCardContainer.classList.add("hidden");
});
nextBtn.addEventListener("click", function () {
  const inputValue1 = document.querySelector(".first-input").value;
  const firstInputOnSecondPage = document.querySelector(".firstInputValue");
  cardFlip();
  firstInputOnSecondPage.innerText = inputValue1;
});
backBtn.addEventListener("click", cardFlip);
saveBtn.addEventListener("click", function () {
  // header counter
  const counter = document.getElementById("counter");
  cardCounter++;
  counter.innerText = cardCounter;

  // inputs outputs - display card with NewCard Component
  const inputValue1 = document.querySelector(".first-input").value;
  const inputValue2 = document.querySelector(".second-input").value;

  const cardTemplate = document.getElementById("card-template");
  const cardTemplateBack = document.getElementById("card-back-read-only");
  cardTemplateBack.classList.add("hidden");
  const newCard = cardTemplate.cloneNode(true);
  newCard.classList.remove("hidden");

  const cardFrontText = newCard.querySelector(".front-output");
  cardFrontText.textContent = inputValue1;
  const cardBackText = newCard.querySelector(".back-output");
  cardBackText.textContent = inputValue2;
  cardBackText.classList.add("hidden");

  const cardList = document.querySelector("#card-list");
  cardList.appendChild(newCard);

  // Reset the input values
  document.querySelector(".first-input").value = "";
  document.querySelector(".second-input").value = "";

  // Hide the new card container
  cardFlip();
  document.querySelector(".new-card-container").classList.add("hidden");
});







