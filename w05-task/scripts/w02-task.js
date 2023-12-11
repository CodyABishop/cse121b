/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Cody Bishop';

let currentYear = new Date().getFullYear();

let profilePicture = 'images/cody_bishop.png';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = '<strong>'+fullName+'</strong>';

yearElement.innerHTML = currentYear;

imageElement.setAttribute ('src', profilePicture);

imageElement.setAttribute('alt', 'Profile Image of ' + fullName);


/* Step 5 - Array */

let favouriteFood = ['Cereal', 'Pasta', 'Pizza'];

foodElement.innerHTML = favouriteFood;

let additionalFavouriteFood = 'Chicken Quesadilla';

favouriteFood.push(additionalFavouriteFood);

foodElement.innerHTML += `<br>${favouriteFood}`

favouriteFood.shift();

foodElement.innerHTML += `<br>${favouriteFood}`

favouriteFood.pop();

foodElement.innerHTML += `<br>${favouriteFood}`





