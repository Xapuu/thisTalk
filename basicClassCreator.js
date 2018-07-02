let Xapu = {
  drink: 'beer',
  whatDoIDrink: function () {
    console.log(this.drink)
  },
  whatArrowIdrink: () => {
    console.log(this.drink)
  }
}

Xapu.whatDoIDrink()

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

function demo (drink) {
  this.drink = drink
  this.whatDoIDrink = function () {
    console.log(this.drink)
  }
}

let sasho = new demo('gin')
let gosho = new demo('rakia')

sasho.whatDoIDrink()
gosho.whatDoIDrink()