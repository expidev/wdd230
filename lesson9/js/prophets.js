const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table (jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthdate = document.createElement('span')
    let birthplace = document.createElement('span')
    let portrait = document.createElement('img');
    let suffix;
    h2.textContent = `${prophet.name} ${prophet.lastname}`; 
    birthplace.textContent = `Place of birth: ${element.birthplace}`;
    portrait.setAttribute('src', prophet.imageurl);
    switch (prophet.order[prophet.order.length - 1]){
      case 1:
        suffix = "st";
        break;
      case 2:
        suffix = 'nd';
      default:
        suffix = 'th';
    }
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${suffix} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
    card.appendChild(h2);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);

    document.querySelector('div.cards').appendChild(card);
};