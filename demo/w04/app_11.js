const menu = [
    {
        id: 1,
        title: "bamburger",
        category: 'breakfast',
        price: 11.49,
        img: './images/my-1.jpg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam'
    },
    {
        id: 2,
        title: "steak",
        category: 'breakfast',
        price: 16.99,
        img: './images/my-2.jpg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam'
    },
    {
        id: 3,
        title: "salmon",
        category: 'breakfast',
        price: 12.79,
        img: './images/my-3.jpg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam'
    },
    {
        id: 4,
        title: "buttermilk pancakes",
        category: 'breakfast',
        price: 15.59,
        img: './images/item-1.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam'
    },
    {
        id: 5,
        title: "dinner double",
        category: 'dinner',
        price: 13.99,
        img: './images/item-2.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam'
    },
    {
        id: 6,
        title: "godzilla milkshake",
        category: 'shakes',
        price: 13.99,
        img: './images/item-3.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam'
    },
];

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('btn-container');

const displayMenuItems = (menu) => {
    let displayMenu = menu.map( (item) => {
        return `
        <article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>
        `
    });
    console.log('displayMenu before join', displayMenu);
    displayMenu = displayMenu.join('');
    console.log('displayMenu after join', displayMenu);
    sectionCenter.innerHTML = displayMenu;
}

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
});



