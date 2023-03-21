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
  const firstInputOnSecongPage = document.querySelector(".firstInputValue");
  cardFlip();
  firstInputOnSecongPage.innerHTML = inputValue1;
});
backBtn.addEventListener("click", cardFlip);
saveBtn.addEventListener("click", function () {
  // header counter

  const counter = document.getElementById("counter");
  const inputValue1 = document.querySelector(".first-input").value;
  const inputValue2 = document.querySelector(".second-input").value;
  cardCounter++;
  counter.innerText = cardCounter;

  // elements
  const newCard = document.createElement("li");
  const cardFrontReadOnly = document.createElement("div");
  const frontReadOnly = document.createElement("div");
  const textFrameFront = document.createElement("div");
  const pFront = document.createElement("p");
  const img = document.createElement("img");
  const cardBackReadOnly = document.createElement("div");
  const backReadOnly = document.createElement("div");
  const textFrameBack = document.createElement("div");
  const pBack = document.createElement("p");

  // setting inputs and sources
  pFront.textContent = inputValue1;
  img.src = "Icon.svg";
  img.alt = "editIcon";
  pBack.textContent = inputValue2;

  // adding classes
  cardFrontReadOnly.className = "card";
  frontReadOnly.className = "front";
  textFrameFront.className = "textFrame";
  pFront.className = "textstyle";
  img.className = "editIcon";
  cardBackReadOnly.className = "card";
  backReadOnly.className = "back";
  textFrameBack.className = "textFrame";
  pBack.className = "textstyle";

  // adding to DOM
  textFrameFront.appendChild(pFront);
  textFrameFront.appendChild(img);
  frontReadOnly.appendChild(textFrameFront);
  cardFrontReadOnly.appendChild(frontReadOnly);

  textFrameBack.appendChild(pBack);
  textFrameBack.appendChild(img);
  backReadOnly.appendChild(textFrameBack);
  cardBackReadOnly.appendChild(backReadOnly);

  newCard.appendChild(cardFrontReadOnly);
  newCard.appendChild(cardBackReadOnly);

  const cardList = document.querySelector("#card-list");
  cardList.appendChild(newCard);

  // Reset the input values
  document.querySelector(".first-input").value = "";
  document.querySelector(".second-input").value = "";

  // Hide the new card container
  cardFlip();
  document.querySelector(".new-card-container").classList.add("hidden");
});
