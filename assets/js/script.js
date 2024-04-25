// // "use strict";

// // let person = {
// //     name: "Nurlan",
// //     surname: "Umudov",
// //     age: 22
// // }



// // document.querySelector("h1").innerText = person.name

// // // console.log(person.name)

// // // let datas = [
// // //     {
// // //         name: "Fatime",
// // //         surname: "Qayxanova",
// // //         groups:[
// // //             "PB101",
// // //             "P314"
// // //         ],
// // //         teachers:[
// // //             "Cavid",
// // //             "Hemid"
// // //         ]
// // //     }
// // // ]

// // let datas = [
// //     {
// //         name: "Fexriyye",
// //         surname: "Tagizade",
// //         groups: [
// //             "PB101",
// //         ],
// //         teachers: [
// //             "Cavid",
// //         ]
// //     },
// //     {
// //         name: "Afide",
// //         surname: "Veliyeva",
// //         groups: [
// //             "PB101",
// //             "PB312",
// //         ],
// //         teachers: [
// //             "Cavid",
// //             "Elcin"
// //         ]
// //     }
// // ]

// // console.log(datas)

// // let surname = "Tagizade";

// // console.log(surname.length)

// // console.log(surname.toLowerCase())
// // console.log(surname.toUpperCase())
// // console.log(surname.trim())

// // console.log(surname.startsWith("T"))

// // console.log(surname.lastIndexOf("a"))
// // console.log("adawdawdawdwaddadawdadawawd".substring(0,10) + "...")

// // for (let i = 0; i < surname.length; i++) {
// //     const element = surname[i];
// //     console.log(element)
// // }

// // console.log(surname.includes("t".toUpperCase()))

// // let surname = "Tagizade Fexriyye";

// // let array = surname.split(" ");
// // console.log(array)

// // let surname = "Azerbaycan";

// // console.log(surname.charAt(1))


// // console.log(surname.charCodeAt("T"))

// // console.log(surname.slice(1.3))

// let fullName = "Azerbaycan";

// // console.log(surname.replace("Azerbaycan","Italiya"))

// // let person =
// // {
// // name: "Nurlan",
// // surname: "Umudov",
// // age:22
// // }
// //     // console.log(key)
// //     // console.log(person[key])
// // for (const key in perosn)
// // {
// //     if(key == "name" || key ==  surname)
// //     {
// //         console.log(person[key])
// //     }
// // }



// // let b;
// // let a = null;

// // console.log(b);
// // console.log(a);
// // console.log(a + b);


// // let numbers = [30,6,8,9,30,5];
// // let sum = 0;
// // for (let i = 0; i < numbers.length; i++) {
// //     sum += numbers[i];

// // }
// // console.log(sum)

// // let isTrue = true;

// // if(ifTrue)
// // {
// //     //let
// //     var surname = "Fexriyye";
// // }

// // console.log(surname)


// // const data = "Product1";


// // let numbers = [30,6,8,9,30,5];

// // let data = numbers.length

// // numbers.forEach

// // numbers.forEach(element => {
// //     console.log(element + " " + i)    
// // });

// // let data = nums.toString();

// // let data = nums.join("-");



// // nums.pop();
// // nums.push(100);
// // nums.shift();


// let nums = [30,6,8,9,30,5];
// // nums.unshift();

// console.log(nums)

// const myGirls = ["Celine", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myCildren = myGirls.concat(myBoys);

// console.log(myCildren)

// let address = "Ehmedli";
// let result = [...address];
// console.log(result) 

// let obj = 
// {
//     name: "test",
//     surnama: "testov"
// }

// let data = {...obj};
// console.log(data)


// let nums = [30,6,8,9,30,5];
// let datas = [...nums];

// console.log(datas)

// function showText()
// {
//     let a = 100;
//     if(a > 50)
//     {
//         console.log("Hello world")
//     }

// }
// function showText(text)
// {
//     console.log(text)
// }
// showText("salamlar ");

// function sum(a,b)
// {
//     let result = a + b
//     console.log(result)
// }

// sum(100,200) 


// let datas = [1,2,100,5,500,9,550];

// function findData(arr)
// {
//     for (const item of arr)
//     {
//         if (item == 100)
//         {
//             console.log("100 already found");
//             return;
//         }
//     }

//     console.log("Welcome to  our site")
// }

// findData(datas)

// function sum(a,b)
// {
//     return a + b;
// }
// result = sum(4,5)
// console.log(result);

// document.querySelector("h1").innerText = result;


// let datas = [1,2,100,5,500,9,550];
// function test(arr)
// {
//     arr[0] = 100;
//     console.log(arr);
// }
// test(datas);
// console.log(datas);


// let b = 100;
// function test(a)
// {
//     a = 20;
//     console.log(a);
// }
// test(b);
// console.log(b);


// let datas = [1,2,3,4,5,5,1,23,12];
// let newArr = ["salam","sagol"];

// datas = newArr;

// newArr[0] = 100;

// console.log(datas);

// console.log(newArr);


// function test(...datas) {
//     for (let i = 0; i < datas.length; i++) {
//         const element = datas[i];
//         console.log(element)
//     }
// }

// test(1,3,4,5,8,4)
 
// function test()
// {
//     for (let i = 0; i < arguments.length; i++) {
//         const element = arguments[i];
//         console.log(element)
//     }
// }
// test(1,3,4,5,7,4,7)

// arguments.array.forEach(element => {
//     console.log(element)
// });


// function test(a,...datas) {
// datas.forEach(element => {
//     console.log(element)
// });
// }

// test(1,3,4,5,8,4)

// const showText = (text) =>
// {
//     console.log(this)
// }
// showText("Nesir bey")


// function showNumber()
// {
//     console.log(this)
// }

// console.log(this)

// let student ={
//     name:"Reshad",
//     surname:"Agayev",
//     age:21,
//     address:"Neftciler",
//     getFullName:function()
//     {
//         console.log(this)
//     },
//     getFullData:() =>
//     {
//         console.log(this.name + " " + this.surname)
//     }
// }

// student.getFullName();
// student.getFullData();


// let student = 
// {
//     name:"Reshad",
//     surname:"Agayev",
//     age:21,
//     address:"Neftciler",
//     getFullName:function()
//     {
//         console.log(this)
//     },
//     getFullData:()=>{
//         console.log("Welcome")
//     }

// }
// student.getFullName();
// student.getFullData();

// const test = () => {
//     for (let i = 0; i < arguments.length; i++) {
//         const element = arguments[i];
//         console.log(element)

//     }
// }


// test(1,2,3,4,5)


// function test() {
//     for (let i = 0; i < arguments.length; i++) {
//         const element = arguments[i];
//         console.log(element)

//     }
// }


// test(1,2,3,4,5)


// console.log(this)

// this.alert


// document.querySelector("button").addEventListener("click",function()
// {
// // this.style.backgroundColor = "red"

// window.location.reload()
// })