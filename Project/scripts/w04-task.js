/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
	name: 'Cody Bishop',
	photo: 'images/cody_bishop.png',
	favoriteFoods: [
		'Pizza',
		'Chicken Quesadilla',
		'Cereal'
	],
	hobbies: [
		'Games',
		'Reading',
		'Writing'
	],
	placesLived: [],
};

/* Populate Profile Object with placesLive objects */


myProfile.placesLived.push(
  {
    place: 'Portola, CA',
    length: '11 years'
  }
);
myProfile.placesLived.push(
  {
    place: 'Genola, UT',
    length: '11 years'
  }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
  let ul = document.createElement('ul');
  ul.textContent = hobby;
  document.querySelector('#hobbies').appendChild(ul);
});


/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
  let dt = document.createElement('dt');
  let dd = document.createElement('dd');
  dt.textContent = placeLived.place;
  dd.textContent = placeLived.length;
  document.querySelector('#places-lived').appendChild(dt);
  document.querySelector('#places-lived').appendChild(dd);
});

