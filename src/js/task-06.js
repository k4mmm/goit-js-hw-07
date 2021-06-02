const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', inputValidation);

function inputValidation(event) {
  console.log(event.target.dataset.length);
  console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length == event.target.dataset.length) {
  inputRef.classList.add('valid') || inputRef.classList.remove('invalid');
  } else
  inputRef.classList.add('invalid') || inputRef.classList.remove('valid');
};

// const inputRef = document.querySelector('#validation-input');

// inputRef.addEventListener('blur', () => {
//     if (inputRef.value.length > inputRef.dataset.length) {
//       inputRef.classList.add('invalid') || inputRef.classList.remove('valid');
//     } else
//       inputRef.classList.add('valid') || inputRef.classList.remove('invalid')
// });

