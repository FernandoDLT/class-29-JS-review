// **********Variables************

// You are getting ready to face Brock for the Boulder Badge.
// You want three pokemon on your team that each have evolved at least once.
// You have bulbasaur which is at level 5 and evolves at level 16,
// caterpie which is at level 1 and evolves at level 7,
// and weedle which is at level 1 and evolves at level 7.
// Create three variables to store the number of rare candies
// each of your pokemon would need to evolve (rare candies increase your level by one).
// Finally, create a fourth variable named totalCandies that sums all the rare candies you would need.

let bulbasaurCandies = 16 - 5
let caterpieCandies = 7 - 1
let weedelCandies = 7 - 1

let totalCandies = bulbasaurCandies + caterpieCandies + weedelCandies

// console.log(totalCandies)

// ******Conditionals And Functions********

// You have a charmander in your party. Charmander can only battle if the temperature
// is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius
// and another fuction that tells you wheither or not charmander can battle

function fahrenheitToCelcius(temperature) {
    let convertedCel = (temperature - 32) * 5 / 9
    return convertedCel
}
// console.log(fahrenheitToCelcius(32))

function canCharBattle(currentTemp) {
    let converted = fahrenheitToCelcius(currentTemp)
    if (converted >= 0) {
        console.log('Char can battle')
    } else {
        console.log('Char cannot battle')
    }
}
canCharBattle(31)
canCharBattle(34)

// *******Loops*********

// You have joined an undeground pokemon leauge.
// In this league, trainers can use any number of pokemon. Print to the console
// "Pikachu I choose you" x times where x is the number of pokemon the trainer
// you are battling has in their party

function lawlessLeague(partySize) {
    for (let i = 1; i <= partySize.length; i++)
        console.log('Pika, I chose you')
}
// lawlessLeague(10)
// lawlessLeague(3)

lawlessLeague(['bulbasaur', 'caterpie', 'weedle']) // With .length after partySize

function yell(word){
    // return word
}
// console.log(yell('Hello!'))
// yell("Hello!")

// Loop - For
for (let i = 1; i < 5;i++){
    // console.log(i)
}


// Array Iteration: Iterates through an array, passing in the value and the index of each element
let bestColors = ['green','blue','yellow','black']
bestColors.forEach((i) => console.log(i))
console.log(bestColors.length)