const fill = document.querySelector(".fill");
const boxes = document.querySelectorAll(".empty-box");

boxes.forEach((box) => {
  box.addEventListener("dragover", (event) => {
    // prevent default to allow drop
    event.preventDefault();
  });

  box.addEventListener("drop", (e) => {
    e.preventDefault();
    box.classList.remove("hover");
    //When the appendChild() method is called, it appends a node to the list of children of a specified parent node.
    // If the given node already exists in the document, appendChild() removes it from its current position and places it at the new position.
    box.append(fill);
  });
  box.addEventListener("dragenter", (e) => {
    // e.preventDefault();-->not shown needed in mdn docs
    box.classList.add("hover");
  });
  box.addEventListener("dragleave", (e) => {
    box.classList.remove("hover");
  });
});

fill.addEventListener("dragstart", (e) => {
  fill.classList.add("drag");
  //setTimeout to add delay and allow classes "fill" and "drag still be present"
  setTimeout(() => {
    fill.classList = "";
  }, 0);
});

fill.addEventListener("dragend", (e) => {
  fill.classList.add("fill");
});
