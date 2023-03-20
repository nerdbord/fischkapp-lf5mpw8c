import { createState } from "./data/createState.js";
import { createCardComponent } from "./ui/card.js";
import { addCard } from "./data/actions.js";

document.addEventListener("DOMContentLoaded", () => {
  // Example of how we can create app state responsible for holding data
  let appState = createState();

  // Example of how we can create UI component using reusable function
  // const newCardData = { front: "Good morning", back: "Dzień dobry" };
  // const card = createCardComponent(newCardData);

  // Example of how we can add card to our state
  const updatedAppState = addCard(appState, newCardData);
  appState = updatedAppState;

  const app = document.getElementById("app");

  // Example of how to display created card in our UI
  app.append(card);

  console.log(`You have ${appState.flashcards.length} card/s.`);
});

//new card component
const addNewBtn = document.querySelector(".addNew");
const newCardContainer = document.querySelector(".new-card-container");
const card = document.querySelector(".new-card");
const cancelBtn = document.querySelector(".cancel-btn");
const nextBtn = document.querySelector(".next-btn");
const backBtn = document.querySelector(".back-btn");
const saveBtn = document.querySelector(".save-btn");

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
nextBtn.addEventListener("click", cardFlip);
backBtn.addEventListener("click", cardFlip);
saveBtn.addEventListener("click", function () {
  console.log("New Card saved");
});
