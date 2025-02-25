// class assignment (start)
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

// class assignment (end)
// home assignment (start)

// Chapter 15 (Array I) (Start)

// Q1
// let declare = [];

// Q2
// let arr = ['Hello world'];
// console.log(arr);

// Q3
// var alphabet =['h','i','j','k'];
// alert(alphabet[2]);

// Q4
// var alphabet =['h','i','j','k','l','m','n','o'];
// alert('Total lenght = '+ (alphabet.length));

// Q5
// var myArray = ['First Element'];
// myArray[1] = 'Second Element';
// alert(myArray[1]);

// Chapter 15 (Array I) (End)

// Chapter 16 (Array II) (start)
// Q1
// let arry = ['Hello'];
// arry.push('world');
// console.log(arry);

// Q2
// var alphabet = ['h','i','j','k'];
// alphabet.pop();
// console.log(alphabet);

// Q3
// var alphabet = ['h','i','j','k'];
// alphabet.push(5);
// console.log(alphabet);

// Q4
// var sizes = ['S','M','XL','XXL','XXXL'];
// sizes.shift();
// console.log(sizes);

// Q5
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.unshift(1,2,3);
// console.log(sizes);

// Q6
// let arry = [2];
// arry.unshift(1);
// alert(arry);

// Q7
// var sizes = ["S", "M", "XL", "XXL", "XXXL"]; 
// sizes.splice(2,0,'L')
// console.log(sizes);

// Q8
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];  
// var regSizes = sizes.slice(0, 3);
// console.log(sizes);
// console.log(regSizes);

// Q7
// var pets = ['dog','cat','ox','duck','frog'];
//  pets.splice(1, 3 , 'Hamster', 'Rabbit');
// console.log(pets);

// Q8
// var pets = ['dog','cat','ox','duck','frog'];
// pets.splice(1, 2);
// console.log(pets);

// Q9
// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];  
// var reducedPets = pets.slice(3,5);
// console.log(pets);
// console.log('Reduced pets array: ' + reducedPets);
// Chapter 16 (Array II) (End)

// home assignment (end)

