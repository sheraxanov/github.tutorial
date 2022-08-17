"use strict";

//string oldiga + qo'ysa number bo'ladi

 console.log("samar" + " " + "badri");

 console.log(6 + "9");

 // incr bu 1 tadan qo'shib beradi
 // decr bu 1 tadan ayirib beradi

 let incr = 10;
 let decr = 10;

  console.log(incr++); // birinchi defolt qiymatd\n boshlanadi
 console.log(decr--);

  console.log(incr++);
 console.log(decr--);

  console.log(incr);
 console.log(decr);

 // prefiks bu o'zgaruvchidan oldin ++  yoki -- qo'yiladi


 let incer = 10;
 let decer = 10;

 console.log(++incer);
 console.log(--decer);
 console.log(incer++);
 console.log(decer--);

 console.log(incer);
 console.log(decer);

//foiz bilan ishlash
 console.log(5 % 2);

 //tenglashtirish ikkita == belgi bilan ishlaydi bunda faqat qiymatiga qaraydi

 console.log(5 * 5 == 25);

// agar 3 ta === belgi qo'yilsa ham qiymat ham ma'lumot turiga qaraydi
 console.log(5 * 5 === "25");


 // && = va  || = yoki
// && bo'lganda ha javob bo'lishi uchun hammasi true bolishi kerak
// || bo'lganda bitta true bolsA yetadi
// ! belgi o'zgaruvchini qiymatini teskari qiberadi
 const age = false;
 const clos = true;
 const checked = false;

 console.log(age || clos || checked);




 console.log(2 + 2 * 2 !== 6);

 console.log(5 * 6 + 5 !== 36);