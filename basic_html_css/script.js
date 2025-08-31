// let num = 12;
// let num1 = 12.12;
//
// let newStr = num.toString();
// "12"
// newStr="12"

// console.log(typeof num);
// console.log(typeof newStr);
// console.log(typeof parseInt(newStr)); //12))
// console.log(parseFloat(newStr)); //12.12));

// 2......20
// 3......30
// 4......36

// let num = 4;
// 1,10
// for (let a = 1; a <= 10; a++) {
//   console.log(a * num);
//   if (a * num === 36) {
//     break;
//   }
// }
//
/**
for (let a = 1; a <= 10; a++) {
  for (let b = 1; b <= 10; b++) {
    if (a * b === 42) {
      break;
    }
    console.log(a * b);
  }
}
*/
//Write a program to print a table/

// let arr = ["prashant", "pawar", 7909771179, true, null, undefined];
// right_to_left
// let newStr = arr.toString();
// console.log(newStr);
// console.log(typeof newStr);
// console.log(newStr[0]); //string
// for (let i = 0; i <= 7; i++) {
//   console.log(newStr[i]);
// }
// for (let x of newStr) {
//   console.log(x);
// }

//everything in js is obj
// console.log(typeof arr);

// for (let a of arr) {
//   console.log(a);
// }
// let obj = {
//   gender: "Male",
//   name: "prashant",
//   last_name: "pawar",
//   number: 7909771179,
// };
// console.log(typeof obj);
// console.log(Array.isArray(obj)); //false)
// console.log(Array.isArray(arr)); //true)
// for (let key in obj) {
//   console.log(key, "     ", typeof key); //key

//"gender"
//obj.key  =>      obj."gender"
//obj[key]
// console.log(obj[key]);
// }

// let obj = {
//   name: "prashant",
//   last_name: "pawar",
// };

// const obj1 = {
//   name: "amish",
//   age: 5,
// };

// let arr = ["a", "b", "c"];

// let str = "abc";
// let num = 1;

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof obj);
// console.log(typeof arr);

// let a = 10;
// let b = 10;
// if (a == 11) {
//   console.log("true");
// } else if (a == 12) {
//   console.log("false");
// } else {
//   console.log("jo bhi he thik he ");
// }
// let num = 13;
//write a program to find even or odd number

// if (num % 2) console.log("odd");
// else console.log("even");

// let arr = [
//   "prashant",
//   7909771179,
//   true,
//   { name: "prashant", phone_nu: "7909771179" },
//   [9797997, "prashda", true],
// ];
// console.log(typeof arr[0]);
// console.log(typeof arr[1]);
// console.log(typeof arr[2]);
// console.log(arr[3].phone_nu); //prashant
// console.log(arr[4][2]); //sakshi

// let weekday = "1";   //strict comparison

// switch (weekday) {
//   default:
//     console.log("give me correct weekday ");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tues");
//     break;
//   case 3:
//     console.log("wed");
//     break;
//   case 4:
//     console.log("thrus");
//     break;
//   case 7:
//     console.log("sunday");
//     break;
//   case 5:
//     console.log("fri");
//     break;
//   case 6:
//     console.log("sat");
//     break;
// }

//loop => loops are used to repeat the code until the conditions are satisfied

/**
 * while(condition){
 *
 *
 *
 * }
 *
 * do{
 *
 *
 *
 * }while(condition)
 *
 *
 *
 *
 */
// let a = 2;
// while (a <= 0) {
//   console.log(a);
//   a = a + 2;
// }
//a  =2   2    a=4   false

// do {
//   console.log(a);
//   a = a + 2;
// } while (a <= 4);

// for (let a = 2; a <= 20; a = a + 2) {
//   console.log(a);
// }

//write a program to print table of given number

// let table_num = 9;

// for (let a = 1; a <= 10; a++) {
//   console.log(table_num * a);
// }

//write a program to print data type of array

// let arr = [123, "prashatn", true];
//          0      1         2
//arr.length   3
//3-1
// arr.push("last number");
// arr.push("another");
// console.log(arr);

// for (let a = 0; a <= arr.length - 1; a++) {
//   console.log(typeof arr[a]);
// }

// let a = 2;
// for (let a = 2; a <= 100; a++) {
//   console.log(a);
// }

// console.log(a);
// 0 ,1,2,3,4,
// let obj = {
//   name: "prashant",
//   last_name: "pawar",
//   mobile: "7909771179",
//   age: 25,
// };
// console.log(obj.name);
// console.log(obj["last_name"]);

// the for in loop is used to iterate over the properties of an object

// for (let key in obj) {
//   console.log(obj[key]);
// }
// let arr = ["bmw", "maruti", "mahindra", "toyota"];
// for (let a = 0; a < arr.length; a++) {
//   console.log(arr[a]);
// }

// for (let b of arr) {
//   console.log(b);
// }

// function calculateAre(width, height) {
//   return width * height;
// }
//
// let area = calculateAre(10, 8);
// console.log(area);
//

// const obj = {
//   make: "toyota",
//   model: "fortuner",
//   year: 2023,
//   displayCarInfo: function () {
//     console.log(`My car is a ${this.make} ${this.model} from ${this.year}`);
//   },
// };
//
// console.log(obj.model); // Accessing property using dot notation
// obj.year = 2025; // Modifying property value
// console.log(obj); // Accessing property using bracket notation
// obj.displayCarInfo();

// const rand = Math.random(); // Generates a random number between 0 (inclusive) and 1 (exclusive)
// const flooredRand = Math.floor(rand * 100); // Multiplies by 100 and floors the result
// const ceiledRand = Math.ceil(rand * 100); // Multiplies by 100 and floors the result
// console.log(rand); // Output the random number
// console.log(flooredRand); // Output the random number
// console.log(ceiledRand); // Output the random number

// let choice = ["rock", "paper", "scissors"];
// function computerChoice() {
//   const randomIndex = Math.floor(Math.random() * 3);
//   console.log(randomIndex);
//   console.log("Computer choice: " + choice[randomIndex]);
// }
// computerChoice();

let obj = {
  fname: "prashant",
  lname: "pawar",
};

let arrowfunct = () => {
  console.log("hello world");
};
arrowfunct();
function fun() {
  console.log("hello world");
}
fun();

let func = function () {
  console.log("hello world");
};
func();
