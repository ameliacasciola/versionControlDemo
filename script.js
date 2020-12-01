//EXERCISE 1 ************************************************************************

var foods = ["potatoes", "chocolate", "garlic", "onions", "french fries", "mushrooms"]

foods.splice(2,1)
console.log(foods)

foods.shift()
console.log(foods)

foods.pop()
console.log(foods)

foods.unshift("carrots")
console.log(foods)

foods.push("peas")
console.log(foods)


//EXERCISE 2 ************************************************************************

var prices = [19, 31, 17, 22, 99, 12, 35, 46]

var temp = prices.indexOf(17)
console.log(temp)

temp = prices.includes(50)
console.log(temp)

function getBigPrices(price) {
	return price>30;
}
var bigPrices = prices.filter(getBigPrices)
console.log(bigPrices)


//EXERCISE 3 ************************************************************************

var ages = [5,24,10,8,11,14,98]
var moreAges = [11,12,13]

console.log(ages.reverse())

function compare(a, b) {
	return b - a
}
ages.sort(compare)
console.log(ages)

var allTheAges = ages.concat(moreAges)
console.log(allTheAges)


//EXERCISE 4 ************************************************************************

var nums = [-9,4,-7,2,6,-4,7,-1,4,1,2,0,-2]

var i;
for(i=0; i<nums.length; i++) {
	if(nums[i] < 0) {
		console.log(nums[i])
	}
}

//REVIEW EXERCISE ************************************************************************
var foodsILike=[]

// create variables for the html elements with ids: "inputFood", "foodList" and "addButton"
var inputFood = document.getElementById('inputFood')
var foodsList = document.getElementById('foodsList')
var addButton = document.getElementById('addButton')

// create a function which:
// adds the input from the text box to the foodsILike array
// sets the innerHTML of the "foodList" variable to the foodsILike array
function pushFood() {
	foodsILike.push(inputFood.value)
	foodsList.innerHTML = foodsILike
}

//add an event listener to the button which calls the above function on each click
addButton.addEventListener('click', pushFood)
