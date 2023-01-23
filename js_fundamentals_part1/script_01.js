//Assignments JS Fundamentals part 1:

const country = "France";
const continent = "Europe";
const language = 'french';
let population = "68";
const isIsland = false;
//isIsland = true : part of the exercise to test if it works and no an error pop in the console.
// console.log(isIsland);
// console.log(language);

// console.log(population / 2);
// population ++ ; //incrementation
// console.log(population);
// console.log(population < 6); //false if not needed
// console.log(population > 33); //true

//const description = `${country} is in ${continent}, and its ${population} millions people speak ${language}`;

//Lecture: Equality operators

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// if (numNeighbours === 1) {
//     console.log("Only 1 border !");
// } else if (numNeighbours > 1) {
//     console.log("More than one borders");
// } else {
//     console.log("No borders");
// };


//Lecture :  logical operators 

//Sarah wants to live in a country and we need to see if our country matches her criteria:
// English speaking country / Is not an Island / And has less than 50 millions people

if (!isIsland && language === 'english' && population < 50) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria :(`);
};

//Lecture : The conditional ternary operator
console.log(`France's population is ${population >= 33 ? 'above' : 'below'} average.`);