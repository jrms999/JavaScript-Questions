Determine what variable type each one is
var testOne = "What kind of variable is this?”; 
// string 
var testTwo = 256;
// numbers
var testThree = ["What", "kind", "of", "variable", "am", "I?”]; 
// string array
var testFour = false; 
// boolean
var testFive = [1, 2, 5]; 
// number array
var testSix = 128; 
// numbers
var testSeven = "What am I?”                                                                                                                                      
// prompt
var testEight = true; 
// boolean
var testNine = ["What kind of variable is this?", 2, 5, 19]; 
// mixed array

Concatenation (combining things in JavaScript)
Given these variables
var string1 = "Hello "; 
var string2 = "my name is "; 
var string3 = "your name here"; 
var combinedStrings = string1 + string2 + string3;
What do you expect the console message to be?
// Hello my name is your name here
console.log(combinedStrings);
Given these variables
var num1 = 8; 
var num2 = 52; 
var num3 = 60; 
var combinedNumbers = num1 + num2 + num3;
What do you expect the console message to be?
console.log(combinedNumbers);
// 120
Given these variables
var mixedNum1 = 10; 
var mixedString1 = "ten"; 
var mixedNum2 = "10"; 
var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;
What do you expect the console message to be?
console.log(mixedConcatenation);
// 1010ten
If / Else If / Else - Checking for True or False
Given these variables
var num4 = 5; 
var num5 = 0;
What do you expect the console message to be?
if (num4 > 1) { 
console.log("Num4 is greater than 1"); 
} else { 
console.log("Num4 is NOT greater than 1"); 
};
//Num4 is greater than 1
Given these variables
var num4 = 5; 
var num5 = 0;
What do you expect the console message to be?
if (num4 < num5 || num4 === num5 && true) { 
console.log("If statement ran!"); 
} else { 
console.log("Else statement ran"); 
};
// Else statement ran
Given these variables
var num4 = 5; 
var num5 = 0;
What do you expect the console message to be?
if (num4 < num5 || num4 === num5) { 
console.log("If statement ran!"); 
} else if (num5 === "0" || true) { 
console.log("Else if statement ran"); 
} else { 
console.log("Else statement ran"); 
};
//Else if statement ran
Given these variables
var num4 = 5; 
var num5 = 0;
What do you expect the console message to be?
if (num4 > num5 && num4 === num5) { 
console.log("If statement ran!"); 
} else if (num5 === "0" || true) { 
console.log("Else if statement ran"); 
} else { 
console.log("Else statement ran"); 
};
// else if statement ran
For Loop - Looking into Arrays
Given this variable
var array1 = ["this", "is", "an", "array", "of", "strings"];
What do you expect the console message to be?
for (var i = 0; i < array1.length; i = i + 1) { 
console.log(i, array1[i]); 
};
//0 this
//1 is 
//2 an 
//3 array
//4 of 
//5 strings

Given these variable
var array2 = [1, 3, 5, 7, 9]; 
var total = 0;
What do you expect the console message to be?
for (var i = 0; i < array2.length; i = i + 1) { 
total = total + array2[i]; 
}; 
console.log(total);
// 25
Given this variable
var array3 = [11, 33, 55, 77, 99];
What do you expect the console message to be?
for (var i = 0; i < array2.length; i = i + 1) { 
if(array3[i] >= 55 || array3[i] <= 100){ 
console.log(array3, array3[i]); 
}; 
};
// (5) [11, 33, 55, 77, 99] 99
// (5) [11, 33, 55, 77, 99] 99
// (5) [11, 33, 55, 77, 99] 99
// (5) [11, 33, 55, 77, 99] 99
// (5) [11, 33, 55, 77, 99] 99
Functions - making things happen
Given this function
function testStuff (a, b) { 
if(a > 25 && b < 100){ 
console.log(a + " is greater than 25 and " + b + "is less than 100"); 
} else { 
console.log(a + " is NOT greater than 25 or " + b + "is NOT less than 100"); 
}; 
};
What do you expect the console message to be for each?
testStuff(10, 101); 
testStuff(26, 99); 
testStuff(100, 25);
// 10 is NOT greater than 25 or 101is NOT less than 100
// 26 is greater than 25 and 99is less than 100
// 100 is greater than 25 and 25is less than 100

Given this function
function testStuff2(c, d) { 
if(c == 25){ 
console.log(c + " is equal to 25"); 
} else if(d <= 100){ 
console.log(d + " is less than or equal to 100"); 
} else { 
console.log("Neither if or else if statement ran"); 
}; 
};
What do you expect the console message to be?
testStuff2(26, 101); 
testStuff2(25, 99); 
testStuff2(102, 24);
// Neither if or else if statement ran
// 25 is equal to 25
// 24 is less than or equal to 100
Once you have completed these exercises add them to Github.




