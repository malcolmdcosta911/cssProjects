const allItems = document.getElementsByClassName("item");

Array.from(allItems).forEach((element) => {
  //   element.classList.remove("active");
  element.addEventListener("click", (e) => {
    // console.log("yes");
    //remove prev  from all prev
    Array.from(allItems).forEach((element) =>
      element.classList.remove("active")
    );
    //add class to current
    element.classList.add("active");
  });
});
