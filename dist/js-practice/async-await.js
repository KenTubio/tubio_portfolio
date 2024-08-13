const url = "https://api.thecatapi.com/v1/images/0XYvRd7oD";
const display = document.getElementById("display");

async function myApi() {
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log(jsonData);

  const img = document.createElement("img");
  img.src = jsonData.url;

  const description = document.createElement("span");
  description.textContent = jsonData.breeds[0].description + jsonData.breeds[0].name;

  display.appendChild(description);
  display.appendChild(img);
}

myApi();

// let storeItems = {
//   Bag: ["totebag", "slingbag", "backpack"],
//   Shoes: ["nike", "adidas", "anta"],
//   Laptop: ["realme", "lenovo", "acer"],
// };

// let kennethShopOpen = true;

// function orderTime (){
//   return new Promise((accept, reject)=>{
//     if(kennethShopOpen){
//       setTimeout(accept, 2000);
//     }else{
//       setTimeout(()=>{
//         reject(console.log('My shop is close.'));
//       }, 3000)
//     }
//   });
// }

// async function orderProcess() {
//   console.log('--------------Welcome to our shop!-----------')
//   try{
//     await orderTime(2000)
//     console.log(`Customer ordered ${storeItems.Shoes[2]}`)

//     await orderTime(3000)
//     console.log('Prepairing order...')

//     await orderTime(4000)
//     console.log('Thanks for ordering!!')
//   }catch(error){
//     console.log('Sorry something is wrong... comeback again later..')
//   }
// }

// orderProcess();

// function buyItem(bagName, shoeBrand, laptopBrand, items, readyItem) {
//   console.log("Waiting order...");
//   console.log("Please wait\n");
//   setTimeout(() => {
//     console.log(
//       `Customer Kenneth buy ${storeItems.Bag[bagName]}, and please prepare it for the customer. TY... \n`
//     );
//     prepareItem(bagName);
//   }, 3000);
// }

// function prepareItem(bagName) {
//   console.log("Prepairing item...");
//   setTimeout(() => {
//     console.log(`Item, ${storeItems.Bag[bagName]}, is being prepaired! \n`);

//     setTimeout(() => {
//       console.log("Giving the item to the counter...");
//       setTimeout(() => {
//         console.log(
//           `Customer added more items.\n Items: ${storeItems.Shoes[0]} and ${storeItems.Laptop[1]}`
//         );

//          setTimeout(()=>{

//             isAvailable()

//             .then((message) => {
//             console.log(message);
//             })
//             .then(()=>{
//                 setTimeout(()=>{
//                     console.log('Preparing order...')
//                 }, 2000);
//             })
//             .then(()=>{
//                 setTimeout(()=>{
//                     console.log('Thank you for buying!')
//                 }, 5000);
//             })

//             .catch((reject) => {
//             console.log(reject);
//             })

//             .finally(()=>{
//                 console.log('WHAT A GREAT DAY TO BE ALIVE!')
//             });
//         }, 4000);

//       }, 2000);
//     }, 2000);
//   }, 3000);
// }

// buyItem(1, prepareItem);

// function isAvailable (){
//     return new Promise((resolve, reject) => {
//         if (storeItems.Shoes[0] && storeItems.Laptop[1]) {
//           resolve('Items is available! Proceed.\n');
//         } else {
//           reject("Sorry, items not available.\n");
//         }
//     });
// }
