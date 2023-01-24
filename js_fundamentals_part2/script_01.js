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