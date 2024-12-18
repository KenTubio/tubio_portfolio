//toggle the nav responsiveness
const revealBtn = document.querySelector('.reveal');
const revealBtn2 = document.querySelector('.reveal2');
const hiddenContent = document.querySelector('.hidden-nav');
const imghide = document.querySelector('.hide-img');



function toggle (){
    hiddenContent.classList.toggle('lg:hidden');
    imghide.classList.toggle('lg:hidden');
    revealBtn.classList.toggle('lg:hidden');
    revealBtn2.classList.toggle('hidden');
}

revealBtn.addEventListener('click', toggle);
revealBtn2.addEventListener('click', toggle);




//nav link when clicked
const homeLink = document.querySelector('#home-link');
const aboutLink = document.querySelector('#about-link');
const projectsLink = document.querySelector('#project-link');
const contactsLink = document.querySelector('#contacts-link');


function removeToggle (){
    homeLink.classList.remove('before:w-full');
    contactsLink.classList.remove('before:w-full');
    aboutLink.classList.remove('before:w-full');
    projectsLink.classList.remove('before:w-full');
}


homeLink.addEventListener('click', ()=>{
    removeToggle()
    homeLink.classList.toggle('before:w-full');
})

aboutLink.addEventListener('click', ()=>{
    removeToggle()
    aboutLink.classList.toggle('before:w-full');
})

projectsLink.addEventListener('click', ()=>{
    removeToggle()
    projectsLink.classList.toggle('before:w-full');
})

contactsLink.addEventListener('click', ()=>{
    removeToggle()
    contactsLink.classList.toggle('before:w-full');
})



document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

