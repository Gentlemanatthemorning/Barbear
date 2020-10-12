import "./scss/main.scss";
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".page_nav_list");
  const navLinks = document.querySelectorAll(".page_nav_list li");
  burger.addEventListener("click", () => {
    //Toggle
    nav.classList.toggle("page_nav_active");
    //Animation
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
};
navSlide();