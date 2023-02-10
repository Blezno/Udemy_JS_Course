// Lecture introduction to objects :
const myCountry = {
    country: 'France',
    capital: 'Paris',
    language: 'French',
    population: '66',
    neighbours: ['Belgium', 'Germany', 'England', 'Spain', 'Italy']
};

// Lecture Dot vs Bracket Notation :
    //We use here dot notation to retrieve the information from the myCountry object:
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}speaking people, ${myCountry.neighbours} neighbouring countries and a capital called ${myCountry.capital} !`);

myCountry.population += 2; //Increase population with dot notation
console.log(myCountry.population);

myCountry['population'] -= 2; //Decrease population using bracket notation
console.log(myCountry.population);