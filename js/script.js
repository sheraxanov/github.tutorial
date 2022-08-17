"use strict";
// let number = 10;
// const  borderColor = "red";
// console.log(number);

// number = 20;
// console.log(number);
// // let - qiymatini o'zgartirish mumkin//

// // const - ham o'zgartirish mumkin.//
// const person = {
//   name: "shoxrux",
// };
// person.name = "samar";
// console.log(person);




   //number
   let number = 5.6;

   console.log(-8 / 0); //infinity - cheksizlik
   console.log("samar" * 8); //NaN - qiymat chiqmaydi

   //string
   const clientName = "samar";

   // boolean - ha yoki yoq
   const isMarried = true;
   //true = ha | togri
   //false = yoq | notogri

   // null
   console.log('clientAge'); //yoq ozgaruvchini chaqirsa null

   //undefiend
   let und;
   console.log(und); // ozgaruvchiga qiymat berilmasa undefined

   //object
   const thief = {
   // key: value
      age:30, //number
      jacket: "black", //string
      isLong: false, // boolean
   };

   console.log(thief.age);

   //array  masssiv
   //son bn caqramz  0       1        2      3   4   5
   const colors = ["red", "black", "green", 10, [], {}];
   colors[1] = "blue";
    console.log(colors);