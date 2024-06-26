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

revealBtn.addEventListener('click', () =>{
    hiddenContent.classList.toggle('hidden');
})




// document.querySelector('.btn-click').addEventListener('click', function(e){
    
//     const pindot = e.target;

//     if(pindot.matches('button')){
//         pindot.style.backgroundColor = 'red'
//     }
// });

let sinasabi = document.querySelector('.sinasabi');
let nagsabi = document.querySelector('.nagsabi');
let pindot = document.querySelector('.btn-pindot');

const mgaQuotes = [{
    sinasabi: 'pogi ko',
    nagsabi: 'talagang pogi'
},
{
    sinasabi: 'awdawdadwa',
    nagsabi: 'awdawdawdd'
},
];

pindot.addEventListener('click', function(){
    let random = Math.floor(Math.random() * mgaQuotes.length);


    sinasabi.innerText = mgaQuotes[random].sinasabi;
    nagsabi.innerText = mgaQuotes[random].nagsabi;
})





const click = document.querySelector('.click');
const popup = document.querySelector('#pop');
const closez = document.querySelector('.ekis');

click.addEventListener('click', function(){
    popup.style.display = 'block';
});

closez.addEventListener('click', function(){
    popup.style.display = 'none';
});


window.addEventListener('click', function(e){
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

const btnReveal = document.querySelectorAll('.reveal');
const hidden = document.querySelectorAll('.hidden-text');
const tago1 = document.querySelectorAll('.tago1');
const tago2 = document.querySelectorAll('.tago2');


for (let i = 0; i < btnReveal.length; i++) {
    btnReveal[i].addEventListener('click', () => {
        hidden[i].classList.toggle('hidden');
    });
}

for(let i = 0; i < btnReveal.length; i++){
    btnReveal[i].addEventListener('click', ()=>{
        tago1[i].classList.toggle('hidden');
        tago2[i].classList.toggle('hidden');
    })
}


//timer to dito
const play = document.querySelector('.play');
const reset = document.querySelector('.reset');

let seconds = 0;
let minutes = 0;
let hours = 0;
let start = null;

function timer (){
    seconds ++

    if(seconds / 60 === 1){
        seconds = 0;
        minutes ++;
        if(minutes / 60 === 1){
            minutes = 0;
            hours ++;
        }
    }

    let secondsDisplay = seconds;
    let minutesDisplay = minutes;
    let hoursDisplay = hours;

    if(seconds < 10){
        secondsDisplay = '0' + seconds.toString();
    }else{
        secondsDisplay = seconds;
    }
    if(minutes < 10){
        minutesDisplay = '0' + minutes.toString();
    }else{
        minutesDisplay = minutes;
    }
    if(hours < 10){
        hoursDisplay = '0' + hours.toString();
    }else{
        hoursDisplay = hours;
    }

    document.querySelector('.timer').innerText = hoursDisplay + ':' + minutesDisplay + ':' + secondsDisplay;
}

play.addEventListener('click', ()=>{
    if(!start){
        start = window.setInterval(timer, 1);
    }else{
        clearInterval(start);
        start = null;
    }
})

reset.addEventListener('click', ()=>{
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.querySelector('.timer').innerText = '00:00:00';
})
