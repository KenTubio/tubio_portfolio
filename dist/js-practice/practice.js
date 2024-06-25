// //dynamic yung javascript
// // ganito yung paggawa ng object, kailangan ng semicolon sa last
// let myself = {
//     name: ('kenneth'),
//     grade: 75
// };

// //technically yung array pala ay object
// let myGrades = [75, 80, 90, 95, 99];
// myGrades[5]= true;
// myGrades[6]= ('pogi ko');

// // console.log(myself);
// // console.log(myGrades);
// // console.log(myGrades.length);

// //ganito yung function, mas ok kung may parameter sya(like, name or any), di na sya kailangan ng semi colon sa last ng function
// function merryChristmas(name) {
//     console.log('merry christmas ' + name )
// }
// merryChristmas('kenneth');


// function add(firstNum, secondNum) {
//     firstNum = 10;
//     secondNum = 10;

//     let calc = firstNum + secondNum;
//     return calc;
// }
// console.log(add())



//dom manipulation practice
// const greeting = document.getElementById('greet');
// console.log(greeting);

// const greet = document.querySelector('h1');
// console.log(greet);


// const mainContainer = document.querySelector('main');
// const heading = document.createElement('h1');

// mainContainer.append(heading)

// heading.innerText = 'hi';

// heading.setAttribute('id', 'greet');


const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
    if(hiddenContent.classList.contains('hidden')){
        hiddenContent.classList.remove('hidden');
    }else{
        hiddenContent.classList.add('hidden');
    }
}

revealBtn.addEventListener('click', revealContent);



