// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Lee Yi Kai',
    job: 'engineer',
    img: 'https://izfkkkxjvqncdvyzzpkv.supabase.co/storage/v1/object/public/demo-11/md_1N_img/211411011.png',
    text: "未來的目標是科技公司裡面的工程師，想了解未曾接觸過，並且不斷的去學習和更新自己的知識，以適應部段變化的技術的市場需求，才能在未來的發展中保持競爭力。",
  },
  {
    id: 2,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 4,
    name: 'peter jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 5,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


let currentItem = 0;

// function showReview() {

// }

const showReview = (person) => {
  const item = reviews[person];
  console.log('item', item);
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}


window.addEventListener('DOMContentLoaded', () => {
  showReview(currentItem);
});

nextBtn.addEventListener('click', () => {
  currentItem++;
  if(currentItem >= reviews.length ) {
    currentItem = 0;
  }
  // console.log('currentItem', reviews[currentItem]);
  showReview(currentItem);
})