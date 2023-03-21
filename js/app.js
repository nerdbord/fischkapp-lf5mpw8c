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
  const inputValue1 = document.querySelector(".first-input").value;
  const inputValue2 = document.querySelector(".second-input").value;

  const newCard = document.createElement("li");
  newCard.innerHTML = `<div class="card" id="card-front-read-only">
      <div class="front" id="front-read-only">
      <div class="textFrame" id="textFrame">
      <p class="textstyle">${inputValue1}</p>  
      <img src="Icon.svg" alt="editIcon">
      </div>
      </div>
    </div>
    <div class="card" id="card-back-read-only">
      <div class="back" id="back-read-only">
      <div class="textFrame" id="textFrame">
      <p class="textstyle">${inputValue2}</p>  
      <img src="Icon.svg" alt="editIcon">
      </div>
      </div>
    </div>`;
  //  `<div class="new-card-container">
  //   <div class="new-card">
  //     <div class="new-card-front">
  //       ${inputValue1}
  //     </div>
  //     <div class="new-card-back">
  //       ${inputValue2}
  //     </div>
  //   </div>
  // </div>`;

  const cardList = document.querySelector("#card-list");
  cardList.appendChild(newCard);

  // Reset the input values
  document.querySelector(".first-input").value = "";
  document.querySelector(".second-input").value = "";

  // Hide the new card container
  document.querySelector(".new-card-container").classList.add("hidden");
});
