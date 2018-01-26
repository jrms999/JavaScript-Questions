// Problem 1. - Print to the console, the screen and an alert
console.log"This text prints to the console");
document.write("Welcome to the document window);
alert("I don't like Alerts!"));
// no front bracket on the initial statement //

// Problem 2. - Save user's data in a variable using a prompt
var usersname == prompt("What is your name?");
documentwrite(" Welcome " + usersname);
// two equals sign (==) instead of the required one //

// Problem 3. - Create the 4 different types of variables
var stringVar  == "This is a string.";
var numberVar  === 179;
var booleanVar <= true;
var arrayVar    [1, 2, 3, 4, 5];
console.logg(stringVar, numberVar, booleanVar, arrayVar);
// again same problem, teh only thing required is one = //

// Problem 4. - Using concatenation with your variables
vaar concatVar = numberVar + " is greater than " + (arrayVar[3] + arrayVar[2]);
console.log(concatVar);
// var for variable not vaar //

// Problem 5. - Write if / else statements using variables in the condition and in the block of code that runs
if (stringVar.length  arrayVar[4]) {
  console.log("If statement ran");
else {
  console.log("Else statement ran");
};
// no greater than (>) beween length and arrayVar //

// Problem 6. - Create loops that prints array indexes and values
for (var i = 0 i < arrayVar.length i++) {
  console.log("The current index is " + i, "The current value is " + arrayVar[i]);
;
// no ; after the first "i" value //

// Problem 7. - Create functions that have parameters, and run with arguments
function fahrenheit2celsius()
  var conversion = (a - 32) * 5 / 9;
  console.log(conversion);
};
fahrenheit2celsius(32);
fahrenheit2celsius(68);
// no (a) html reference and no {} after that, code is broken //
