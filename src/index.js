import './styles.css';
import menuItem from './menu.json';
import galerryItem from './templates/items.hbs';

const menuContainer = document.querySelector('.js-menu');

const cardMarkup = createMenuItemCards(menuItem);

menuContainer.insertAdjacentHTML('beforeend', cardMarkup);

function createMenuItemCards(menuItem) {
  return menuItem.map(galerryItem).join('');
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

toggle.addEventListener('change', changeTheme);

const valueOfLocalStorage = localStorage.getItem('Theme');
if (valueOfLocalStorage === Theme.DARK) {
  body.classList.add(Theme.DARK);
  body.classList.remove(Theme.LIGHT);
  // add checked
  toggle.checked = true;
}

function changeTheme(event) {
  if (localStorage.getItem('Theme') === Theme.DARK) {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  } else {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  }
}
