// Start with creating a Character
// Must use switches
// Include a fight scene that uses 2 if/else statements
// Must use at least 5 loops - include for loops and while loops
// Must use at least 2 functions
// CHALLENGE: Connect HTML to the JS and display the text in
// the front-end and make it pretty.
//----------------------------------------------------------------------------------------
//STORYBOARD / IDEAS
// Character creation: boy or girl, species(yerkal, slithsin, forgran)
// yerkal: tall, slow, strong
// slithsin: average, fast, average
// forgran: short, average, weak

// yerkal power: slam, throw, grapple  //massive damage
// slithsin power: kunai toss, evade, quickstab //evasion but weak damage
// forgran power: shoot, bow, sword //average damage

// The world opens to character Selection.you've been pulled
// from your cell to speak on behalf of the murder you witnessed centuries
// ago.However, confessing puts the largest target on your back in all of Altrustia.
//     You're goal is to escape the prison before your hearing. An opprotunity raises itself,
// USER move > progression
// USER dont move > hearing begins, you're assassinated the minute you get back to your cell

// progression > you wander down the halls and see an empty hallway, and an open door
// What do you pick ?

//     USER empty hallway > caught by guards, returned to cell, life sentence.
// USER open door > approaches a staircase.

// Do you go up or down the flight of stairs ?

//     USER up > doorway to rooftop, fight starts
// USER down > entrance cameras see you, alarms go off.

// lose fight > death
// win fight > zipline over prison fence

// As you zipline, you have flashback that takes you back to the murder you
// witnessed centuries ago, revealing to just be an illusion from the start.

// To be continued...

// Fight mechanics:
// Prison Guard boss damage - 40 - 60dmg / hit
// health = base 100hp all

let charHair = [
    "Black hair with ", "Brown hair with ", "Blonde hair with "
];
let charTooth = [
    "big fangs!", "little fangs!", "no fangs!"
];
let h = charHair[Math.floor(Math.random() * charHair.length)];
let t = charTooth[Math.floor(Math.random() * charTooth.length)];
function charSet() {
    switch (h == t) {
        case 0:
            let a = "Automatic win!"
            document.getElementById("chars").innerHTML = a;
            break;
        default:
            document.getElementById("chars").innerHTML = h;
            document.getElementById("char").innerHTML = t;
    }
    // document.getElementById("chars").innerHTML = h;
    // document.getElementById("char").innerHTML = t;
}


let challenges = [
    "Attend your hearing or try to escape the prison?",
    "Down the Empty Hallway or through the door?",
    "You've met a staircase, do you go DOWN or UP the stairs?",
    "Time to fight! Attack or flee??"
];
let respgood = [
    "You found an opening!",
    "You went through the door!",
    "You went up the staircase!",
    "You attacked!!!"
];
let respbad = [
    "You went to your hearing. You died the next hour...",
    "There was a guard around the corner!",
    "Cameras caught you going down!",
    "You ran away and died from falling off the roof."
];

let fight = [
    "hit", "miss", "miss", "hit"
];
let life = ["alive", "dead"];
let l = life[Math.floor(Math.random() * life.length)]
let f = fight[Math.floor(Math.random() * fight.length)]

let c = 0;
// let g = 0;
// let b = 0;

function good() {
    document.getElementById("change").innerHTML = respgood[c];
}
function bad() {
    document.getElementById("change").innerHTML = respbad[c];
}
function first() {
    document.getElementById("change").innerHTML = respgood[c];
}
function second() {
    document.getElementById("change").innerHTML = respbad[c];
}
function check() {
    if (respgood[c] > challenges[c]) {
        challenges[c] = respgood[c];
    } else {
        challenges[c] = respbad[c];
    }
}

function both() {

    if (first()) {
        document.getElementById("change").innerHTML = respgood[c];

    } else {
        document.getElementById("change").innerHTML = respgood[c];

    }
}

function endFight() {
    document.getElementById("change").innerHTML = fight[f];
    for (j = 0; j < fight.length; j++) {
        if (fight[f] == "hit") {
            if (life[l] == 0) {
                document.getElementById("change").innerHTML = life[1];
            } else {
                document.getElementById("change").innerHTML = life[0];
            }
        }
    }
}
// function progress() {
//     for (let u = 0; u < challenges.length; u++) {
//         c = u;
//         document.write(challenges[c]);
//     }
// }

