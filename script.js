/** 
* @constant {HTMLElement} 
* @type {HTMLElement}
*/

const root = document.documentElement;

/**
 * @constant {HTMLImageElement}
 * @type {Object}
 */

const avatar = document.querySelector(".profile__img");

/**
 * Changes the page theme between dark and light
 * @return {void}
 */

function changeTheme() {
  root.classList.toggle("light");
  changePicture();
}

/**
 Changes the Picture according to the page theme
 * @return {void}
 */

function changePicture() {
  if (root.classList.contains("light")) {
    avatar.src = "./assets/avatar-light.png";
    avatar.alt = "Foto de Victor usando camiseta branca e óculos escuros";
  } else {
    avatar.src = "./assets/avatar.png";
    avatar.alt = "Foto de Victor usando camiseta preta e óculos";
  }
}

/**
 * Changes the picture to a cartoon version on mouse over and returns to default on mouse out
 * @return {void}
 */

function cartoonImage() {
  if (root.classList.contains("light")) {
    avatar.src = "./assets/avatar-cartoon-light.jpg";
    avatar.alt = "Foto de Victor cartoonizada usando óculos escuros";
  } else {
    avatar.src = "./assets/avatar-cartoon.jpg";
    avatar.alt = "Foto de Victor cartoonizada";
  }
}
