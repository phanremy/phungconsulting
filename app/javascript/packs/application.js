import "bootstrap";
import { selectorMenu } from 'plugins/init_selector_menu';


if (document.querySelector('.selector')) {
  selectorMenu();
}

const selectorShow = () => {
  const achievements = document.getElementById('achievements-selector');
  const currentWorks = document.getElementById('current-works-selector');
  const collaborations = document.getElementById('collaborations-selector');
  // const changethis = document.getElementById('changethis-selector');
  const achievementsContainer = document.getElementById('achievements');
  const currentWorksContainer = document.getElementById('current-works');
  const collaborationsContainer = document.getElementById('collaborations');
  // const changethisContainer = document.getElementById('changethis');
  if (achievements && currentWorks && collaborations) {
    achievements.addEventListener('click', (event) => {
      achievements.classList.add('active');
      currentWorks.classList.remove('active');
      collaborations.classList.remove('active');
      // changethis.classList.remove('active');
      achievementsContainer.classList.remove('hidden');
      currentWorksContainer.classList.add('hidden');
      collaborationsContainer.classList.add('hidden');
      // changethisContainer.classList.add('hidden');
    });
    currentWorks.addEventListener('click', (event) => {
      achievements.classList.remove('active');
      currentWorks.classList.add('active');
      collaborations.classList.remove('active');
      achievementsContainer.classList.add('hidden');
      currentWorksContainer.classList.remove('hidden');
      collaborationsContainer.classList.add('hidden');
    });
    collaborations.addEventListener('click', (event) => {
      achievements.classList.remove('active');
      currentWorks.classList.remove('active');
      collaborations.classList.add('active');
      achievementsContainer.classList.add('hidden');
      currentWorksContainer.classList.add('hidden');
      collaborationsContainer.classList.remove('hidden');
    });
    // changethis.addEventListener('click', (event) => {
    //   achievements.classList.remove('active');
    //   changethis.classList.add('active');
    //   achievementsContainer.classList.add('hidden');
    //   changethisContainer.classList.remove('hidden');
    // });
  }
}

selectorShow();

const selectorCarousel = () => {
  const achievements = document.getElementById('achievements-selector');
  const currentWorks = document.getElementById('current-works-selector');
  const collaborations = document.getElementById('collaborations-selector');

  if (achievements && currentWorks && collaborations) {
    setTimeout(function() {
      currentWorks.click();
      setTimeout(function() {
        collaborations.click();
        setTimeout(function() {
          achievements.click();
          },5000 )
        },5000 )
      },5000 )
  }
}

if (document.getElementById('collaborations-selector')) {
  selectorCarousel();
  setInterval(selectorCarousel, 15000);
}
