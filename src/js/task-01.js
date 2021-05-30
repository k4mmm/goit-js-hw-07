
const ref= document.querySelectorAll('li.item');

function getCategoriesCount() {
    console.log(`В списке ${ref.length} категории.`);
}

function getCategegories() {
    ref.forEach(element => {
        console.log(`Категория: ${element.firstElementChild.textContent}`);
        console.log(`Количество элементов: ${element.lastElementChild.children.length}`);
    });
    
}

getCategoriesCount();

getCategegories();
