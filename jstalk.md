# Intro
 * Who am I
    
    Hello my name is Hristiyan, im Javascript enthusiast, probably like most of you guys (reading this/ present here). Right now I'm primary using Angular, but I also have some experience with React, different js libraries and Node. Overall in the past year and a half i've been all around the js ecosystem, having fun with various libraries, frameworks and stuff.

 * What is this talk about

    Today I'm standing here, in front of you, wanting to share some of the knowledge i've gained along my way so far in the js world, hoping that i will help some of you to find the answer to the anciet js question 'What is `this`?'  So 'Lets talk about `this`' and define what is `this` in js. 


 * Identigiyng thre problem of the topic

    The main problem whit defining `this` and what exactly is `this` for most new js developers (which usualy have some OOP language background, for example like C#) comes from the fact that they belive `this` points to the class in which `this` is used, in other words `this` points to itslef.
    And that way of thinking is mostly right as long as we dont add some function calls left and right in the mix, and the `this` keyword magically becomes something like `undefined`, `window` or `module`` (module is in node) or whatever.  In  other words the fun part starts here. This will be mostly a demo based talk, so i will appriciate some help if the demo goes south :D


# Main topic
 * What is `this` in js and how we usualy use it

      * Open basic class creator
 
      Let see few different ways to create a class, which in our case will be some object, that is holding some drink, and that class will have a method, which will log our object is drinking

  `
  // Explicitly
  let xapu = {
  drink: 'beer',
  whatDoIDrink: function () {
        console.log(this.drink)
        }
  }

  xapu.whatDoIDrink()

  // Using class
  class JsPerson {
  constructor (drink) {
    this.drink = drink
  }
  whatDoIDrink (params) {
    console.log(this.drink)
  }
}

let pesho = new JsPerson('vodka')

pesho.whatDoIDrink()

// Function

function functionDrinker (drink) {
  
  function whatDoIDrink () {
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




>>>>>>>>>>
  beer
  vodka
  `
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