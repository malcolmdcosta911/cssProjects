fetchData();

console.log("yes");

function fetchData() {
  const loadWrapper = document.createElement("div");
  loadWrapper.classList.add("loadWrapper");
  const activity = document.createElement("div");
  activity.classList.add("activity");
  loadWrapper.append(activity);

  //-----------------------------heading starts-------------

  const cardHead = document.querySelector(".card__heading");
  if (!cardHead) return;

  //   const oldCotent1 = cardHead.childNodes[1].cloneNode(true);
  //   const oldCotent0 = cardHead.childNodes[0].cloneNode(true);
  //   console.log(oldCotent1, oldCotent0);
  //   if (oldCotent1 instanceof Node) {
  //     console.log("cardHead is a Node");
  //   } else {
  //     console.log("cardHead is likely an element");
  //   }

  const headLoadWrapper = loadWrapper.cloneNode(true);
  headLoadWrapper.style.minHeight = "50px";

  const oldHeadCotent = [...cardHead.childNodes];

  removeChildren(cardHead, cardHead.childNodes);
  cardHead.appendChild(headLoadWrapper);

  //-----------------------------heading ends-------------

  //-----------------------------avatar starts-------------
  const avatar = document.querySelector(".avatar");

  const oldAvatar = avatar.cloneNode(true);
  console.log("oldAvatar", oldAvatar);

  const circlularLoadWrapper = loadWrapper.cloneNode(true);
  circlularLoadWrapper.classList.add("circular");

  avatar.appendChild(circlularLoadWrapper);

  //-----------------------------avatar ends-------------

  setTimeout(() => {
    // cardHead.appendChild(oldCotent0);
    //
    //readdd heading
    removeChildren(cardHead, cardHead.childNodes);
    Array.from(oldHeadCotent).forEach((node) => {
      cardHead.appendChild(node);
    });

    //remove avatars circlularLoadWrapper
    avatar.removeChild(circlularLoadWrapper);
  }, 2000);
}

function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
