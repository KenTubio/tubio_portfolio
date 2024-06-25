const revealBtn = document.querySelector('.reveal');
const hiddenContent = document.querySelector('.hidden-nav');
const imghide = document.querySelector('.hide-img')

function revealContent() {
    if(hiddenContent.classList.contains('lg:hidden')){
        hiddenContent.classList.remove('lg:hidden');
    }else{
        hiddenContent.classList.add('lg:hidden');
    }
}
revealBtn.addEventListener('click', revealContent);


function hideImg() {
    if(imghide.classList.contains('lg:hidden')){
        imghide.classList.remove('lg:hidden');
    }else{
        imghide.classList.add('lg:hidden');
    }
}
revealBtn.addEventListener('click', hideImg);