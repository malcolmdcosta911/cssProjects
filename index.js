let random = 1;

const options = {
  // root: document.querySelector("#scrollArea"),
  // rootMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time

    //

    if (entry.isIntersecting) {
      for (let i = 0; i < 2; i++) {
        loadNewCards();
      }
      loadNewCards();

      console.log("yes");
      observer.unobserve(entry.target);
      getLastChild();
    }
  });
}, options);

//first call
getLastChild();

function getLastChild() {
  const lastChildCard = document.querySelector(".card:last-child");
  observer.observe(lastChildCard);
}

function loadNewCards() {
  random++;
  const headingText = "Card " + random;
  const container = document.getElementById("container");

  const card = document.createElement("div");
  card.classList.add("card", "card--primary");
  card.dataset.contentName = headingText;

  const cardHead = document.createElement("div");
  card.classList.add("card__head");

  const img = document.createElement("img");
  img.src = "https://picsum.photos/200/300";

  cardHead.append(img);
  card.append(cardHead);

  const cardBody = document.createElement("div");
  cardBody.innerText = headingText;
  card.append(cardBody);
  container.append(card);
}
