"use strict";

///////////// 1 task
// function findNumber(n)
// {
//     if(n%3 === 0 && n % 7 === 0 && n > 3)
//     {
//         console.log("bolunur")
//     }
//     else
//     {
//         console.log("bolunmur")
//     }
    
// }
// findNumber()


////////////// 2 Task
// function Faktoreal(n) {
//     if (n < 0) {
//         console.log("neqativ ola bilmez");;
   
//     } else {
//         let result = 1;
//         for (let i = n; i > 0; i--) {
//             result *= i;
//         }
//         console.log(result);
//         return;
//     }
// }
// Faktoreal(-5)

///////////// 3 Task
// function SquaresOfEvenNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             sum += arr[i] * arr[i];
//         }
//     }
//     return sum;
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(SquaresOfEvenNumbers(numbers));

/////////////// 4 Task

// function checkEmailpass(email, pass)
// {
//     const validEmail = "cavid@code.edu.az";
//     const validPassword = "12345";

//     if(email === validEmail && password === validPassword)
//     {
//         console.log("Girish olundu");
//     }
//     else
//     {
//         console.log("Mail ve ya Parol sefdir")
//     }
// }
// checkEmailpass("dwadawawd", 12345)

///////////////////// 5 task
// function SumOddNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

// const numbers = [1, 2,3,4,5,3,3,3];
// const oddSum = SumOddNumbers(numbers);
// console.log("Tək ədədlərin cəmi:", oddSum);

/////////// 6 task

// function countEvenNumbers(arr) {
//     let evenCount = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenCount++;
//         }
//     }
//     return evenCount;
// }
// const numbers = [1,2,3,4,5, 6,8,12];
// const evenCount = countEvenNumbers(numbers);
// console.log("Cüt ədədlərin sayı:", evenCount);

/////////// 7 task
//telebelerin siyahisi array
// function countStudentsInAgeRange(students) {
//     let count = 0;
//     for (const student of students) {
//         if (student.age >= 18 && student.age <= 25) {
//             count++;
//         }
//     }
//     return count;
// }
// const studentArray = [
//     { name: "Ali", surname: "Qasımov", age: 44, email: "ali@node.edu.az" },
//     { name: "Nigar", surname: "Əliyeva", age: 22, email: "nigar@code.edu.az" },
// ];
// const ageCount = countStudentsInAgeRange(studentArray);
// console.log("18-25 yaş aralığındakı tələbə sayı:", ageCount);
// // c herifini yoxlayiram
// function WithEmailContainingC(students) {
//     let count = 0;
//     for (const student of students) {
//         if (student.email.includes("c")) {
//             count++;
//         }
//     }
//     return count;
// }
// const cCount = WithEmailContainingC(studentArray);
// console.log("Emailində 'c' hərifi olan tələbə sayı:", cEmailCount);

///////// 8 Task
function firstIndexToUp(string)
{
    
    return string.charAt(0).toUpperCase() + string.slice(1);
    
}

const text = "cavanshir"
const result = firstIndexToUp(text)
console.log(result);
