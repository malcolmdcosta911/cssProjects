const chatItems = document.querySelectorAll(".chat__item");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.isIntersecting);
        entry.target.classList.add("chat__item--active");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.4,
    // saw than since since transition transform X used threshold was like .4 for isIntersecting to work
  }
);

chatItems.forEach((item) => observer.observe(item));
