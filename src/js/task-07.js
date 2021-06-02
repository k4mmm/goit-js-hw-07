const textRef = document.querySelector('#text');
const rangeRef = document.querySelector('#font-size-control');
textRef.style.fontSize = `${rangeRef.value}px`;

rangeRef.addEventListener('input', () => {
    textRef.style.fontSize = `${ rangeRef.value }px`;
})