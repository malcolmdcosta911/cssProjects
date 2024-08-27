const fixedNav = document.querySelector(".nav");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  // console.log(hero.offsetHeight, window.scrollY);
  fixedNav.classList.toggle("active", window.scrollY + 100 > hero.offsetHeight);
});
