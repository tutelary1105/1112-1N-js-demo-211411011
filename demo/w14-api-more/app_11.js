const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  const url = 'https://api.mojang.com/users/profiles/minecraft/jeb_';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('data', data.jeb_);
    displayItems(data.jeb_);
  } catch (error) {
    console.error(error);
  }
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { strPlayer } = item;
      return `<p>${strPlayer}</p>`;
    })
    .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
