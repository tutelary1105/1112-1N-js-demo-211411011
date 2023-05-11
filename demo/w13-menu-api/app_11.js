const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

// import { menu } from './data.js'
const url = './api/data.json';

let menu;

const displayMenuItems = (menu) => {
    let displayMenu = menu.map( (item) => {
        return `
        <article class="menu-item">
          <img src=${item.remote_img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.descrip}
            </p>
          </div>
        </article>
        `
    });
    // console.log('displayMenu before join', displayMenu);
    const Menu = displayMenu.join('');
    // console.log('displayMenu after join', Menu);
    sectionCenter.innerHTML = displayMenu;
}

// const buttons = ['all', ...new Set(menu.map((item) => item.category))];

const displayMenuButtons = () => {
    const buttons = ['all', ...new Set(menu.map((item) => item.category))];
    let displayButtons = buttons.map( (button) => {
        return `<button type="button" class="filter-btn" data-id=${button}>${button}</button>`
    });
    // console.log('displayButtons before join', displayButtons);
    const displayButton = displayButtons.join('');
    // console.log('displayButtons after join', displayButton);
    btnContainer.innerHTML = displayButton;

    const filterBtns = document.querySelectorAll('.filter-btn');
    console.log('filterBtns',filterBtns);
    filterBtns.forEach( (btn) => {
      btn.addEventListener('click', (e) => {
        console.log('data-id', e.currentTarget.dataset.id);
        const category = e.currentTarget.dataset.id;
        const filterMenu = menu.filter( (item) => item.category === category);
        if(category === 'all'){
          console.log('all', menu)
          displayMenuItems(menu);
        }else{
          console.log(category, filterMenu);
          displayMenuItems(filterMenu);
        }
      });
    });

};

const fetchData = async () => {
  try{
    const response = await fetch(url);
    const data = response.json();
    console.log('fetch data', data);
    return data;
  }catch(error){
    console.log(error);
  }
}

window.addEventListener('DOMContentLoaded', async () => {
  menu = await fetchData();
  await displayMenuItems(menu);
  await displayMenuButtons();
});