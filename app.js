//variables
const addNewBtn = document.querySelector(".addNew");
const newCardContainer = document.querySelector(".new-card-container");
const card = document.querySelector(".new-card");
const cancelBtn = document.querySelector(".cancel-btn");
const trashBtn = document.querySelector("#trashBtn");
const nextBtn = document.querySelector(".next-btn");
const backBtn = document.querySelector(".back-btn");
const saveBtn = document.querySelector(".save-btn");
const counter = document.getElementById("counter");
let cards = [];
let cardCounter = 0;
let playing = false;

//functions
const cardFlip = () => {
<<<<<<< Updated upstream
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

//event listeners

=======
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

// display initial cards
document.addEventListener("DOMContentLoaded", () => {
  let appState = {
    flashcards: [
      { front: "Koń", back: "Horse" },
      { front: "Królik", back: "Rabbit" },
      { front: "Pies", back: "Dog" },
    ],
  };

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

  const app = document.getElementById("app");
  const cardTemplate = document.querySelector("#template-card");
  const cardTemplateBack = document.getElementById("card-back-read-only");
  cardTemplateBack.classList.add("hidden");
  const cardTemplateFront = document.getElementById("card-front-read-only");
  const cardList = document.querySelector("#card-list");

  appState.flashcards.forEach((flashcard, index) => {
    const cardToAdd = cardTemplate.cloneNode(true);
    cardToAdd.classList.remove("hidden");
    cardToAdd.id = "card_" + index;
    const cardFront = cardToAdd.querySelector(".front-output");
    cardFront.innerText = flashcard.front;
    cardList.append(cardToAdd);


    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      card.addEventListener('click', function () {
        cardFlip();
        cardFront.classList.add("hidden");
        cardTemplateBack.innerText = flashcard.back;
        cardList.append(cardTemplateBack);
      });
    });
    console.log('card flipped');
  });
  console.log(`you have ${appState.flashcards.length} card/s.`);
});


// event listeners
>>>>>>> Stashed changes
addNewBtn.addEventListener("click", () => {
  newCardContainer.classList.remove("hidden");
});

cancelBtn.addEventListener("click", function () {
  newCardContainer.classList.add("hidden");
});

<<<<<<< Updated upstream
trashBtn.addEventListener("click", () => {
  cardFlip();
  document.querySelector(".first-input").value = "";
  document.querySelector(".second-input").value = "";
  newCardContainer.classList.add("hidden");
});

=======
>>>>>>> Stashed changes
nextBtn.addEventListener("click", function () {
  const inputValue1 = document.querySelector(".first-input").value;
  const firstInputOnSecondPage = document.querySelector(".firstInputValue");
  cardFlip();
  firstInputOnSecondPage.innerText = inputValue1;
});

backBtn.addEventListener("click", cardFlip);

