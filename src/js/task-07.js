const textRef = document.querySelector('#text');
const rangeRef = document.querySelector('#font-size-control');
console.log(textRef.style)

rangeRef.addEventListener('input', () => {
    textRef.style.fontSize = `${ rangeRef.value }px`;
})