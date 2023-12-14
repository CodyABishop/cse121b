/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
	temples.forEach(temple => {
		let articleElement = document.createElement("article");
		let h3Element =  document.createElement("h3");	
		h3Element.textContent = temple.templeName;
		let imageElement =  document.createElement("img");	
		imageElement.setAttribute('src', temple.imageUrl);
		imageElement.setAttribute('alt', temple.Location);
		articleElement.appendChild(h3Element);
		articleElement.appendChild(imageElement);
		templesElement.appendChild(articleElement);
	});
};



/* async getTemples Function using fetch()*/
const getTemples = async () => {
	const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
	templeList = await response.json();
	displayTemples(templeList);
};

/* reset Function */
function reset(){
	templesElement.innerHTML = '';	
};

/* sortBy Function */
function sortBy(temples) {
  filter = document.getElementById('sortBy').value;
  let sortedList = [];
  reset();
  switch(filter){
	  case "utah": 
		sortedList = templeList.filter((a) => a.location.includes("Utah"));
		break;
	  case "notutah" :
		sortedList = templeList.filter((a) => !a.location.includes("Utah"));
		break;
	  case "older":
		let temp = new Date(1950, 0, 1);
		sortedList = templeList.filter((a) => new Date(a.dedicated) < temp);
		break;
	  case "all":
	    sortedList = templeList;
		break;
	default:
	    sortedList = templeList;
		break;
  };
  displayTemples(sortedList);
}




/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });
getTemples();