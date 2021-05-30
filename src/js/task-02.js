const ref = document.querySelector('#ingredients');
const ingradientsList = [];
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


function addListElement(ingredients) {
    ingredients.map((item) => {
        const element = document.createElement('li');
        element.textContent = item;
        ingradientsList.push(element)
    });
    ref.append(...ingradientsList);
}


addListElement(ingredients)

