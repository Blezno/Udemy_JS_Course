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