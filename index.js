const rippleBtns = document.querySelectorAll(".ripple");
// const rippleBtns = document.querySelectorAll(".ripple");

rippleBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //ClientX, clientY is the current position of the mouse relative to the webpage.
    //When the mouse is in the upper left corner of the page, clientX = 0 and clientY = 0;

    //OffsetX and offsetY are the positions of the current mouse relative to a certain area in the webpage

    //offsetTop
    //The HTMLElement.offsetTop read-only property returns the distance from the outer border of the current element (including its margin) to the top padding edge of the offsetParent, the closest positioned ancestor element.

    console.log("e");

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.left = e.clientX - btn.offsetLeft + "px";
    circle.style.top = e.clientY - btn.offsetTop + "px";
    btn.append(circle);

    setTimeout(() => {
      circle.remove();
    }, 1000);
  });
});
