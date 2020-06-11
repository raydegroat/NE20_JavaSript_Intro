// Lab: Introduction to JavaScript

// 1. Sum 3 Numbers: Accepts array of numbers or strings.
function sumThree(arr){
    let num1 = Number.parseFloat(arr[0]);
    let num2 = Number.parseFloat(arr[1]);
    let num3 = Number.parseFloat(arr[2]);
    let sum = (num1 + num2 + num3);
    return sum;
}

let numbers = ['2', '3', '4']
console.log(sumThree(numbers));


// 2. Sum and VAT: Cacluate the total cost given the sum and VAT.
function calculateTotal(arr){

    let sum = 0;

    for(let price of arr){
        sum += Number(price);
    }
    console.log(`sum = ${sum}`);
    console.log(`VAT = ${sum * 0.2}`);
    console.log(`Total = ${sum * 1.2}`);
}

let nums = ['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445']

calculateTotal(nums);


/* 3. Letter Occurrences In String: Count the number of times a letter occures in a string
      Solution 1. Convert String to array and use array.filter to move the searched letter to a new array.
      Count the elements of the new array, and there's your answer. */
function countChar(word, charToCount){               

    let wordArr = Array.from(word.toLowerCase());    // Convert word to lower case, then from a string to an array of chars 
    
    const charCount = wordArr.filter(function(item){  //Use the filter method on the wordArr array to filter out charToCount
        return item === charToCount;  // Each time the charToCount occurres, return it to a new array.
   })

   return charCount.length;           // The length of the new array equals the number of times the character occurred.
}

result = countChar('Imagination', 'i');

console.log(result);


// 3. Letter Occurrences In String: A better solution. Loop the string and count the occurrences.
function countIt([word, letter]){
    let count = 0
    for(let char of word){
        if (char === letter){
            count++
        } 
     }
     return count;
 }
 
 console.log(countIt(['Imagination', 'i']));


// 4. Filter by age: 

 let person1 = {      
    name: "",
    age: ""
}

let person2 = {
    name: "",
    age: ""
}

function ageFilter([ minAge, name1, age1, name2, age2 ]){

    minAge = Number.parseInt(minAge);
    person1.name = name1;
    person1.age = Number.parseInt(age1);
    person2.name = name2;
    person2.age = age2;

    if(person1.age >= minAge){
        console.log(person1);
    }
    if(person2.age >= minAge){
        console.log(person2)
    }
}

ageFilter(['12', 'Ivan', '15', 'Asen', '9'])


// 5. String of numbers 1...N
function oneToNumAsString([num]){
    
    let numberAsString = '';

    for(let i = 1; i <= Number.parseInt(num); i++){  // In this case, we need the value of num as a number, not a string.
        numberAsString += i.toString();
    }
    console.log(numberAsString);
}

oneToNumAsString(['11']);


// 6. Figure Area: Calculate the total area of 2 overlapping rectangles.
function figArea(arr){

    
    fig1 = arr[2] * arr[3];
    fig2 = arr[0] * arr[1];
    fig3 = Math.min(arr[0], arr[1]) * Math.min(arr[2], arr[3]);
    area = fig1 + fig2 - fig3;

    console.log(area);
}

var arr = [13, 2, 5, 8];
figArea(arr);


// 7. Next Day: Function which accepts a date in form yyyy, mm, dd, and returns tomorrows date.
function nextDay(arr){

    let year = Number(arr[0]);
    let month = Number(arr[1]);
    let day = Number(arr[2]);
    

    let today = new Date(year, month -1, day);
    let oneDay =  24*60*60*1000;
    let nextDay = new Date(today.getTime() + oneDay);
    console.log(`${nextDay.getFullYear()}-${nextDay.getMonth()+1}-${nextDay.getDate()}`);

}

var arr = [2019, 10, 31]
nextDay(arr);


// 8. Distance between two points
class Point{

    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(a, b){

        let start = b.x - a.x;
        let end = a.y - b.y;
        let distance = Math.sqrt((start * start)+(end * end));
        return distance;
    }
}

let Point1 = new Point(5, 5);
let Point2 = new Point(9, 8);

console.log(Point.distance(Point1, Point2));
