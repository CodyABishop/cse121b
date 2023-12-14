//Final Project
//Script to power the news display.

/* Declare and initialize global variables */
const articleContainer = document.querySelector(`#wsjArticles`);
let opinionNews = [];
let worldNews = [];
let techNews = [];
let articleList = [];

/* async displayNews Function */
const displayNews = (newsArticle) => {
	newsArticle.forEach(newsArticle => {
		//Create an article to hold the article
		let articleElement = document.createElement(`article`);
		//Title displayed in an H3 for consistency with rest of site pages.
		let h3Element =  document.createElement(`h3`);	
		h3Element.textContent = newsArticle.title;
		//Description in p object.
		let pElement =  document.createElement(`p`);	
		pElement.textContent = newsArticle.description;
		//Date in a second p object.
		let p2Element =  document.createElement(`p`);	
		let datePub = new Date(newsArticle.published).toString();
		p2Element.textContent = `Date Published: ${datePub}`
		p2Element.setAttribute(`class`,`datePub`);
		//Link to site displayed in an anchor element.
		let aElement = document.createElement(`a`);
		aElement.setAttribute(`href`,newsArticle.url);
		aElement.innerHTML = `View on WSJ Website`;
		aElement.setAttribute(`class`,`siteLink`);
		//Constructing the article
		articleElement.appendChild(h3Element); //H3 element title appended first.
		articleElement.appendChild(pElement); //p element description follows after.
		articleElement.appendChild(p2Element); //Date published
		articleElement.appendChild(aElement); //Link to the site.
		articleContainer.appendChild(articleElement); //Append the new article to the article container.
	});	
};



// Async get function using fetch
const getNews = async () => {
	const responseOpinion = await fetch(`https://rss-to-json-serverless-api.vercel.app/api?feedURL=https://feeds.a.dj.com/rss/RSSOpinion.xml`);
	opinionNews = await responseOpinion.json();
	
	const responseWorld = await fetch(`https://rss-to-json-serverless-api.vercel.app/api?feedURL=https://feeds.a.dj.com/rss/RSSWorldNews.xml`);
	worldNews = await responseWorld.json();
	
	const responseTech = await fetch(`https://rss-to-json-serverless-api.vercel.app/api?feedURL=https://feeds.a.dj.com/rss/RSSWSJD.xml`);
	techNews = await responseTech.json();
	
	//Default to all items in one list
	articleList = opinionNews.items.concat(worldNews.items);
	articleList = articleList.concat(techNews.items);
	sortNews();
};

//Resets the aricle listing
function reset(){
	articleContainer.innerHTML = ``;	
};

//Displays the articles based on filter selection
function sortNews() {
  filter = document.getElementById(`newsSort`).value;
  reset();
  switch(filter){ //Filters
	  case `opinion`:  //First 3 cases just set the article list to a given category.
		articleList = opinionNews.items;
		break;
	  case `world` :
		articleList = worldNews.items;
		break;
	  case `tech`:
		articleList = techNews.items;
		break;
	  case `all`: //Last and default cases concat all articles together
	    articleList = opinionNews.items.concat(worldNews.items);
	    articleList = articleList.concat(techNews.items);
		break;
	default:
	    articleList = opinionNews.items.concat(worldNews.items);
	    articleList = articleList.concat(techNews.items);
		break;
  };
	// Ordering forced after sort to properly merge articles shown.
	orderNews();
}



/* orderNews Function */
function orderNews() {
  filter = document.getElementById(`newsOrder`).value;
  let sortedList = [];
  reset();
  if (filter == `descending`){ //Simple descending sort.
	  sortedList = articleList.sort(function(a,b) {return a.published<b.published ? 1 : -1});
  } else { //Defaults to ascending unless descending specified
	  sortedList = articleList.sort(function(a,b) {return a.published>b.published ? 1 : -1});
  };
  articleList = sortedList; //Sets the sorted list to the article list
  displayNews(articleList); //Displays the article list updated.
}

/* Event Listener */
document.querySelector(`#newsSort`).addEventListener(`change`, () => { sortNews() }); //Checks for sort changes
document.querySelector(`#newsOrder`).addEventListener(`change`, () => { orderNews() }); //Checks for ordering changes
getNews();