const addCardBtn = document.getElementById("addBtn");

let startX = 0;
let startY = 0;

//zindex
let zindex = 1;
let cardCount = 1;

addCardBtn.addEventListener("click", addCard);

function addCard(e) {
  const container = document.getElementById("container");
  const card = document.createElement("div");
  card.classList.add("card");
  card.draggable = true;
  card.contentEditable = true;
  card.innerText = "card " + cardCount;
  ++zindex;
  ++cardCount;
  card.style.zIndex = zindex;
  container.append(card);
  addDragToCard();
}

function increaseZIndex(card) {
  ++zindex;
  card.style.zIndex = zindex;
}

function addDragToCard() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    //
    // show card on top of prev on click
    card.addEventListener("click", (e) => {
      // ++zindex;
      // card.style.zIndex = zindex;
      increaseZIndex(card);
    });
    //
    //
    card.addEventListener("dragstart", (e) => {
      startX = e.clientX;
      startY = e.clientY;
      increaseZIndex(card); // show card on top of drag drop on top of prev
    });

    card.addEventListener("dragend", (e) => {
      card.style.top = card.offsetTop - (startY - e.clientY) + "px";
      card.style.left = card.offsetLeft - (startX - e.clientX) + "px";
    });
  });
}
