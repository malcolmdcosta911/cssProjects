const allItems = document.querySelectorAll(".step");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let step = 1;

//default
if (step == 1) {
  prevBtn.disabled = true;
}

nextBtn.addEventListener("click", (e) => {
  if (step < allItems.length) {
    step++;
  }
  

  onStepChnage();
});

prevBtn.addEventListener("click", (e) => {
  if (step > 1) {
    step--;
  }
  onStepChnage();
});

const onStepChnage = () => {


  //1/3-->33 2/3-->66 3/3-->1
  const width = ((step - 1) / (allItems.length - 1)) * 100;
  // console.log("width", width);
  progress.style.width = width + "%";

  //handle disable
  if (step == 1) {
    prevBtn.disabled = true;
    //nextBtn do nothing
  } else if (step == 4) {
    nextBtn.disabled = true;
    //prevBtn do nothing
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }

  // console.log("step", step);

  //inc/dec step
  allItems.forEach((item, index) => {
    if (index + 1 <= step) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};
