let Ivan = {
  drink: 'beer',
  whatDoIDrink: function () {
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
    console.log(drink)
  }
  return {
    whatDoIDrink
  }
}

console.log('HandMade')
Ivan.whatDoIDrink()

console.log('class creator')
let Pesho = new JsAtendat('Vodka')

Pesho.whatDoIDrink()

console.log('functionCreated')
let Gosho = functionDrinker('Rakia')
Gosho.whatDoIDrink()
// Gosho.whatDoIDrink.bind({ drink: 'rakia' })()