saveBtn.addEventListener("click", function () {
<<<<<<< Updated upstream
  // header counter
  cardCounter++;
  counter.innerText = cardCounter;
=======
    // header counter
    cardCounter++;
    counter.innerText = cardCounter;
>>>>>>> Stashed changes

  // inputs outputs - display card with NewCard Component
  const inputValue1 = document.querySelector(".first-input").value;
  const inputValue2 = document.querySelector(".second-input").value;

<<<<<<< Updated upstream
  const cardTemplate = document.getElementById("template-card");
  const newCard = cardTemplate.cloneNode(true);
  newCard.classList.remove("hidden");
  const cardId = `card-${cards.length + 1}`;
  newCard.id = cardId;
  const cardFrontText = newCard.querySelector(".front-output");
  cardFrontText.textContent = inputValue1;
  const cardBackText = newCard.querySelector(".back-output");
  cardBackText.textContent = inputValue2;
  cardBackText.classList.add("hidden");
=======
    const cardTemplate = document.getElementById("template-card");
    const cardTemplateBack = document.getElementById("card-back-read-only");
    cardTemplateBack.classList.add("hidden");
    const newCard = cardTemplate.cloneNode(true);
    newCard.classList.remove("hidden");
    const cardId = `card-${cards.length + 1}`;
    console.log(cards);
    newCard.id = cardId;
    const cardFrontText = newCard.querySelector(".front-output");
    cardFrontText.textContent = inputValue1;
    const cardBackText = newCard.querySelector(".back-output");
    cardBackText.textContent = inputValue2;
>>>>>>> Stashed changes

  const cardList = document.querySelector("#card-list");
  cardList.appendChild(newCard);

  // Reset the input values
  document.querySelector(".first-input").value = "";
  document.querySelector(".second-input").value = "";

  // Hide the new card container
  cardFlip();
  document.querySelector(".new-card-container").classList.add("hidden");
<<<<<<< Updated upstream
=======
  cardTemplateBack.classList.add("hidden");
>>>>>>> Stashed changes

  // Access to all flashcards
  cards = document.querySelectorAll('li[id^="card"]');

  //Edit view
  cards.forEach((card) => {
    const buttonFront = card.querySelector("#editFront");
    const editTemplate = document.getElementById("edit-template");
    buttonFront.addEventListener("click", () => {
      const newFront = editTemplate.cloneNode(true);
      const newFrontId = `editFront-${cardId}`;
      newFront.classList.remove("hidden");
      newFront.classList.add("front");
      newFront.id = newFrontId;
      newFront.querySelector("input").value =
<<<<<<< Updated upstream
        card.querySelector(".front-output").textContent;
=======
          card.querySelector(".front-output").textContent;
>>>>>>> Stashed changes
      const previousViewFront = card;
      card.replaceWith(newFront);
      newFront.querySelector("input").focus();

      const cancelBtn = newFront.querySelector(".cancel-btn");
      cancelBtn.addEventListener("click", () => {
        newFront.replaceWith(previousViewFront);
      });
      //removing flashcard
      const removeIcon = newFront.querySelector('img[src="removeIcon.svg"]');
      removeIcon.addEventListener("click", () => {
        newFront.remove();
        cardCounter--;
        counter.innerText = cardCounter;
      });
      //saving new inputs
      const saveBtn = newFront.querySelector(".save-btn");
      saveBtn.addEventListener("click", () => {
        const newInput = document.querySelector(".textstyleedit").value;
        newFront.replaceWith(previousViewFront);
        cardFrontText.textContent = newInput;
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
<<<<<<< Updated upstream
        card.querySelector(".back-output").textContent;
=======
          card.querySelector(".back-output").textContent;
>>>>>>> Stashed changes
      const previousViewBack = card;
      card.replaceWith(newBack);
      newBack.querySelector("input").focus();

      const cancelBtn = newBack.querySelector(".cancel-btn");
      cancelBtn.addEventListener("click", () => {
        newBack.replaceWith(previousViewBack);
      });
      //removing flashcard
      const removeIcon = newBack.querySelector('img[src="removeIcon.svg"]');
      removeIcon.addEventListener("click", () => {
        newBack.remove();
        cardCounter--;
        counter.innerText = cardCounter;
      });
      //saving edited
      const saveBtn = newBack.querySelector(".save-btn");
      saveBtn.addEventListener("click", () => {
        const newInput = document.querySelector(".textstyleedit").value;
        newBack.replaceWith(previousViewBack);
        cardBackText.textContent = newInput;
      });
    });
<<<<<<< Updated upstream
  });
});
=======
    card.addEventListener("click", (event) => {
      if (event.target.classList.contains("textFrame")) {
        anime({
          targets: card,
          rotateY: { value: "+=180", delay: 200 },
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

// flip card
//   const cards = document.querySelector('.card');
//   const cardTemplateFront = document.querySelector(".front");
//   const cardTemplateBack = document.querySelector(".back");
//
//   cards.addEventListener("click", (event) {
//       if (event.target.classList.contains("textFrame"))
//       anime({
//         targets: card,
//         rotateY: { value: "+=180", delay: 100 },
//         easing: "easeInOutSine",
//         duration: 400,
//         complete: function (anim) {
//           playing = false;
//         },
//       });
//     };
// });


>>>>>>> Stashed changes
