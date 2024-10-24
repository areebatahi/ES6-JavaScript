//_____________________________________Advance JavaScript________________________
// __________ 1. ______ Variable Scoping_________________
// variable name is'nt

//___a.___ var is global scope but in function its preform block scope
// var fName = "Tahir";

//___b.___ let is block scope in function, is, array, etc. it is resign beacuse its showns error  but not change value like:
// let lname = "Hussain";
// let lname = ".";
// lname = "areeba";
// console.log(lname);

//___c.___ const is block scope in function, is, array, etc. it is not resign and change value beacuse its showns error like:
// const fullName = "Muhammad Tahir Hussain";
// fullName = "Areeba tahir";
// console.log(fullName);


// __________ 2. ______Closure_________________
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

// function func(){
//     let a = 10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// func()


// __________ 3. _____Template literals_________________
// use for concentenate eith html and text like:
// let fName = "Tahir";
// console.log(`My name is ${fName}`);


// __________ 4. _____Default parameter_________________
// use for set default value in parameter. if user is not fill parameter value so shown defualt value else fill so shown whose value like:
// function defaultParameter(a = 1) {
//     return a
// }
// console.log(defaultParameter());


// __________ 5. _____Rest parameter_________________
// use for get all parameter in array or user enter many value so get this method like:
// let arr = [3, 4, 5, 6, 7, 8, 9];
// function restparameter(a, b, ...arr) {
//     console.log( a, b, arr);
// }
// restparameter(1, 2, ...arr)


// __________ 6. _____Arrow Function_________________
// use for short function. it work same like:
// let arrowFunction = (para /* parameter */) => {
//     console.log(`Hello World! ${para}`);
// }
// arrowFunction("Areeba Tahir");


// __________ 7. _____Enhance object literals_________________
// if value and key are same so i wrote like:
// let fname = "areeba";
// let lname = "tahir";
// let email = "areebatahirarain@gmail.com";
// let obj = { fname, lname, email };
// console.log(obj);


// __________ 8. _____Iterator_________________
// itrator use for read all values in array and you control array
// let num = [1,2,3];
// let itr = num[Symbol.iterator]();
// console.log(itr.next());
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log(itr.next());
// console.log(itr.next());
// console.log("hi");
// console.log(itr.next());
// console.log("hi");


// __________ 9. _____For..of_________________
// it work as loop
// let arr = ['a','b','c'];
// for(let element of arr){
//     console.log(element);
// }


// __________ 10. _____Generator_________________
//The function* declaration creates a binding of a new generator function to a given name. A generator function can be exited and later re-entered, with its context (variable bindings) saved across re-entrances.
// You can also define generator functions using the function* expression.
// function* generator(num) {
// console.log(num);
// yield "hello2"
// }
// let gen = generator(3);
// console.log(gen.next());


// __________ 11. _____Modules_________________
// import {ourClass,modules} from "./file1.js"
// import  abc from "./file1.js"
// console.log(abc);
// console.log(ourClass,modules);


//____________ 12. _____Map Method _____________
//its retuen new array. map methd use for making new array in pervious array value like this:

// 1.  if generate new array with new value
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let returnArr = arr.map(test);
// console.log(returnArr);
// function test(value) {
//     return value * 10;
// }

// 2.  if any value of pervious array add in new array
// let aryObj = [
//     { name: "Yahoo", age: 25 },
//     { name: "Rahul", age: 36 },
//     { name: "Karan", age: 18 }
// ];
// let returnArr1 = aryObj.map(test);
// console.log(returnArr1);
// function test(value) {
//     return `${value.name} ${value.age}`;
// }


// ___________________________ 13. _____Array methods_________________
//____________ a. _____Filter Method
//filter method makes new array and check value one by one with condition in array.
// let age = [10, 16, 19, 20];
// console.log(age);
// let b = age.filter(checkAdult);
// function checkAdult(age) {
//     return age >= 18;
// }
// console.log(b);


//____________ b. _____Reduce Method
//Initial Value: initialValue = 0 sets the starting value for the sum to 0.
// Using reduce():   reduce() goes through each item in the array and adds them together. It takes two parameters: accumulator: this keeps the running total (starting at initialValue which is 0). currentValue: this is the current number from the array being added to the total.
//  First, 0 (initial value) is added to 1, making 1. Then 1 is added to 2, making 3. Next, 3 is added to 3, making 6. Finally, 6 is added to 4, making 10.
// let arr = [1, 2, 3, 4,5];
// let initialize = 0;
// let sumOfInitailize = arr.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue
// }, initialize);
// console.log(sumOfInitailize);


//____________ c. _____Sort Method
//sort method use for sorting array in ascending or descending order.
//arr.sort(function (a, b) { return a - b }); – This sorts the array. The sort() method takes a function that compares two numbers, a and b. If a - b is negative, it means a should come before b. If positive, b should come first. If zero, they stay in the same order.
// let arr = [1, 50, 26, 800, 1000, 95];
// console.log(arr.sort(function (a, b) {
//     return a - b
// }));


//____________ d. _____Find Method
//find method use for finding value in array. find() method return the value of the first element in an array that pass a test.
// find method return first true value in the array like:
// let ages = [10, 16, 19, 20];
// let b = ages.find(checkAdult);
// console.log(b);
// function checkAdult(age) {
//     return age>=18
// }


