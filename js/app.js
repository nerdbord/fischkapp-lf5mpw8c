// import { createState } from "./data/createState.js";
// import { createCardComponent } from "./ui/card.js";
// import { addCard } from "./data/actions.js";

// document.addEventListener("DOMContentLoaded", () => {
//   // Example of how we can create app state responsible for holding data
//   let appState = createState();

//   // Example of how we can create UI component using reusable function
//   // const newCardData = { front: "Good morning", back: "Dzień dobry" };
//   // const card = createCardComponent(newCardData);

//   // Example of how we can add card to our state
//   const updatedAppState = addCard(appState, newCardData);
//   appState = updatedAppState;

//   const app = document.getElementById("app");

//   // Example of how to display created card in our UI
//   app.append(card);

//   console.log(`You have ${appState.flashcards.length} card/s.`);
// });

//new card component
const addNewBtn = document.querySelector(".addNew");
const newCardContainer = document.querySelector(".new-card-container");
const card = document.querySelector(".new-card");
const cancelBtn = document.querySelector(".cancel-btn");
const nextBtn = document.querySelector(".next-btn");
const backBtn = document.querySelector(".back-btn");
const saveBtn = document.querySelector(".save-btn");
let cardCounter = 0;

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
  firstInputOnSecondPage.innerHTML = inputValue1;
});
backBtn.addEventListener("click", cardFlip);
saveBtn.addEventListener("click", function () {
  // header counter
  const counter = document.getElementById("counter");
  cardCounter++;
  counter.innerText = cardCounter;

  // inputs outputs
  const inputValue1 = document.querySelector(".first-input").value;
  const inputValue2 = document.querySelector(".second-input").value;

  const cardTemplate = document.getElementById("card-template");
  const newCard = cardTemplate.cloneNode(true);
  newCard.classList.remove("hidden");

  const cardFrontText = newCard.querySelector(".front-output");
  cardFrontText.textContent = inputValue1;
  const cardBackText = newCard.querySelector(".back-output");
  cardBackText.textContent = inputValue2;

  const cardList = document.querySelector("#card-list");
  cardList.appendChild(newCard);

  // Reset the input values
  document.querySelector(".first-input").value = "";
  document.querySelector(".second-input").value = "";

  // Hide the new card container
  cardFlip();
  document.querySelector(".new-card-container").classList.add("hidden");
});
