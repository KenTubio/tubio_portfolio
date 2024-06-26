const revealBtn = document.querySelector(".reveal");
const hiddenContent = document.querySelector(".hidden-nav");
const imghide = document.querySelector(".hide-img");

function revealContent() {
  if (hiddenContent.classList.contains("xl:hidden")) {
    hiddenContent.classList.remove("xl:hidden");
  } else {
    hiddenContent.classList.add("xl:hidden");
  }
}
revealBtn.addEventListener("click", revealContent);

function hideImg() {
  if (imghide.classList.contains("xl:hidden")) {
    imghide.classList.remove("xl:hidden");
  } else {
    imghide.classList.add("xl:hidden");
  }
}
revealBtn.addEventListener("click", hideImg);





var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(timer);
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

  timer = setTimeout(function () {
    showSlides((slideIndex += 1));
  }, 2000);
}
