// Coding challenge #2 
const bills = [125, 555, 44];

function calcTip(billValue) {
    if (billValue > 50 && billValue < 300) {
        return (15 / 100) * billValue;
        } else {
        return (20 / 100) * billValue;
        };
}
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
    console.log(tips, totals);
