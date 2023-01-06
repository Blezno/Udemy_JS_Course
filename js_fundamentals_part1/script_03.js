// Coding Challenge number 3 :

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. 
//The winner with the highest average score wins a trophy !

//Task: 
//1. Calculate the average score for each team, using the test data.
//2. Compare the team average scores to determine the winner of the competition, and print it to the console. 
//Don't forrget that there can be a draw, so test for that as well draw means they have the same average score.

const dolphinScore = ((96 + 108 + 89) / 2);
console.log(dolphinScore);
const koalaScore = ((88 + 91 + 110) / 2);
console.log(koalaScore);

if (dolphinScore > koalaScore) {
    console.log(`Dolphins wins over Koalas with a score of ${dolphinScore}`);
} else if (koalaScore > dolphinScore) {
    console.log(`Koalas wins over the Dolphins with a score of ${koalaScore}`);
} else if (dolphinScore === koalaScore){
    console.log("There's a draw!");
};


