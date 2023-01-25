// Lecture functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and it's capital city is ${capitalCity}.`;
};

const frost = describeCountry('Finland', 6, 'Helsinki');
console.log(frost);

const froggy = describeCountry('France', 66, 'Paris');
console.log(froggy);

const chorizo = describeCountry('Spain', 47, 'Madrid');
console.log(chorizo);

//Lecture Functions declarations vs expressions

//Function declarations :

const worldPopulation = 7900;

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const percentageChina = percentageOfWorld1(1441);
console.log(percentageChina);

const percentageSpain = percentageOfWorld1(47);
console.log(percentageSpain);

const percentageIndia = percentageOfWorld1(1408);
console.log(percentageIndia);

// Function expression :

const percentageOfWorld2 = function calPercentage(population) {
    return (population / 7900) * 100;
}

const percentageBrazil = percentageOfWorld2(2143);
console.log(percentageBrazil);

// Lecture arrow function :
const percentageOfWorld3 = population => (population / 7900) * 100;

const percPortugal3 = percentageOfWorld3(10);
const percChina3 = percentageOfWorld3(1441);
const percUsa3 = percentageOfWorld3(332);
console.log(percPortugal3, percChina3, percUsa3);

// Lecture : functions calling other functions 

function describePopulation(country, population) {
    const percentagePopulation = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentagePopulation} % of the World`;
}

const popChina = describePopulation('China', 1441);
const popUsa = describePopulation('USA', 332);
const popBrazil = describePopulation('Brazil', 2143);
console.log(popChina);
console.log(popUsa);
console.log(popBrazil);

// Lecture intro to arrays :

const populations = [1441, 332, 2143];
console.log(populations === 4);

const percentages = [percentageChina, percUsa3, percentageBrazil];
console.log(percentages);

// Lecture basic array operations methods :

const neighbours = ['Belgium', 'Italia', 'Spain', 'Germany', 'England'];
console.log(neighbours);

neighbours.push('Utopia'); //to add an element in the array
console.log(neighbours);

neighbours.pop();
console.log(neighbours); //to remove the last element of the array

if (neighbours.includes('Sweden')) {//includes is equivalent to index but instead of the index number it returns true or false. ES6 method.
    console.log('Probably not a nothern country :D');
}

console.log(neighbours.indexOf('Germany')); //to find the index of an element in an array
neighbours[neighbours.indexOf('Germany')] = 'Republic of Germany';
console.log(neighbours);

