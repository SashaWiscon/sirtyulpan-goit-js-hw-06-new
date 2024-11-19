const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const itemsList = document.querySelector('ul#ingredients');

const elements = ingredients.map(element =>{
  const itemEl = document.createElement('li');
  itemEl.textContent = element;
  itemEl.classList.add('item');
  // itemsList.appendChild(itemEl);
  return itemEl;
}
)
itemsList.append(...elements);

// console.log("this is item list",itemsList);
