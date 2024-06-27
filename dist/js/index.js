const revealBtn = document.querySelector('.reveal');
const revealBtn2 = document.querySelector('.reveal2');
const hiddenContent = document.querySelector('.hidden-nav');
const imghide = document.querySelector('.hide-img')


function toggle (){
    hiddenContent.classList.toggle('lg:hidden');
    imghide.classList.toggle('lg:hidden');
    revealBtn.classList.toggle('lg:hidden');
    revealBtn2.classList.toggle('hidden');
}

revealBtn.addEventListener('click', toggle);
revealBtn2.addEventListener('click', toggle);