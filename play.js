function drinker (drink) {
  this.drink = drink

  this.whatDoIdrink = function () {
    console.log(this.drink)
  }
  console.log(this.drink)
}

let demo = new drinker('beer')

// demo.whatDoIdrink()
