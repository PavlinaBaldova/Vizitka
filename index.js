'use strict';

console.log('kuk');

const Card = () => {
  const mainContent = document.createElement('main');
  mainContent.className = 'kontejner';
  mainContent.innerHTML = `
<div class="kontejner">
<div class="content">
  <img
    class="photo"
    src="images/foto-oriznute.jpg"
    alt="foto Pavlíny Baldové"
  />
  <div class="kontakty">
    <h1 class="name">Pavlína Baldová</h1>
  </div>
  <div class="icons">
  <a class="linkedin__link" href= "https://www.linkedin.com/in/pavlinabaldova" target=_blank>
    <img
      class="lindkin"
      src="images/LI-In-Bug.png"
      alt="Odkaz na Lindkin profil"
    />
    <a/>
   <a class="github__link" href= "https://github.com/PavlinaBaldova" target=_blank>
    <img
      class="gitHub"
      src="images/GitHub-Mark-Light-64px.png"
      alt="Odkaz na GitHub profil"
    />
<a/>

  </div>
  <p class="story">Story</p>
</div>
</div>
`;
  return mainContent;
};

document.querySelector('#app').appendChild(Card());
