// FORM VALIDATION
const form = document.getElementById('formulario');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const message = document.getElementById('message');
const ok = document.getElementById('ok');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    checkInputs();
});

function checkInputs(){
    const nameValue = name.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if(nameValue === ''){
        setErrorFor(name, 'Ingrese el nombre');
    } else{
        setSuccessFor(name);
    }

    if(surnameValue === ''){
        setErrorFor(surname, 'Ingrese el apellido');
    } else{
        setSuccessFor(surname);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Ingrese el email');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email no válido')
    }else{
        setSuccessFor(email);
    }

    if(messageValue === ''){
        setErrorFor(message, 'Ingrese el mensaje');
    } else{
        setSuccessFor(message);
    }

    if(nameValue !== '' && surnameValue !== '' && emailValue !== '' && messageValue !== ''){
        setSuccessMsg(ok);
    }
}

function setErrorFor(input, mensaje){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    
    small.innerText = mensaje;
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = 'ok success';
}

function isEmail(email){
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
}
// ---    ---    ---

// --- NAVBAR ---

const hamburguer = document.querySelector('.header .nav-bar .nav-list .hamburguer');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburguer.onclick = function(){
    hamburguer.classList.toggle('active')
    mobile_menu.classList.toggle('active')
}

menu_item.forEach(item => {
    item.onclick = function(){
        hamburguer.classList.toggle('active')
        mobile_menu.classList.toggle('active')
    }
})
// }


 