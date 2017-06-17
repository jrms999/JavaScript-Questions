Determine what variable type each one is
var testOne = "What kind of variable is this?”; 
string 
var testTwo = 256;
numbers
var testThree = ["What", "kind", "of", "variable", "am", "I?”]; 
string array
var testFour = false; 
boolean
var testFive = [1, 2, 5]; 
number array
var testSix = 128; 
numbers
var testSeven = "What am I?”                                                                                                                                      
prompt
var testEight = true; 
boolean
var testNine = ["What kind of variable is this?", 2, 5, 19]; 
mixed array

Concatenation (combining things in JavaScript)
Given these variables
var string1 = "Hello "; 
var string2 = "my name is "; 
var string3 = "your name here"; 
var combinedStrings = string1 + string2 + string3;
What do you expect the console message to be?
console.log(combinedStrings);
Given these variables
var num1 = 8; 
var num2 = 52; 
var num3 = 60; 
var combinedNumbers = num1 + num2 + num3;
What do you expect the console message to be?
console.log(combinedNumbers);
Given these variables
var mixedNum1 = 10; 
var mixedString1 = "ten"; 
var mixedNum2 = "10"; 
var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;
What do you expect the console message to be?
console.log(mixedConcatenation);
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
Given these variables
var num4 = 5; 
var num5 = 0;
What do you expect the console message to be?
if (num4 < num5 || num4 === num5 && true) { 
console.log("If statement ran!"); 
} else { 
console.log("Else statement ran"); 
};
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
For Loop - Looking into Arrays
Given this variable
var array1 = ["this", "is", "an", "array", "of", "strings"];
What do you expect the console message to be?
for (var i = 0; i < array1.length; i = i + 1) { 
console.log(i, array1[i]); 
};
Given these variable
var array2 = [1, 3, 5, 7, 9]; 
var total = 0;
What do you expect the console message to be?
for (var i = 0; i < array2.length; i = i + 1) { 
total = total + array2[i]; 
}; 
console.log(total);
Given this variable
var array3 = [11, 33, 55, 77, 99];
What do you expect the console message to be?
for (var i = 0; i < array2.length; i = i + 1) { 
if(array3[i] >= 55 || array3[i] <= 100){ 
console.log(array3, array3[i]); 
}; 
};
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
Once you have completed these exercises add them to Github.







var string1 = "Hello "; 
var string2 = "my name is "; 
var string3 = "your name here"; 
var combinedStrings = string1 + string2 + string3;
What do you expect the console message to be?
console.log(combinedStrings);
VM54:5 Uncaught SyntaxError: Unexpected token do
var string1 = "Hello "; 
var string2 = "my name is "; 
var string3 = "your name here"; 
var combinedStrings = string1 + string2 + string3;

console.log(combinedStrings);
VM55:6 Hello my name is your name here
undefined
var num1 = 8; 
var num2 = 52; 
var num3 = 60; 
var combinedNumbers = num1 + num2 + num3;

console.log(combinedNumbers);
VM57:6 120
undefined
var mixedNum1 = 10; 
var mixedString1 = "ten"; 
var mixedNum2 = "10"; 
var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;

console.log(mixedConcatenation);
VM59:6 1010ten
undefined
var num4 = 5; 
var num5 = 0;

if (num4 > 1) { 
console.log("Num4 is greater than 1"); 
} else { 
console.log("Num4 is NOT greater than 1"); 
};
VM61:5 Num4 is greater than 1
undefined
var num4 = 5; 
var num5 = 0;

if (num4 < num5 || num4 === num5 && true) { 
console.log("If statement ran!"); 
} else { 
console.log("Else statement ran"); 
};
VM63:7 Else statement ran
undefined
var num4 = 5; 
var num5 = 0;

if (num4 < num5 || num4 === num5) { 
console.log("If statement ran!"); 
} else if (num5 === "0" || true) { 
console.log("Else if statement ran"); 
} else { 
console.log("Else statement ran"); 
};
VM65:7 Else if statement ran
undefined
var num4 = 5; 
var num5 = 0;

if (num4 > num5 && num4 === num5) { 
console.log("If statement ran!"); 
} else if (num5 === "0" || true) { 
console.log("Else if statement ran"); 
} else { 
console.log("Else statement ran"); 
};
VM67:7 Else if statement ran
undefined
var array1 = ["this", "is", "an", "array", "of", "strings"];
What do you expect the console message to be?
for (var i = 0; i < array1.length; i = i + 1) { 
console.log(i, array1[i]); 
};
VM68:2 Uncaught SyntaxError: Unexpected token do
var array1 = ["this", "is", "an", "array", "of", "strings"];

for (var i = 0; i < array1.length; i = i + 1) { 
console.log(i, array1[i]); 
};
VM71:4 0 "this"
VM71:4 1 "is"
VM71:4 2 "an"
VM71:4 3 "array"
VM71:4 4 "of"
VM71:4 5 "strings"
undefined
var array2 = [1, 3, 5, 7, 9]; 
var total = 0;

for (var i = 0; i < array2.length; i = i + 1) { 
total = total + array2[i]; 
}; 
console.log(total);
VM72:7 25
undefined
var array3 = [11, 33, 55, 77, 99];

for (var i = 0; i < array2.length; i = i + 1) { 
if(array3[i] >= 55 || array3[i] <= 100){ 
console.log(array3, array3[i]); 
}; 
};
VM73:5 (5) [11, 33, 55, 77, 99] 11
VM73:5 (5) [11, 33, 55, 77, 99] 33
VM73:5 (5) [11, 33, 55, 77, 99] 55
VM73:5 (5) [11, 33, 55, 77, 99] 77
VM73:5 (5) [11, 33, 55, 77, 99] 99
undefined
function testStuff (a, b) { 
if(a > 25 && b < 100){ 
console.log(a + " is greater than 25 and " + b + "is less than 100"); 
} else { 
console.log(a + " is NOT greater than 25 or " + b + "is NOT less than 100"); 
}; 
};

testStuff(10, 101); 
testStuff(26, 99); 
testStuff(100, 25);
VM74:5 10 is NOT greater than 25 or 101is NOT less than 100
VM74:3 26 is greater than 25 and 99is less than 100
VM74:3 100 is greater than 25 and 25is less than 100
undefined
function testStuff2(c, d) { 
if(c == 25){ 
console.log(c + " is equal to 25"); 
} else if(d <= 100){ 
console.log(d + " is less than or equal to 100"); 
} else { 
console.log("Neither if or else if statement ran"); 
}; 
};

testStuff2(26, 101); 
testStuff2(25, 99); 
testStuff2(102, 24);
VM75:7 Neither if or else if statement ran
VM75:3 25 is equal to 25
VM75:5 24 is less than or equal to 100
undefined