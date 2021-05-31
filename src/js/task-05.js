const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');


inputRef.addEventListener('input', makeName);

function makeName(event) {
    if (event.currentTarget.value.trim() === '') {
        nameRef.textContent = 'незнакомец'
    } else
nameRef.textContent = event.currentTarget.value
};




