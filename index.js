fetchData();

const card = document.querySelector(".card");
card.classList.add("loading");

card.classList.add("loading");

function fetchData() {
  setTimeout(() => {
    card.classList.remove("loading");
  }, 2000);
}
