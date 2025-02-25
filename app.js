// class assignment
// ARRAYS (start)

// Q1
// let studentName = [];
// studentName.push('jawwad','mughal');
// console.log(studentName);

// Q2
// const studentNames = new Array();
// studentNames.push('jawwad','mughal');
// console.log(studentNames);

// Q3
// let fruits = ['apple','banana','orange'];
// console.log(fruits);

// Q4
// let num = [2,5,3];
// console.log(num);

// Q5
// let boolean = [false,true,true];
// console.log(boolean);

// Q6
// let mixedArray= ['imran khan',21,true,null,undefined];
// console.log(mixedArray);

// Q7
// let education = ['SSC','HSC','BCS','BS','BCOM','MS','M.PHIL.','PHD'];
// console.log(education);

// Q8
// let studentName = ['Micheal', 'John', 'Tony'];
// let studentMarks = [320, 230, 480];
// let totalMarks = 500;
// for(let i = 0; i < studentMarks.length; i++){
//     let name = studentName[i];
//     let score = studentMarks[i];
// let percentage = (score / totalMarks) * 100;
// console.log(`Name: ${name}, Score: ${score}, Percentage: ${percentage}%`);
// }

// Q9
// step1
let colors = ['red', 'blue', 'orange', 'yellow'];
console.log("Initial colors array:", colors);

// a)
// let userColorNameInput = prompt("What color do you want to add to the beginning of the array?");
// colors.unshift(userColorNameInput);
// console.log("After adding to the beginning:", colors);

// b)
// let newColorEnd = prompt("What color do you want to add to the end of the array?")
// colors.push(newColorEnd);
// console.log("After adding to the end:", colors)

// c)
// colors.unshift("Orange", "Cyan");  
// console.log("After adding two more colors to the beginning:", colors); 

// d)
// let message;
// let userDelectColor = prompt('Deleting the first color').toLowerCase()
// if(userDelectColor === 'red'){
// colors.shift(userDelectColor);  
//  message = `After delecting first color ${colors}.`
// }else {
//     message = `This first color name is not match. ${userDelectColor} `
// };
// console.log(message);

// E)
// let message;
// let userDelectColor = prompt('Deleting the last color').toLowerCase()
// if(userDelectColor === 'yellow'){
// colors.pop(userDelectColor);  
//  message = `After delecting first color ${colors}.`
// }else {
//     message = `This last color name is not match. ${userDelectColor} `
// };
// console.log(message);

// F)
// let indexToAdd = parseInt(prompt("At which index do you want to add a color?"));  
// let colorToAdd = prompt("What color do you want to add?");  
// colors.splice(indexToAdd, 0, colorToAdd);  
// console.log("After adding color at index", indexToAdd, ":", colors); 

// G)
// let indexToDelete = parseInt(prompt("At which index do you want to delete color(s)?"));  
// let numberToDelete = parseInt(prompt("How many colors do you want to delete?"));  
//  colors.splice(indexToDelete, numberToDelete);  
//  console.log("After deleting", numberToDelete, "colors from index", indexToDelete, ":", colors);

//  Q11
// let cities = ['Karachi','lahore','Islamabad','Peshawar','Quetta'];  
// let selectedCities = cities.slice(0, 3);
// console.log("Original Cities: ", cities);  
// console.log("Selected Cities: ", selectedCities);

// Q12
// var arr = ["This ", " is ", " my ", " cat"];  
// var result = arr.join('');
// console.log(result);

// Q13

// var fifoArray = [];  
// fifoArray.push("First");  
// fifoArray.push("Second");  
// fifoArray.push("Third"); 
// let print;
// for(let i = 0; i < fifoArray.length; i++){
//      print = fifoArray[i]; 
//      console.log(print);
// }

