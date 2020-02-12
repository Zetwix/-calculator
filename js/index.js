const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
    .forEach ( button => button.addEventListener('click', digitPresed));
    function rest(){
        if ( display.value === 0)
        display.value = button.addEventListener('click', digitPresed);
    }

function digitPresed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
    .forEach ( button => button.addEventListener('click', opersPresed));
    

function opersPresed(ev) {
    display.value += ev.target.innerText;
    if(value.split('')[value.length]==='+'||'-'||'/'||'*')
    display.value = false;
}

document.querySelector('.eq').addEventListener('click', eqPresed);

function eqPresed() {
    display.value = eval(display.value);
}



document.querySelector('.pow').addEventListener('click', doro);
function doro() {
    display.value *= display.value;
    eval(display.value);
}


document.querySelector('.delete').addEventListener('click', deleted);
    function deleted() {
        display.value = "";
    }

