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

//POPUP ADD TO CART FUNCTION TO DITO
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
  document.body.style.overflowY = 'scroll';
});



//ADD TO CART ITEMS TO DITO BANDA
document.querySelectorAll('#add-to-cart').forEach(button => {
  button.addEventListener('click', ()=>{
    //eto yung container nilang lahat
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('shadow-md', 'flex', 'px-2', 'relative');
    popupContent.appendChild(itemContainer);

    //eto yung img na papasok sa loob ng cart pag na click
    const imgDisplay = button.getAttribute('data-image-src');
    const itemImageContent = document.createElement('img');
    itemImageContent.src = imgDisplay;
    itemImageContent.classList.add('w-32', 'h-24', 'rounded-md');
    itemContainer.appendChild(itemImageContent);

    //dito namn and container laman ang mga price at itemname
    const itemDetailsContainer = document.createElement('div');
    itemDetailsContainer.classList.add('flex', 'flex-col', 'justify-around', 'px-3');
    itemContainer.appendChild(itemDetailsContainer);

    //dito namn i call yun pinakamalapit na ansertor ng item name at yung price
    const itemNameAncestor = button.closest('figure').nextElementSibling;
    const itemName = itemNameAncestor.querySelector('.item-name').textContent;
    const itemPrice = itemNameAncestor.querySelector('.item-price').textContent;

    const itemNameContainer = document.createElement('span');
    itemNameContainer.classList.add('text-lg', 'font-rubik', 'font-bold', 'text-slate-700', 'sm:text-xs');
    itemNameContainer.textContent = itemName;
    itemDetailsContainer.appendChild(itemNameContainer);

    const priceContainer = document.createElement('span');
    priceContainer.classList.add('text-red-500', 'text-xl', 'font-bold', 'sm:text-base');
    priceContainer.textContent = itemPrice;
    itemDetailsContainer.appendChild(priceContainer);

    const freeShppingDetails = document.createElement('span');
    freeShppingDetails.classList.add('text-sm', 'sm:text-xs', 'sm:w-3/5');
    freeShppingDetails.innerHTML = '<i class="fa-solid fa-truck-fast text-green-700"></i> Enjoy low to free shipping!';
    itemDetailsContainer.appendChild(freeShppingDetails);


    // delete button funtion
    const deleteItem = document.createElement('span');
    deleteItem.innerHTML = '<i class="fa-solid fa-trash-can absolute top-2 right-2 text-green-600 hover:scale-125 transition text-xl sm:text-base"></i>';
    itemDetailsContainer.appendChild(deleteItem);


    // checkout button function
    const checkoutBtn = document.createElement('button');
    checkoutBtn.classList.add('hover:scale-110', 'absolute', 'bottom-2', 'right-2', 'bg-blue-400', 'p-2', 'text-white', 'text-sm', 'rounded-md', 'transition', 'sm:text-[.7rem]');
    checkoutBtn.innerHTML = 'Checkout';
    itemDetailsContainer.appendChild(checkoutBtn);


    deleteItem.addEventListener('click', ()=>{
      itemContainer.classList.add('hidden');
      button.style.pointerEvents = 'auto';
      button.style.opacity = '1';  
    })



    button.style.pointerEvents = 'none';
    button.style.opacity = '.3';

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