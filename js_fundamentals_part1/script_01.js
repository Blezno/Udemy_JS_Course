//Assignments JS Fundamentals part 1:

const country = "France";
const continent = "Europe";
language = 'portuguese';
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

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
if (numNeighbours === 1) {
    console.log("Only 1 border !");
} else if (numNeighbours > 1) {
    console.log("More than one borders");
} else {
    console.log("No borders");
};


