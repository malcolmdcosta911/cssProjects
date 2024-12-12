const boxItems = document.querySelectorAll(".box");

//Difference between document.addEventListener and window.addEventListener

window.addEventListener("scroll", addRemoveAnimation);

addRemoveAnimation();

function addRemoveAnimation() {
  // console.log("addRemoveAnimation", window.innerHeight);
  const triggerBottom = (window.innerHeight / 5) * 4;
  //mutiply and divide so as to decrease box size --> allows user to see scroll animation on item leave screen

  boxItems.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;

    if ((index == 1)) {
      console.log("getBoundingClientRect", boxTop, triggerBottom);
    }

    box.classList.toggle("active", boxTop < triggerBottom);
  });
}
