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
    itemContainer.classList.add('shadow-md', 'flex', 'px-2', 'relative', 'itemBox');
    popupContent.appendChild(itemContainer);
    
    

    //checkbox to dito
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('mr-2', 'w-4', 'border-2', 'check');


    function checkoutBtnUpdate(){
      itemContainer.classList.add('hidden');
      button.style.pointerEvents = 'auto';
      button.style.opacity = '1'; 
    }

    function updateCartDisplay() {
      const checkboxes = popupContent.querySelectorAll('.check');
     
      countDisplay = (popupContent.querySelectorAll('.itemBox').length - Array.from(checkboxes).filter(checkbox => checkbox.checked).length);
    
      cartNumDisplay.textContent = countDisplay;
    }
    

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        checkoutBtn.addEventListener('click', checkoutBtnUpdate);
        checkoutBtn.addEventListener('click', minusCountPerClick);
        checkoutBtn.addEventListener('click', updateCartDisplay);
       
      } else {
        checkoutBtn.removeEventListener('click', checkoutBtnUpdate);
        checkoutBtn.removeEventListener('click', minusCountPerClick);
      }
    });

    
    itemContainer.appendChild(checkbox);

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


    //dito yung price at yung quantity area
    const containerPriceQuantity = document.createElement('div');
    containerPriceQuantity.classList.add('flex', 'gap-4');
    itemDetailsContainer.appendChild(containerPriceQuantity);

    const quantity = document.createElement('div');
    quantity.classList.add('order-2', 'flex', 'gap-2', 'items-center', 'border-2', 'rounded-md', 'px-1', 'absolute', 'bottom-2', 'right-2');
    containerPriceQuantity.appendChild(quantity);

    const minusBtn = document.createElement('i');
    minusBtn.classList.add('fa-solid', 'fa-minus', 'bg-slate-300', 'px-2', 'py-1', 'rounded-sm','hover:scale-105', 'transition','minus-btn');

    const quantityDisplay = document.createElement('span');
    quantityDisplay.innerText = '1';
    quantityDisplay.classList.add('quantity-display');

    const plusBtn = document.createElement('i');
    plusBtn.classList.add('fa-solid', 'fa-plus', 'bg-slate-300', 'px-2', 'py-1', 'rounded-sm','hover:scale-105', 'transition', 'plus-btn');

    //plus and minus btn functions
    let quantityNumber = parseInt(quantityDisplay.innerText, 10);
    plusBtn.addEventListener('click', ()=>{
      quantityNumber ++;

      quantityDisplay.textContent = quantityNumber;
    })

    minusBtn.addEventListener('click', ()=>{
      if(quantityNumber > 1){
        quantityNumber --; 

        quantityDisplay.textContent = quantityNumber;
      }
    })


    quantity.appendChild(minusBtn);
    quantity.appendChild(quantityDisplay);
    quantity.appendChild(plusBtn);
    
    const priceContainer = document.createElement('span');
    priceContainer.classList.add('text-red-500', 'text-xl', 'font-bold', 'sm:text-base', 'order-1');
    priceContainer.textContent = itemPrice;
    containerPriceQuantity.appendChild(priceContainer);


    //free shipping details to dito
    const freeShppingDetails = document.createElement('span');
    freeShppingDetails.classList.add('text-sm', 'sm:text-[.6rem]', 'sm:w-3/5');
    freeShppingDetails.innerHTML = '<i class="fa-solid fa-truck-fast text-green-700"></i> Enjoy low to free shipping!';
    itemDetailsContainer.appendChild(freeShppingDetails);


    // delete button funtion
    const deleteItem = document.createElement('span');
    deleteItem.innerHTML = '<i class="fa-solid fa-trash-can absolute top-2 right-2 text-green-600 hover:scale-125 transition text-xl sm:text-base"></i>';
    itemDetailsContainer.appendChild(deleteItem);

    deleteItem.addEventListener('click', ()=>{
      minusCountPerClick();
      itemContainer.classList.add('hidden');
      button.style.pointerEvents = 'auto';
      button.style.opacity = '1';  
    })

    const checkoutBtn = document.getElementById('checkout');
    const checkoutAllBtn = document.getElementById('checkoutall');
    
   
    checkoutAllBtn.addEventListener('click', ()=>{
      itemContainer.classList.add('hidden');
      button.style.pointerEvents = 'auto';
      button.style.opacity = '1';  
      countDisplay = 0;
      cartNumDisplay.textContent = countDisplay;
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

function minusCountPerClick() {
  if(countDisplay > 0){
    countDisplay --;
    cartNumDisplay.textContent = countDisplay;
  }
}

document.querySelectorAll('#add-to-cart').forEach(button =>{
  button.addEventListener('click', countPerClick);
})