// const categoriesList = document.querySelector('#categories');
// console.log('Number of categories:', categoriesList.children.length);

// const itemsList = document.querySelectorAll('#categories .item');
// console.log(itemsList)
// itemsList.forEach(item => {
//     const categoryTitle = item.querySelector('h2').textContent;
//     const categoryItems = item.querySelectorAll('ul li').length;
//     console.log('Category:', categoryTitle, );
//     console.log('Elements:', categoryItems);

// });

//2nd method
const list = document.querySelector('#categories');
console.log('Number of categories:', list.children.length );
[...list.children].forEach(item => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements', item.lastElementChild.children.length)
});


