/*==================================
PRELOADER
==================================*/

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  preloader.classList.add("hide");
});

/*==================================
SCROLL PROGRESS BAR
==================================*/

window.addEventListener("scroll", function () {
  const scrollTop = document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / scrollHeight) * 100;

  document.getElementById("progress-bar").style.width = progress + "%";
});

/*==================================
STICKY NAVBAR
==================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/*=================================
 AOS Animation
=================================*/

AOS.init({
  duration: 1000,

  once: true,

  offset: 100,
});
