const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const homePage = document.querySelector(".home-page");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// INTERSECTION OBSERVER API

const homeCall = (entries, observer) => {
  const [entry] = entries;
  console.log(entry);
  const navBar = document.querySelector(".navbar");
  const navLink = document.querySelectorAll(".nav-link");
  const icon = document.querySelector(".icon-i");
  if (!entry.isIntersecting) {
    navBar.style.background = "white";
    navLink.forEach((nav, i) => {
      nav.classList.add("color-b");
      nav.classList.remove("color-w");
    });
    icon.classList.add("color-b");
    icon.classList.remove("color-w");
  } else {
    navBar.style.border = "none";
    navBar.style.background = "transparent";
    navLink.forEach((nav) => {
      nav.classList.add("color-w");
      nav.classList.remove("color-b");
    });
    icon.classList.add("color-w");
    icon.classList.remove("color-b");
  }
};

let homeOpt = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observeHomePage = new IntersectionObserver(homeCall, homeOpt);

observeHomePage.observe(homePage);
