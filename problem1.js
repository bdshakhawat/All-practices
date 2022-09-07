// Problem:1: write a function to find the min and max value from an array

// Initialize array
const arr = [25,11,7,75,56];
// initialize min and max with first element of array
let min = arr[0];
let max = arr[0];
// Loop through the array
for(let i=0; i<arr.length; i++){
    let min = arr[i];
    // let max = arr[i];
    // Compare elements of array with min
    if(arr[i]<min){
        min=arr[i];
    }
    if(arr[i]>max){
        max = arr[i];
    }
}
// Print max and min number
console.log('The maximum number is: '+ max);
console.log('The minimum number is: '+min);

// Alternative methods of Solving the problem
const nums =[3,5,1,56,75,98];
Math.min (...nums);
Math.max(...nums);


// Alternative way of solution
function minimum(){
    let array = [5,10,15]
    
}


// The solution is Done.




// Udemy Courses 'Javascript Data Structure and Algorithm'



// const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// const weeklyWeateer =[70,72,68,65,74,74,73];
// // console.log('The temperature on Sunday was:', weeklyWeateer[0])
// // console.log('The temperature on Monday was:', weeklyWeateer[1]);
// // console.log('The temperature on Tuesday was:', weeklyWeateer[2]);



// // Use of for loop to iterate through every value of an array to find temperature of each day
// for (let i=0; i < weekdays.length; i++) {
//     let weekday = weekdays[i];
//     let temp = weeklyWeateer[i];
//     console.log('The temperature on',weekday, 'was:', temp);

// }


// // Using for loop to find the average temperature of the week.
// let totalTemp = 0;
// for (let i=0; i< weekdays.length; i++) {
//     let temp = weeklyWeateer[i];
//      totalTemp += temp;
// }
// let average = totalTemp/weeklyWeateer.length;
// console.log('The average tempeture for this week was:', average);

// // The number of 5 students are given below. Find the average number and individual number

// const studentsNames = ['Rahim', 'karim', 'javed','Alam', 'Navid'];
// for(let i=0; i < numbers.length; i++){
//     let name = studentsNames[i];
//     let marks= numbers[i];
//     console.log('Marks obtained by', name, 'is', marks);
// }




// // calculating the average number of the students
// let averageMarks = 0;
// for(let i=0; i < numbers.length; i++){
//     // let name = studentsNames[i];
//     let mark = numbers[i];
//     averageMarks += mark;

// }
// let averag = averageMarks/numbers.length;
// console.log('Total average Marks obtained by students is:', averag);





// Finding the largest and smallest value of an array
// const temerature = [20,90,40,50,60,70];
// let biggest = temerature[0];
// let smalest = temerature[0];
// for(let i=0; i<temerature.length; i++){
//     let temp = temerature[i];
//     if(temp > biggest){
//         biggest= temp;
//     }
//     if(temp < smalest){
//         smalest= temp;
//     }
// }
// console.log('The biggest value is:', biggest);
// console.log('The smallest value is:', smalest);


// finding  largest number





// Nested conditions
// var num = 15;
// if(num>2){
//     if(num>5){
//         console.log('You will pass')
//     }
//     else{
//         console.log('You will fail');
//     }

// }




// Grading conditionals
// var marks = 98;
// if(marks>90 && marks<= 100)
// {
//     console.log('You will get A+');
// }
// else if(marks>80 && marks <=90 )
// {
//     console.log('You have got A' );

// }
// else if(marks>70 && marks<=80  )
// {
//     console.log('You have got A-');
// }
// else if(marks>60 && marks<=70){
//     console.log('You have got B+');
// }
// else if(marks>50 && marks<=60){
//     console.log('You have got B');
// }
// else if (marks>40 && marks<=50){
//     console.log('You have got C')
// }
// else{
//     console.log('Fail');
// };





// Pairwise comparison in Array
// var ww = [70,72,68,65,74,74,73];
// console.log(ww);
// console.log(ww[0]);
// console.log(ww[1]);
// console.log(ww[2]);
// console.log(ww[3]);
// console.log(ww[4]);
// console.log(ww[5]);
// console.log(ww[6]);
// for(let i=1; i<ww.length; i++){
//     let num = ww[i];
//     console.log(num);

// }


// const ww =[72,70,68,65,74,74,73];
// Here ww[0] - ww[1] is not minus its comparison
// let max_delta = Math.abs(ww[0] - ww[1]);
// console.log(max_delta)//The differencen between 70 and 72 output:2;
// for(let i=0; i<ww.length-1; i++){
//     let temp1 = ww[i];
//     console.log(temp1);
//     let temp2 = ww[i+1];
//     console.log(temp2);
//     let delta = Math.abs(ww[i] - ww[i+1]);
//     // console.log(delta); //output: 2 2 3 9 0 1 NAN
//     if(delta>max_delta){
//         max_delta=delta;
//     }
   

// }
// console.log(max_delta);




// finding the sexond height value of an array
// const arr = [11,2,44,7,6,25,19,47,10];
// const getLargestNumber = (arr = [] ) => {
//     let largestNumber = arr[0];
//     for(let i=0; i< arr.length; i++){
//         if(arr[i]> largestNumber){
//             largestNumber = arr[i];

//         }
//     }
//     return largestNumber;

// }
// let total = getLargestNumber();







// Js functions Basic Starts
function adder(a,b){
    let sum = a+b;
    return sum;
}
let toral = adder(4,6);
console.log(toral);
// Js functions Basic Ends.

// Function calling and declaration starts
function myFunction(){
    console.log('Function in js is important');
    console.log('-------------');
    console.log('Add Modified Info');
}
console.log('I love javascript');
myFunction();
myFunction();
myFunction();
myFunction();

// Function calling and declaration Ends



// Local and global variable starts
// The variable which is created inside the function 
// and can use only inside this specific function is
// is known as local variable.
// let age = 25;
// function myfun(){
//     let age = 25;
//     console.log(age);
// }
// myfun();
// console.log(age);




// Local and global variable Ends


// function parameter and argument
// function printName(firstName, lastName){
//      firstName = "Abdul";
//     lastName = "Alim";
//     console.log(firstName + ' ' + lastName);
// }
// let firstName = 'Shakhawat';
// let lastName = 'Hossain';
// printName(firstName,lastName );
// console.log(firstName);
// console.log(lastName);

// function saySumthing(){
//     console.log("Hollo Saima");
//     return 1;
// }
// console.log(saySumthing());

// let sum = (n1, n2) => n1+n2;
// console.log(sum(1,5));
// console.log(sum);






// Arrow functions
function myfunc(){
    console.log("Hello");
}
myfunc();
// Next modified function
let hello = function(){
    console.log("Hello Function");
}
hello();

// Latest ES6 methods of function
let hi = () => console.log("Hello Arrow function");
hi();


let add = (a,b) => a+b;
console.log(add(3,5));




// Js functions Basic Ends



