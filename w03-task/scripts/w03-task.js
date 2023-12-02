/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

function add (number1, number2) {
	return number1 + number2;
}
/* Function Definition - Add Numbers */
function addNumbers(){
	let addNumber1 = Number(document.querySelector('#add1').value);
	let addNumber2 = Number(document.querySelector('#add2').value);
	document.querySelector('#sum').value = add(addNumber1, addNumber2);  //Sets the value of the output box
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers); //Adds on click

/* Function Expression - Subtract Numbers */
const subtract = function(number1,number2){ //Simplified output form using function expression
	return number1 - number2;	
}

const subtractNumbers = function(){
	let dif_val = subtract(document.getElementById('subtract1').value*1,document.getElementById('subtract2').value*1);
	document.getElementById('difference').value = dif_val;
}

document.getElementById('subtractNumbers').addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1*number2; //Further simplification of arrow functions
let multiplyNumbers = () => { //Uses prior arrow function
	document.getElementById('product').value = multiply(document.getElementById('factor1').value*1,document.getElementById('factor2').value*1);
}
document.getElementById('multiplyNumbers').addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */

let divide = (number1, number2) => number1/number2; //Again arrow function used for conciseness 

let divideNumbers = () => {
	document.getElementById('quotient').value = divide(document.getElementById('dividend').value*1,document.getElementById('divisor').value*1);
}
document.getElementById('divideNumbers').addEventListener("click", divideNumbers);


/* Decision Structure */
let subtotal = Number(document.getElementById('subtotal').value*1) //Gets the subtotal value as a number.
function getTotal(){ 
	if (document.getElementById('member').checked) { //Checks if the discount box is checked
	  total = subtotal - subtotal*0.15; //Fifteen percent discount as instructed
	} else {
	  total = subtotal; //No discount otherwise
	} 
	document.querySelector('#total').textContent = "$" + total.toString();
}
document.getElementById('getTotal').addEventListener("click", getTotal);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]; //Define source array
document.querySelector('#array').textContent = numbersArray; //Set the HTML array element to source array
/* Output Odds Only Array */
function checkOdd(x){
	if (x%2 == 1){
		return x;
	}
}
document.querySelector('#odds').textContent = numbersArray.filter(checkOdd);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
let array_sum = (total,num) => total+num;
document.querySelector('#sumOfArray').textContent = numbersArray.reduce(array_sum);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2)

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
