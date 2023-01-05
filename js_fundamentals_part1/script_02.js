//Coding challenge number 1 :
//Mark and John are trying to compare their BMI Body Mass Index, which is calculated using the formula:
// BMI = mass / height ** 2 
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBmi = (markMass / markHeight ** 2);
const johnBmi = (johnMass / johnHeight ** 2);
console.log(`Mark's BMI is ${markBmi} and John's BMI is ${johnBmi}`);
if (markBmi > johnBmi) {
    console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi}) !`);
} else {
    console.log("John's BMI is higher than Mark's !");
};
console.log(markBmi > johnBmi);