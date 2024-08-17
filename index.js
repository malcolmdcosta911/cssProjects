const allItems = document.getElementsByClassName("item");

Array.from(allItems).forEach((element) => {
  element.addEventListener("click", (e) => {
    removeActiveClasses();
    //add active class to current
    element.classList.add("active");
  });
});

function removeActiveClasses() {
  //remove active from all
  Array.from(allItems).forEach((element) => element.classList.remove("active"));
}
