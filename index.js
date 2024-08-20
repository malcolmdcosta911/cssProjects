const allItems = document.getElementsByClassName("step");

let step = 1;

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", (e) => {
  if (step == 4) return;
  Array.from(allItems)[step].classList.add("active");
  step++;
  // console.log("step", step);
});

prevBtn.addEventListener("click", (e) => {
  if (step == 1) return;
  step--;
  Array.from(allItems)[step].classList.remove("active");
});
