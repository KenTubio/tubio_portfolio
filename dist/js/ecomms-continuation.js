//image slide sa my header
const container = document.getElementById("img-container");
const beforeBtn = document.getElementById("before");
const nextBtn = document.getElementById("next");

const maxScroll = container.scrollWidth - container.offsetWidth;

nextBtn.addEventListener("click", () => {
  container.style.scrollBehavior = "smooth";
  if(container.scrollLeft >= maxScroll){
    container.scrollLeft = 0;
  }else {
    container.scrollLeft += container.offsetWidth;
  }
});

beforeBtn.addEventListener("click", () => {
    container.style.scrollBehavior = "smooth";
    if(container.scrollLeft >= maxScroll){
      container.scrollLeft = 0;
    }else {
      container.scrollLeft -= container.offsetWidth;
    }
  });
