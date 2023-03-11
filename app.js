console.log("Hello World!\n==========\n");

// Exercise 1 Section

function printOdds(count) {
    for (let i = 1; i <= Math.abs(count); i++) {
        if (i % 2 != 0) {
            console.log(i * Math.sign(count));
        }
    }

    printOdds(-10);
    printOdds(10);
}
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
function checkAge(name, age) {
    let oldEnoughMsg = `Congrats ${name}! You can drive!`;
    let tooYoungMsg = `Sorry ${name}, you need to wait ${
        16 - age
    } year/years until you can drive.`;

    if (age < 16) {
        console.log(tooYoungMsg);
    } else {
        console.log(oldEnoughMsg);
    }
}

chesckAge("Ben", 12);
checkAge("Seth", 16);
checkAge("Cameron", 21);

console.log("EXERCISE 2:\n==========\n");
// Exercise 3 
function checkQuadrant(x, y) {
    switch (true) {
        case x > 0 && y > 0:
            return "Quadrant 1";
        case x < 0 && y > 0:
            return "Quadrent 2";
        case x < 0 && y < 0:
            return "Quadrent 3";
        case x > 0 && y < 0:
            return "Quadrent 4";
        case x == 0 && y != 0:
            return "x Axis";
        case x != 0 && y == 0:
            return "Y Axis";
        default:
            return "Origin";      
    }
}

comsole.log(checkQuadrant(11, 1));
console.log(checkQuadrant(-11, 1));
console.log(checkQuadrant(-1, -11));
console.log(checkQuadrant(1, -11));
console.log(checkQuadrant(0, -11));
console.log(checkQuadrant(11, 0));
console.log(checkQuadrant(0, 0));

// Exercise 4 

function isValidTriangle(a, b, c) {
 return a + b > c || a + c > b || b +c > a;   
}

function checkTriangle(a, b, c) {
    let isvalid = isValidTriangle(a, b, c);
    if (isValid) {
        if (a == b && b == c) {
            return `Equilateral`;
        }else if (a == b || b == c || a ==c) {
            return `Isosceles`;
        }else {
            return `Scalene`;
        }
    }else {
        return `Not a valid triangle.`;
    }
}
 console.log(checkTriangle(2, 3, 4));
 console.log(checkTriangle(2, 2, 2));
 console.log(checkTriangle(1, 2, 2));
 console.log(checkTriangle(1, 1, 2));

 //Exercise 5 
 function datausageFeedback(plantLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = usage / day;
    let projectedAvg = plantLimit / periodLength; 
    let remainingData = planLimit - usage;
    let statusMgg;

    if (currentAvg > projectedAvg) {
        statusMsg = "EXCEEDING";
    } else if (currentAvg < projectedAvg) {
        statusMsg = "UNDER";
    } else {
        statusMsg = "AT"
    }
    console.log(`${day} day/days used, ${remainingDays} day/days 
    remaining Average projected use: ${projectedAvg.toFixed(2)} GB/day.
    You are ${statusMsg} your average daily use (${currentAvg.toFixed(2)} 
    GB/day), continuing this usage, you'll end up using 
    ${planLimit - (usage + projectedUsage)} GB from your data limit. To 
    stay below your data plan, use no morethan 
    ${(remainingData / remainingDays).toFixed(2)} GB/day.`); 
 }

 datausageFeedback(50, 15, 25);