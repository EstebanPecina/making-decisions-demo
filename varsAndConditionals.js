/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonAttack = 25;
let jamieAttack = 35;

if(jonAttack > jamieAttack) {
    console.log("Jon has the better attack.");
} else if(jonAttack < jamieAttack) {
    console.log("Count Jamie has the better attack");
}   else if(jonAttack === jamieAttack) {
        console.log("Jamie and Jon have the same attack.");
}

let jonHealth = 100;

if(jonHealth <=0) {
    console.log("Jon has been slain.");
} else {
    // jonHealth = jonHealth - jamieAttack; 
    jonHealth -= jamieAttack;
    console.log(`Jon's health is down to ${jonHealth}.`);
    // console.log("Jon's health is down to "+ jonHealth);
}

if((jonHealth + 50) >=100) {
    jonHealth = 100;
}   else { 
    jonHealth += 50;
} console.log(jonHealth);

let coinLandsHeads = false;

if(coinLandsHeads === true) {
    console.log('The fight continues!');
} else if(coinLandsHeads !== true) {
    console.log("Jon is allowed to run away")
}



// for(let i = 0; i < 5; i++) {
//     if(jonHealth > 0) {
//     jonHealth -= jamieAttack;
//     console.log(`Jon's health is now ${jonHealth}.`)
// }   console.log("Jon is dead.");
// }

// i = 0, jonHealth = 65
// i = 1, jonHealth = 30
// i = 2, jonHealth = -5


while(jonHealth > 0) {
    jonHealth -= jamieAttack;
    console.log(`Jon's Health is now ${jonHealth}.`);
}