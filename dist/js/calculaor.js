
const display = document.getElementById('display-area');

function appendToDisplayArea(div){
    display.textContent += div;
}

function clearDisplay(){
    display.textContent = '';
}

function deleteBtn(){
    let currentText = display.textContent;
    display.textContent = currentText.slice(0, -1); 
}

function result (){
    try{
        display.textContent = eval(display.textContent);
    }catch(e){
        display.textContent = 'hays naku';
    }
}

