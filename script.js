// Day 3

//Activity-1

//Task1: Write a program to check if a number is positive, negative, or zero and log the result in the console
let number=-52;
if(number >= 0)
{
    console.log(`${number} is positive number and greater than to zero`);
}
else
{
    console.log(`${number} is negative number and less than zero`);
}

//Task2: Write a program  to check if a person is eligible to vote and log the result to the console.
let personAge=8;
if(personAge>=18)
{
    console.log("Person is eligible for voting.")
}
else
{
    console.log("Person is not-eligible for voting.")
}

//Activity-2

//Task3: Write a program to find the largest of three number using nested if-else statement
let var1=30;
let var2=20;
let var3=50;
if(var1 < var2)
{
    if(var2>var3)
    {
        console.log(`${var2} is larger number`);
    }
    else
    {
        console.log(`${var3} is larger number`);
    }
}
else
{
    if(var1>var3)
    {
        console.log(`${var1} is larger number`);
    }
    else
    {
        console.log(`${var3} is larger number`);
    }
}

// Activity-3

//Task4: Write a program that uses  a switch case to determine the day of week based on a number (1-7) and 
//log the day name to the console
let num=7;
switch(num)
{
        case 1:console.log("Monday")
               break;
        case 2:console.log("Tuesday")
               break;
        case 3:console.log("Wednsday")
               break;                 
        case 4:console.log("Thursday")
               break;
        case 5:console.log("Friday")
               break;
        case 6:console.log("Saturday")
               break;
        case 7:console.log("Sunday")
              break;
        default:console.log("No Match Found");
}

//Task5: Write a program that uses a switch case  to assign  a grade (A,B,C,D,F)based on  a score and log the grade to the console
let marks = 89;
let grade;

switch (true) {
    case (marks >= 90 && marks <= 100):
        grade = 'A';
        break;
    case (marks >= 70 && marks < 90):
        grade = 'B';
        break;
    case (marks >= 50 && marks < 70):
        grade = 'C';
        break;
    case (marks >= 40 && marks < 50):
        grade = 'D';
        break;
    case (marks < 40):
        grade = 'F';
        break;
    default:
        grade = 'Invalid';
}
console.log(grade);

// Activity-4

//Task-6: write a program that uses  the ternary operator to check if a number is even or odd and log the result to the console.
let operationalNumber = 10;
const result = (operationalNumber % 2 === 0) ? `${operationalNumber} is Even` : `${operationalNumber} is Odd`;
console.log(result);

// Activity-4

//Task-7:Write a program to check if a year is a leap year using multiple conditions and log the result to the condddition

let year = 2024;
const isLeapYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? `${year} is a leap year` : `${year} is not a leap year`;
console.log(isLeapYear);

