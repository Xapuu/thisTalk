# Intro
 * Who am I
    
    Hello my name is Hristiyan, im Javascript enthusiast, probably like most of you guys (reading this/ present here). Right now I'm primary using Angular, but I also have some experience with React, different js libraries and Node. Overall in the past year and a half I've been all around the js ecosystem, having fun with various libraries, frameworks and stuff.

 * What is this talk about

    Today I'm standing here, in front of you, wanting to share some of the knowledge I've gained along my way so far in the js world, hoping that I will help some of you to find the answer to the ancient js question 'What is `this`?'  So 'Lets talk about `this`' and demystify  `this` in js. 


 * Identifying the problem

    The main problem with defining `this` and what exactly is `this` for most new js developers (which usually have some OOP language background, for example like C#) comes from the fact that they believe `this` points to the class in which `this` is defined, in other words `this`  to itself.

# Main topic
 * What is `this` in js and how we usually use it

      * Open basic class creator
 
      Let see few different ways to create a class, which in our case will that will represent some kind of a person, that is holding some drink, and that class will have a method, which will log out what the person is drinking

  ``` javascript
  // Explicitly
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

>>>>>>>>>>
beer
vodka
gin
tequila
  ```
  So here without any confusion we we are able to log our attendats drink, which is the cup that he is holding.
  () 




    So now lets explore the different posibilities for the `this` keyword.
    (Disclaimer we wont dig too much in object creation)


 * Diferences between function context and function call site
 * Why it is usefull to use this - pros and cons
 * Overview of call and apply
 * Example in node
 * Example in vanila js with the DOM
 * Example with React
 * Example in Angular
 * Arrow function