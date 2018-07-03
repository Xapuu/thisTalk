let xapu = {
	drink: 'beer',
	whatDoIDrink: function () {
		console.log(this.drink)
	}
}


// Using class
class PersonClass {
	constructor(drink) {
		this.drink = drink
	}
	whatDoIDrink() {
		console.log(this.drink)
	}
}

// Function - Old school class

function personFunction(drink) {

	function whatDoIDrink() {
		console.log(this.drink)
	}
	whatArrow = () => {
		console.log(drink)
	}

	return {
		whatDoIDrink,
		whatArrow,
		drink
	}
}

// Function with new keyword

function PersonFunctionNew(drink) {
	this.drink = drink

	this.whatDoIDrink = function () {
		console.log(this.drink)
	}
}
// Let's call them all


xapu.whatDoIDrink()

let pesho = new PersonClass('vodka')
pesho.whatDoIDrink()

let gosho = personFunction('gin')
gosho.whatDoIDrink()

let ivan = new PersonFunctionNew('tequila')
ivan.whatDoIDrink()