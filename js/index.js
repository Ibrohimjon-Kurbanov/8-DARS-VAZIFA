// FOR VA TERNARY

// 1-MASALA

// for (let i = 1; i <= 50; i++) {
//   let res =
//     i % 3 == 0 && i % 5 == 0
//       ? "3 va 5 ga bo'linadi"
//       : i % 3 == 0
//       ? "3 ga bo'linadi"
//       : i % 5 == 0
//       ? "5 ga bo'linadi"
//       : "";
//   console.log(`${i} - ${res}`);
// }

// 2-MASALA

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i >= 30 && i <= 70) {
//     let res = i % 2 == 0 ? ((sum += i), `${i} - Juft son`) : `${i} - Toq son`;
//     console.log(res);
//   }
// }

// console.log(`Juft sonlar yeg'indisi: ${sum}`);

// 3-MASALA

// let sum = 0;

// for (let i = -20; i <= 20; i++) {
//   i > 0 && i % 2 !== 0 ? sum++ : sum;
// }

// console.log(`Musbat va toq sonlar yeg'indisi: ${sum}`);

// 4-MASALA

// for (let i = 1; i <= 100; i++) {
//   let res = i % 2 == 0 || i % 7 == 0 ? `${i} - maxsus son` : String(i);
//   console.log(res);
// }

// Break continue

// 1-MASALA

// for (let i = 1; i <= 100; i++) {
//   if (i === 25) {
//     break;
//   }
//   console.log(i);
// }

// 2-MASALA

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// 3-MASALA

// for (let i = 1; i <= 50; i++) {
//   if (i > 30) {
//     break;
//   }
//   if (i < 10 || i > 30) {
//     continue;
//   }
//   console.log(i);
// }

// Switch case

// 1-MASALA

// let day = +prompt("Hafta kun raqamini kiriting:");
// switch (day) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//     console.log("Shanba");
//     break;
//   case 7:
//     console.log("Yakshanba");
//     break;
//   default:
//     console.log("Bunday hafta kuni mavjud emas");
//     break;
// }

// 2-MASALA

// let monthNumber = +prompt("Oylik faslni raqamini kiriting:");

// switch (monthNumber) {
//   case 1:
//   case 2:
//   case 12:
//     console.log("Qish");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Bahor");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Yosh");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Kuz");
//     break;
//   default:
//     console.log("Bunday oylik fasl raqami mavjud emas");
// }

// 3-MASALA

// let baho = +prompt("Baho raqamini kiriting:");

// switch (baho) {
//   case 1:
//     console.log("Juda yomon");
//     break;
//   case 2:
//     console.log("Yomon");
//     break;
//   case 3:
//     console.log("Qoniqarli");
//     break;
//   case 4:
//     console.log("Yaxshi");
//     break;
//   case 5:
//     console.log("A'lo");
//     break;
//   default:
//     console.log("Bunday baho raqami mavjud emas");
//     break;
// }

// 4-MASALA

// let num = +prompt("Elektr energiya tarif raqamini yozin");

// switch (num) {
//   case 1:
//     console.log("Ekonom");
//     break;

//   case 2:
//     console.log("Standart");
//     break;
//   case 3:
//     console.log("Premium");
//     break;

//   default:
//     console.log("Bunday tarif raqamini mavjud emas");
//     break;
// }

// 5-MASALA

// let numFruit = +prompt("Meva raqamini kiriting:");

// switch (numFruit) {
//   case 1:
//     console.log("Olma");
//     break;
//   case 2:
//     console.log("Apelsin");
//     break;
//   case 3:
//     console.log("Banan");
//     break;
//   case 4:
//     console.log("Uva");
//     break;
//   default:
//     console.log("Bunday meva raqami mavjud emas");
// }

// 6-MASALA

// let password = +prompt("Variant");

// switch (password) {
//   case 1:
//     console.log("Parolni tiklash");
//     break;
//   case 2:
//     console.log("Parolni o'zgartirish");
//     break;
//   case 3:
//     console.log("Chiqish");
//     break;

//   default:
//     console.log("Bunday variant mavjud emas");
//     break;
// }

// While, do…while.

// 1-MASALA

//  While

// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// Do while

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// 2-MASALA

// WHILE

// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// Do while

// let i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i >= 1);

// 3-MASALA

// WHILE;

// let num = null;
// while (num == null || num < 0) {
//   num = +prompt("Musbat son kiriting: ");
// }
// console.log(num);

// DO WHILE

// let num;
// do {
//   num = +prompt("Musbat son kiriting: ");
// } while (num <= 0);

// console.log(num);

// 4-MASALA

// WHILE;

// let i = 2;
// while (i <= 20) {
//   console.log(i);
//   i += 2;
// }

// DO WHILE

// let i = 2;
// do {
//   console.log(i);
//   i += 2;
// } while (i <= 20);

// 5-MASALA

// WHILE

// let num = +prompt("Son kiriting:");
// let sum = 0;

// while (num > 0) {
//   let res = num % 10;
//   sum += res;
//   num = Math.trunc(num / 10);
// }

// console.log(sum);

// DO WHILE

// let num = +prompt("Son kiriting:");
// let sum = 0;

// do {
//   let res = num % 10;
//   sum += res;
//   num = Math.trunc(num / 10);
// } while (num > 0);

// console.log(sum);

// 6-MASALA

// WHILE

// let num = +prompt("Sonni kiriting:");

// while (num >= 1) {
//   console.log(num);
//   num = num / 2;
// }

// DO WHILE

// let num = +prompt("Sonni kiriting:");

// do {
//   console.log(num);
//   num = num / 2;
// } while (num >= 1);

// 7-MASALA

// WHIle

// let num = +prompt("Sonni kiriting:");

// while (num > 0) {
//   let res = num % 10;
//   if (res % 2 != 0) {
//     console.log(res);
//   }
//   num = Math.floor(num / 10);
// }

// DO WHILE

// let num = +prompt("Sonni kiriting:");

// do {
//   let res = num % 10;
//   if (res % 2 != 0) {
//     console.log(res);
//   }
//   num = Math.floor(num / 10);
// }
// } while (num > 0);

// 8-MASALA

// WHILE

// let start = +prompt("1-sonni kiriting:");
// let end = +prompt("2-sonni kiriting:");

// while (start <= end) {
//   if (start % 3 === 0) {
//     console.log(start);
//   }
//   start++;
// }

// DO WHiLE

// let start = +prompt("1-sonni kiriting:");
// let end = +prompt("2-sonni kiriting:");

// do {
//   if (start % 3 === 0) {
//     console.log(start);
//   }
//   start++;
// } while (start <= end);

// 9-MASALA
// WHILE

// let num = +prompt("Sonni kiriting:");
// let numReverce = 0;

// while (num > 0) {
//   let res = num % 10;
//   numReverce = numReverce * 10 + res;
//   num = Math.trunc(num / 10);
// }

// console.log(numReverce);

// DO WHILE

// let num = +prompt("Sonni kiriting:");
// let numReverce = 0;
// do {
//   let res = num % 10;
//   numReverce = numReverce * 10 + res;
//   num = Math.trunc(num / 10);
// } while (num > 0);

// console.log(numReverce);

// 10-MASALA
// WHILE
// let num = +prompt("Sonni kiriting:");

// let a = 0,
//   b = 1;
// console.log(a);

// while (b <= num) {
//   console.log(b);
//   let res = a + b;
//   a = b;
//   b = res;
// }

// DO WHILE

// let num = +prompt("Sonni kiriting:");

// let a = 0,
//   b = 1;
// console.log(a);

// do {
//   console.log(b);
//   let res = a + b;
//   a = b;
//   b = res;
// } while (b <= num);
