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
  So here without any confusion we we are able to call some function/methods log out some drinks, holed by different attendants and if that was everything about this, no one would ever have any trouble understanding it. Now let's see where the drama comes from using `this` and what's the difference between callSite and declarationSite/context.  
  The root of the problem is that in JS we can easily pass function all around the place without thinking too much about it, unlike C# where you must have some knowledge about delegates or java  where you must use some utilities, which is pretty cool but in the common case, the new JS developers have some prior programming experience and are learning js on the move as they proceed with their assigned tasks. Lets see few examples of the things I'm talking about

  // TODO create REACT && ANGULAR && NODE simple demos
  // involve some counter in react and some service passing counter angular
  // for node pass some data back and forth in modules

 * Diferences between function context and function call site

  // TODO show the difference by using call apply and bind, in order to show that we can pass context ot the functions 

 * Why it is usefull to use this - pros and cons

  // Explain the pros (we can use one method on many functions, this may be part of the call and apply demo)

 * Overview of call and apply


// in the TODO up
 * Example in node
 * Example in vanila js with the DOM
 * Example with React
 * Example in Angular
//

 * Arrow function
// TODO refactor the demos with arrow functions