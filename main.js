const menuBth = document.getElementById("menu-bth");
const navLinks = document.getElementById("nav-links");
const menuBthIcon = menuBth.querySelector("i");

menuBth.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBthIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBthIcon.setAttribute("class", "ri-menu-line");
});

// ------

const scrollReavealOption = {
  distance: "50px",
  origin: "botton",
  duration: 1000,
};

// header container

ScrollReveal().reveal(".header__image img", { ...scrollReavealOption });

ScrollReveal().reveal(
  ".header__content h4, .header__content .section__header",
  { ...scrollReavealOption, delay: 500 }
);

ScrollReveal().reveal(".header__content p", {
  ...scrollReavealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__bth", { ...scrollReavealOption, delay: 1500 });

// about container

ScrollReveal().reveal(".about__image img", {
  ...scrollReavealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollReavealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollReavealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__card", {
  ...scrollReavealOption,
  delay: 1500,
  interval: 500,
});

//price container

ScrollReveal().reveal(".price__card", {
  ...scrollReavealOption,
  interval: 500,
});

// ----- swiper

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
});
