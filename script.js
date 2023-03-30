let golferName = prompt("Welcome to GC mini golf! What is your name?");

let holeCount = prompt(`Hi ${golferName}! Will you be playing 3 or 6 holes?`);

let par = holeCount * 3

let total = 0;

for(let i = 1; i <= holeCount; i ++) {
    total += Number(prompt(`How many putts for hole ${i}? (par: 3)`));
}

let userScore = total - par;

if(userScore < 0){
    console.log(`Great job, ${golferName}! Your total par was: ${userScore}!`);
} else if(userScore == 0){
    console.log(`Good game, ${golferName}. Your total par was: 0.`);
} else if(userScore > 0){
    console.log(`Nice Try, ${golferName}. Your total par was: +${userScore}.`);
}