//____________ e. _____Find Index Method
//find Index method use for finding index in array. find() method return the value of the first element index in an array that pass a test
// find method return first true index in the array like:
// let ages = [10, 16, 19, 20];
// let b = ages.findIndex(checkAdult);
// console.log(b);
// function checkAdult(age) {
//     return age>=18
// }


//____________ f. _____Every Method
//This function takes a number (currentValue) and checks if it's less than 40. It returns true if the number is less than 40, otherwise it returns false.

// let ages = [10, 16, 19, 20];
// let b = ages.every(checkAdult);
// console.log(b);
// function checkAdult(value) {
//     return value < 40;
// }


//____________ g. _____Some Method
// const even = (element) => element % 2 === 0;: This defines a function called even that checks if a number is even. It does this by dividing the number by 2 (% 2) and seeing if the remainder is 0 (which means it's even).
// array.some(even): This checks if at least one number in the array is even by using the some method. The some method goes through each number in the array and applies the even function to check if any of them are even.
// console.log(array.some(even));: This prints true to the console because there is at least one even number in the array (2 and 4)
// let arr = [1, 2, 3, 4, 5];
// let b = arr.some(even);
// function even(value) {
//     return value % 2 === 0;
// }
// console.log(b);


//____________ h. _____Fill Method
// fill method use for replace all values in array like:
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.fill("areeba"));


// __________ 14. _____Call back_________________
// function myFunc2(){
//     console.log("I am func 2");
// }
// function myFunc(Callback){
//   console.log(Callback);
//   Callback()
// }
// myFunc(myFunc2)


// __________ 15. _____Promises_________________
// let meetingPromise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let weatherCondition = "barish horhe hai"
//         },1500)
//     if(weatherCondition == "barish horhe hai"){
//         reject("dosre din chle jaengen")
//     }
//     else{
//         resolve("hurrahhhh hm jare hain")
//     }
//     })
//       meetingPromise.then((message)=>{
//     console.log(message);
//     }).catch((error)=>{
//         console.log(error);
//     })


// __________ 16. _____Higher order function_________________
// Function returning Function
// function outerFunction(){
//     function innerFunction(){
//         console.log("Hello World"); 
//       }
//   return innerFunction
// }
// outerFunction()
// const ans = outerFunction()
// ans()


// __________ 17. _____Exponentiation operator_________________
// function calculatePower(exp){
//     return function(base){
//         return base ** exp
//     }
// }
// const cube = calculatePower(3)
// console.log(cube(5));//8


// __________ 18. _____Conditional (ternary) operator_________________
// let age = 14
// let drink;
// if(age>=5){
//     drink = "Tea"
// }else{
//     drink = "Milk"
// }
// console.log(drink);

// let drink2 = age >=5 ? "Tea ": "Milk"
// console.log(drink2);

//Type coercion
// console.log(true + 1)


// __________ 19. _____Optional chaining_________________
// const shabana={
//     location:"korangi",
//     age:20,
//     skills:["one cycling","wearing abaya"],
//     street:{
//      galeNO : 420,
//      phoneNUm : "jb milao jb bnd"
//     }
//   }
  
// console.log(shabana?.street?.phoneNUm?.zong?.sim1);
//   console.log(shabana?.street?.phoneNUm?.zong?.sim1);


// __________ 20. _____Destructuring_____________________
// _____________________Array Destructuring
// let arr = [1,2,3]
// // let a = arr[0] // Old Method
// // console.log(a)
// let [a,b,c] =arr
// console.log(a,b,c)

//___________________Object Destructuring
// let {a,b} = { a:1, b:2}
// // console.log(a,b);
// let obj = {
//     name : "Umra",
//     class : 9
// }
// console.log({...obj,name : "Kainat"});
// console.log({name : "Kainat", ...obj}); //Do not update the values


// __________ 21. _____Spread Operator___________
// var arr = [1,2,3,4,5,6,7,8,9]
// var [a,b, ...rest] = arr
// console.log(a,b,rest);

// let arr = [1,2,3]
// function sum(a,b,c){
//     console.log(a+b+c);
// }
// sum(...arr)//Rest Parameter

// __________ 22. _____Function Declaration___________
// function myFunc(name){
//     console.log("Hello "+ name);
// }
// myFunc("Function Declaration")
// //Arrow Function
// myFunc=(name)=>{
//     console.log("Hello "+ name);
// }
// myFunc("Arrow Function")
// //Function Expression
// var myFunc =function(name){
//     console.log("Hello "+ name);
// }
// // myFunc1("Function Expression")
// const funcOutput = myFunc
// funcOutput("Function Expression")
// // console.log(funcOutput);


// __________ 23. _____Object freezing___________
// const person = {
//     name : "Umra",
//     class: 8
// }
// // Object.freeze(person)
// person.name = "Bushra"
// person.gender = "Female"
// delete person.class
// console.log(person);

// let person2 = Object.assign({},person) //Shallow Copy Of Object
// console.log(person2);


// __________ 24. _____Type Of___________
// const arr = [1,2,3]
// const obj = {a:1, b:2}
// // console.log(typeof arr);
// // console.log(typeof obj);

// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));


// __________ 25. _____forEach Method _____________
//for each method or loop use for array . its works like as for loop
// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.forEach(loop);
// function loop(val, index) {
//     console.log(`${index}  ${val}`);
// }
