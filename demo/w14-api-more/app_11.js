const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('data', data.meals);
    displayItems(data.meals);
  } catch (error) {
    console.error(error);
  }
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { strMeal } = item;
      return `<p>${strMeal}</p>`;
    })
    .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
