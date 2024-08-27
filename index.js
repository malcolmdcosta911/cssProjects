const btns = document.querySelectorAll(".faq__toggle");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.parentNode.classList.toggle("active");
  });
});
