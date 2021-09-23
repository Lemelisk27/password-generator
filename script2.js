// User Prompts
var numChar = Number(prompt("What is the length of the password?\n(Between 8 and 128 charactors)\nDefaults to 8."))
var up = prompt("Do you want to include Upper Case letters?\n(Yes/No)\nDefaults to Yes")
var down = prompt("Do you want to include Lower Case letters?\n(Yes/No)\nDefaults to Yes")
var num = prompt("Do you want to include Numbers?\n(Yes/No)\nDefaults to Yes")
var special = prompt("Do you want to include special charactors? i.e # $ % ^\n(Yes/No)\nDefaults to Yes")

// Variables
var alpha = "abcdefghijklmnopqrstuvwxyz"
var downArray = alpha.split("")
var upAlpha = alpha.toUpperCase()
var upArray = upAlpha.split("")
var numArray = [1,2,3,4,5,6,7,8,9,0]
var specArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var testAnswer = ["Y", "N"]
var pass = []
var cre = []

// Verifies that the number of charactors is a number and between 8 and 128
if (numChar < 8 || numChar > 128 || Number.isFinite(numChar) != true) {
    alert("The default of 8 charactors been selected.");
    numChar = 8
}

// Trims the promts, verifies them, and sets the defaults.
if (up != null && up != "") {
    up = up.charAt(0);
    up = up.toUpperCase();
    if (testAnswer.includes(up) == false) {
        up = "Y"
    }
}
else {
    up = "Y"
}

if (down != null && down != "") {
    down = down.charAt(0);
    down = down.toUpperCase();
    if (testAnswer.includes(down) == false) {
        down = "Y"
    }
}
else {
    down = "Y"
}

if (num != null && num != "") {
    num = num.charAt(0);
    num = num.toUpperCase();
    if (testAnswer.includes(num) == false) {
        num = "Y"
    }
}
else {
    num = "Y"
}

if (special != null && special != "") {
    special = special.charAt(0);
    special = special.toUpperCase();
    if (testAnswer.includes(special) == false) {
        special = "Y"
    }
}
else {
    special = "Y"
}

// Creats the new array for the passward
if (up == "Y") {
    var pass = pass.concat(upArray)
}
if (down == "Y") {
    var pass = pass.concat(downArray)
}
if (num == "Y") {
    var pass = pass.concat(numArray)
}
if (special == "Y") {
    var pass = pass.concat(specArray)
}

// If none of the options were selected this just uses uppercase letters.
if (pass.length == 0) {
    var pass = pass.concat(upArray)
}

// Genarates an array for the new password
for (let i = 0; i < numChar; i++) {
    var passlen = Math.floor(Math.random() * pass.length)
    cre = cre.concat(pass[passlen]);
}

//creats the final password
var final = cre.join("")

console.log("numChar: " + numChar)
console.log("up: " + up)
console.log("down: " + down)
console.log("num: " + num)
console.log("special: " + special)
console.log("upArray: " + upArray)
console.log("downArray: " + downArray)
console.log("numArray: " + numArray)
console.log("specArray: " + specArray)
console.log("pass: " + pass)
console.log("pass.length: " + pass.length)
console.log("cre: " + cre)
console.log("final length: " + final.length)
console.log("final: " + final)
console.log("testAnswer: " + testAnswer)