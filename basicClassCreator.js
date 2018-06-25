let Ivan = {
  drink: 'beer',
  whatDoIDrink: function () {
    console.log(this.drink)
  },
  whatArrowIdrink: () => {
    console.log(this.drink)
  }
}

class JsAtendat {
  constructor (drink) {
    this.drink = drink
  }
  whatDoIDrink (params) {
    console.log(this.drink)
  }
}

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

// console.log('HandMade')
// this.drink = 'vodka'
// Ivan.whatDoIDrink()
// Ivan.whatArrowIdrink()

// console.log('class creator')
// let Pesho = new JsAtendat('Vodka')

// Pesho.whatDoIDrink()

// console.log('functionCreated')
let Gosho = functionDrinker('Rakia')
Gosho.whatDoIDrink()
Gosho.whatArrow()

let demo1 = Gosho.whatDoIDrink
let demo2 = Gosho.whatArrow

demo1()
demo2()
