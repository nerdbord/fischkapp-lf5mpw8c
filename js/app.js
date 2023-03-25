//new card component
const addNewBtn = document.querySelector(".addNew");
const newCardContainer = document.querySelector(".new-card-container");
const card = document.querySelector(".new-card");
const cancelBtn = document.querySelector(".cancel-btn");
const nextBtn = document.querySelector(".next-btn");
const backBtn = document.querySelector(".back-btn");
const saveBtn = document.querySelector(".save-btn");
let cards = [];
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
  firstInputOnSecondPage.innerText = inputValue1;
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

  const cardTemplate = document.getElementById("template-card");
  const newCard = cardTemplate.cloneNode(true);
  newCard.classList.remove("hidden");
  const cardId = `card-${cards.length + 1}`;
  console.log(cards);
  newCard.id = cardId;
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

  // access to all flashcards
  cards = document.querySelectorAll('li[id^="card"]');

  //edit button
  cards.forEach((card) => {
    const buttonFront = card.querySelector("#editFront");
    const editTemplate = document.getElementById("edit-template");
    buttonFront.addEventListener("click", (event) => {
      const newFront = editTemplate.cloneNode(true);
      const newFrontId = `editFront-${cardId}`;
      newFront.classList.remove("hidden");
      newFront.classList.add("front");
      newFront.id = newFrontId;
      newFront.querySelector("input").value =
        card.querySelector(".front-output").textContent;
      const previousViewFront = card;
      card.replaceWith(newFront);
      newFront.querySelector("input").focus();

      const cancelBtn = newFront.querySelector(".cancel-btn");
      cancelBtn.addEventListener("click", () => {
        newFront.replaceWith(previousViewFront);
      });
    });
    const buttonBack = card.querySelector("#editBack");
    buttonBack.addEventListener("click", () => {
      const newBack = editTemplate.cloneNode(true);
      const newBackId = `editBack-${cardId}`;
      newBack.classList.remove("hidden");
      newBack.classList.add("back");
      newBack.id = newBackId;
      newBack.querySelector("input").value =
        card.querySelector(".back-output").textContent;
      const previousViewBack = card;
      card.replaceWith(newBack);
      newBack.querySelector("input").focus();

      const cancelBtn = newBack.querySelector(".cancel-btn");
      cancelBtn.addEventListener("click", () => {
        newBack.replaceWith(previousViewBack);
      });
    });
    card.addEventListener("click", (event) => {
      if (event.target.classList.contains("textFrame")) {
        anime({
          targets: card,
          rotateY: { value: "+=180", delay: 100 },
          easing: "easeInOutSine",
          duration: 400,
          complete: function (anim) {
            playing = false;
          },
        });
      }
    });
  });
});
