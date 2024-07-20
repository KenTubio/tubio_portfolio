//image slide sa my header
const container = document.getElementById("img-container");
const beforeBtn = document.getElementById("before");
const nextBtn = document.getElementById("next");

const maxScroll = container.scrollWidth - container.offsetWidth;

nextBtn.addEventListener("click", () => {
  container.style.scrollBehavior = "smooth";
  if (container.scrollLeft >= maxScroll) {
    container.scrollLeft = 0;
  } else {
    container.scrollLeft += container.offsetWidth;
  }
});

beforeBtn.addEventListener("click", () => {
  container.style.scrollBehavior = "smooth";
  if (container.scrollLeft >= maxScroll) {
    container.scrollLeft = 0;
  } else {
    container.scrollLeft -= container.offsetWidth;
  }
});

//POPUP ADD TO CART FUNCTIONS TO DITO
const closeBtn = document.getElementById("close");
const popupContainer = document.getElementById("popup-container");
const popup = document.getElementById("popup");
const cart = document.getElementById("cart");
const popupContent = document.getElementById("popup-content");


cart.addEventListener("click", () => {
  popupContainer.classList.toggle("hidden");
  document.body.style.overflowY = 'hidden';
});

closeBtn.addEventListener("click", () => {
  popupContainer.classList.add("hidden");
});

popupContainer.addEventListener("click", () => {
  popupContainer.classList.add("hidden");
  document.body.style.overflowY = 'scroll';
});


//ADD TO CART ITEMS TO DITO BANDA

document.querySelectorAll('#add-to-cart').forEach(button => {
  button.addEventListener('click', ()=>{

    const itemContainer = document.createElement('div');
    itemContainer.classList.add('border-2');
    popupContent.appendChild(itemContainer);

    const imgDisplay = button.getAttribute('data-image-src');
    const itemImageContent = document.createElement('img');
    itemImageContent.src = imgDisplay;
    itemImageContent.classList.add('w-52');
    itemImageContent.classList.add('h-52');

    button.style.pointerEvents = 'none';
    button.style.opacity = '.3';

    itemContainer.appendChild(itemImageContent);

  })
});


//DITO YUNG MAG DISPLAY ANG NUMBER SA CART
const cartNumDisplay = document.getElementById('cart-numdisplay');

let countDisplay = parseInt(cartNumDisplay.textContent, 10);

function countPerClick() {
  countDisplay ++;

  cartNumDisplay.textContent = countDisplay;
}

const allCartBtn = document.querySelectorAll('#add-to-cart');

document.querySelectorAll('#add-to-cart').forEach(button =>{
  button.addEventListener('click', countPerClick);
})