const counter = document.querySelector('#counter');

const num = document.querySelector('#value');

let countValue = 0

function decrement() {
    countValue -= 1;
    num.textContent = countValue;
}
function increment() {
    countValue += 1;
    num.textContent = countValue;
}

counter.addEventListener('click', (event) => {
        if (event.target.dataset.action === "decrement") {
        decrement()
    } else if (event.target.dataset.action  === "increment")
        increment()
  
})


