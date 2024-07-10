//search icon function para mag show 
const search = document.querySelector("#search");
const glass = document.querySelector("#glass");

glass.addEventListener("mouseenter", () => {
  search.classList.toggle("w-0");
  search.focus();
});
glass.addEventListener("mouseleave", () => {
  search.classList.toggle("w-0");
  search.focus();
});


//nav responsiveness function
const burgerIcon = document.getElementById("burger");
const nav = document.getElementById("nav");
const header = document.getElementById("header");
const logoImg = document.getElementById("logo-img");

burgerIcon.addEventListener("click", () => {
  nav.classList.toggle("lg:hidden");
  header.classList.toggle("bg-green-700");
  logoImg.classList.toggle("lg:hidden");
  header.classList.toggle("lg:left-2/4");
});


//images slider sa new  arrivals
