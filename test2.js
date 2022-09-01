//🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘ŞƏRTLƏR VƏ QAYDALAR🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘 */
// !HECKES BIRBIRINDEN TASKIN KONKRET HELLINI SORUSHMUR VE KOPYALAMIR
// !ANLAMADIGINIZI BIRBASHA MENDEN SORUSHMURSUZ WHATSAPP QRUPUNDA MUZAKIRE EDIRSIZ TASKLAR BAREDE HECKESIN MESAJINI SHEXSIDE CAVABLAMAYACAM :D
// !BUTUN NETICELER console.log() VASITESIYLE GOSTERILMELIDIR
// !DERSDE KECMEDIYIMIZ MOVZULARA AID KODLARDAN MAXIMUM UZAG DURMAGA CALISHIN
// !BUTUN TASKLARI 1 1 OXUYUN HAMSINA EYNI VAXTDA BAXMAYIN
// !HER BIR TASKIN HELLI TASKIN OZUNUN ALTINDA YAZILMALI NOVBETI TASKA KECENDE BITIRILEN TASK COMMENTE ALINMALIDIR.
// !DEADLINE 1 HEFTEDIR
// !MUREKKEB OLDUGUNU DUSHUNDUYUNUZ TASKLAR AYRI FAYLDA YAZILMALIDIR. (FAYL ADI TASKA UYGUN QOYULMALIDIR)
// !SONDA BUTUN KODLAR GITHUBA YUKLENILMELIDIR

// SWITCH CASE ///////////////// SWITCH CASE ///////////////// SWITCH CASE ///////////////// SWITCH CASE ///////////////
// BU BASHLIQ ALTINDAKI HELLER YALNIZ SWITCH CASE ILE QEBUL EDILECEKDIR.

// 1)  SWITCH CASE ILE ASHAGIDAKI TELEBLERI ODEYEN FUNCTION YAZIN

// let SET = 'SET_DATA';
// let GET = 'GET_DATA'
// let DELETE = 'DELETE_DATA'

// // 1.1 Yuxarida gosterilmish type lara uygun case ler yazin
// //     ve yazdgniz functionda parametr olaraq type gonderin ve birinci merhelede sadece 'case' in adini consola verin

// let result;
// let data = "SET";

// switch (data) {
//   case "SET":
//     console.log(data);
//     break;
//   case "GET":
//     console.log(data);
//     break;
//   case "DELETE":
//     console.log(data);
//     break;
//   default:
//     console.log("Bele type yoxdur")
// }

// // 1.2  2ci merhelede functiondan kenarda array yaradin ve
// //         Case 'SET' oldugu halda arraya 1-10 arasi bir reqem elave edin

// let data = "SET";
// let array = [3, 8, 9, 6, 2];

// switch (data) {
//   case "SET":
//     array.push(5);
//     console.log(array);
//     break;
//   case "GET":
//     console.log("GET");
//     break;
//   case "DELETE":
//     console.log("DELETE");
//     break;
//   default:
//     console.log("Bele type yoxdur");
// }

// // 1.3 Case -  'DELETE'  olarsa arraydan 1 item silin
// //     ARRAY BOW OLDUGU HALDA ERROR CIXMALIDIR - 'SILINECEK DATA TAPILMADI'
// //     ve sonda arrayi consola cixardin.

// let data = "DELETE";
// let array = [];

// switch (data) {
//   case "SET":
//     array.push(5);
//     console.log(array);
//     break;
//   case "GET":
//     console.log("GET");
//     break;
//   case "DELETE":
//     if(array.length > 0){
//         array.pop()
//         console.log(array);
//     }
//     else{
//         console.error("SILINECEK DATA TAPILMADI");
//     }
//     break;
// }

// // 1.4 Case - 'GET' oldugu halda ise sadece array consolda gorunsun

// let data = "GET";
// let array = [3, 8, 9, 6, 2];

// switch (data) {
//   case "SET":
//     array.push(5);
//     console.log(array);
//     break;
//   case "GET":
//     console.log(array);
//     break;
//   case "DELETE":
//     if(array.length > 0){
//         array.pop()
//         console.log(array);
//     }
//     else{
//         console.error("SILINECEK DATA TAPILMADI");
//     }
//     break;
//   default:
//     console.log("Bele type yoxdur");
// }

///////////////////////////////////////////////////////////////////////////////////////////

// let mL = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// // 2) AY-lar dan ibaret arrayi loopa salin ve her ayda nece gun oldugunu switch case ile Ayin adi + gun sayi  ni consola verin
// // Example  'December - 31 days'
// // QEYD - FEVRAL OLANDA 28-29 gorunmelidir. mL arrayindan istifade edilmelidir.

// let days;
// function daysInMonth(month, year) {
//   return new Date(year, month, 0).getDate();
// }

// for (let i = 0; i < mL.length; i++) {
//   switch (mL[i]) {
//     case "January":
//       days = daysInMonth(i + 1, 2022);
//       console.log(mL[i] + " - " + `${days} days`);
//       break;
//     case "February":
//       days = daysInMonth(i + 1, 2022);
//       console.log(mL[i] + " - " + `${days} days`);
//       break;
//     case "March":
//       days = daysInMonth(i + 1, 2022);
//       console.log(mL[i] + " - " + `${days} days`);
//       break;
//     case "April":
//       days = daysInMonth(i + 1, 2022);
//       console.log(mL[i] + " - " + `${days} days`);
//       break;
//     case "May":
//       days = daysInMonth(i + 1, 2022);
//       console.log(mL[i] + " - " + `${days} days`);
//       break;
//     case "June":
//       days = daysInMonth(i + 1, 2022);
//       console.log(mL[i] + " - " + `${days} days`);
//       break;
//     case "July":
//       days = daysInMonth(i + 1, 2022);
//       console.log(mL[i] + " - " + `${days} days`);
//       break;
//     case "August":
//       days = daysInMonth(i + 1, 2022);
//       console.log(mL[i] + " - " + `${days} days`);
//       break;
//     case "September":
//       days = daysInMonth(i + 1, 2022);
//       console.log(mL[i] + " - " + `${days} days`);
//       break;
//     case "October":
//       days = daysInMonth(i + 1, 2022);
//       console.log(mL[i] + " - " + `${days} days`);
//       break;
//     case "November":
//       days = daysInMonth(i + 1, 2022);
//       console.log(mL[i] + " - " + `${days} days`);
//       break;
//     case "December":
//       days = daysInMonth(i + 1, 2022);
//       console.log(mL[i] + " - " + `${days} days`);
//       break;
//   }
// }

// // 3) Task 2 - deki mentiqi Date() objecti uzerinde ishledin. Hazirda oldugumuz ayi tapin ve gunlerinin sayini gosterin

// let date = new Date();
// let thisMonth = date.getMonth();

// function daysInMonth(month, year) {
//   return new Date(year, month, 0).getDate();
// }
// let days = daysInMonth(thisMonth, 2022)

// switch (mL[thisMonth]) {
//   case "January":
//     console.log(mL[thisMonth] + " - " + days);
//     break;
//   case "February":
//     console.log(mL[thisMonth] + " - " + days);
//     break;
//   case "March":
//     console.log(mL[thisMonth] + " - " + days);
//     break;
//   case "April":
//     console.log(mL[thisMonth] + " - " + days);
//     break;
//   case "May":
//     console.log(mL[thisMonth] + " - " + days);
//     break;
//   case "June":
//     console.log(mL[thisMonth] + " - " + days);
//     break;
//   case "July":
//     console.log(mL[thisMonth] + " - " + days);
//     break;
//   case "August":
//     console.log(mL[thisMonth] + " - " + days);
//     break;
//   case "September":
//     console.log(mL[thisMonth] + " - " + days);
//     break;
//   case "October":
//     console.log(mL[thisMonth] + " - " + days);
//     break;
//   case "November":
//     console.log(mL[thisMonth] + " - " + days);
//     break;
//   case "December":
//     console.log(mL[thisMonth] + " - " + days);
//     break;
// }

// // 4) Codu-yazdiginiz tarixi date ile tapin ve hazirki ayin ilin 1 ci yarisina yoxsa 2 ci yarisina aid olub olmamasini switch case ile tapin
// // QEYD case - ayin ozu olmalidir.
// let date = new Date();
// let month = date.getMonth()
// let monthName = mL[month];
// console.log(monthName);

// let ifFunction = (month) => {
//   if (month <= 6) {
//     console.log("ilin 1-ci yarisi");
//   } else {
//     console.log("ilin 2-ci yarisi");
//   }
// }

// switch (mL[month]) {
//   case "January":
//     ifFunction(month)
//     break;
//   case "February":
//     ifFunction(month)
//     break;
//   case "March":
//     ifFunction(month)
//     break;
//   case "April":
//     ifFunction(month)
//     break;
//   case "May":
//     ifFunction(month)
//     break;
//   case "June":
//     ifFunction(month)
//     break;
//   case "July":
//     ifFunction(month)
//     break;
//   case "August":
//     ifFunction(month)
//     break;
//   case "September":
//     ifFunction(month)
//     break;
//   case "October":
//     ifFunction(month)
//     break;
//   case "November":
//     ifFunction(month)
//     break;
//   case "December":
//     ifFunction(month)
//     break;
// }

// 5) 4 cu taski heftenin gunleri ile yoxlayin

// // 6) hazirki tarixi taparaq ayin necenci heftesinde ola bileceymizi tapin
// // QEYD cixan netice realliga uygun olmaya biler bu problem deyil
// // her 7 gunu 1 hefte kimi goturun ve ayin 1 nin heftenin 1 ci gununden oldugunu dushunun

// let date = new Date();
// let day = date.getDate();
// console.log(day)
// let week;

// if(day <=7){
//   week = 1
// }
// if(day >7 && day<=14){
//   week = 2
// }
// if(day >14 && day<=21){
//   week = 3
// }
// if(day > 21 && day<=31){
//   week = 4
// }

// switch(week){
//   case 1:
//     console.log("ayin 1-ci heftesi")
//   break;
//   case 2:
//     console.log("ayin 2-ci heftesi")
//   break;
//   case 3:
//     console.log("ayin 3-cu heftesi")
//   break;
//   case 4:
//     console.log("ayin 4-cu heftesi")
//   break;
// }

///////////////////////////////////////////////////////////////////////////////////////////

// LOOPS //////  LOOPS ////// LOOPS /////////// LOOPS ////////// LOOPS //////////////////////////////////////////////////////////
// Bu hisseye aid olan tapshiriqlar while for for In for Of istifade edilmekle hell edilmelidir.

// 1 Looplar-dan istifade ederek 'Verilen array' - dan 'Almali oldugunuz' arrayi alin
// Aid olan tasklar 1.1, 1.2, 1.3, 1.4, 1.5

// 1.1 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January'],
//     ['February'],
//     ['March'],
//     ['April'],
//     ['May'],
//     ['June'],
//     ['July'],
//     ['August'],
//     ['September'],
//     ['October'],
//     ['November'],
//     ['December']
// ];

// let newArr = []
// for (let month of mL){
//     newArr.push([month])
// }

// console.log(newArr)
///////////////////////////////////////////////////////////////////////////////////////////

// 1.2 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February','March','April'],
//     ['May','June','July','August'],
//     ['September' , 'October', 'November', 'December']
// ];

// let newArr = []
// while(mL.length) newArr.push(mL.splice(0,4));

// console.log(newArr)

///////////////////////////////////////////////////////////////////////////////////////////

// 1.3 // Verilen array
// let mL = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']],
//     ['May','June',['July','August']],
//     ['September' , ['October', 'November', 'December']]
// ];

// let newArr = [];
// let i = 0;
// let j = 0;
// while (mL[i]) {
//   newArr.push(mL.splice(0, 4));
//   i++;
// }

// while (newArr[j]) {
//   if (newArr[j] !== newArr[newArr.length - 1]) {
//     newArr[j].push(newArr[j].splice(2, 2));
//   } else {
//     newArr[j].push(newArr[j].splice(1, 3));
//   }
//   j++;
// }

// console.log(newArr);
///////////////////////////////////////////////////////////////////////////////////////////

// 1.4 // Verilen array
// let mL = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March',['April']]],
//     ['May','June',['July',['August']]],
//     ['September' , ['October', 'November', ['December']]]
// ];

// let newArr = [];

// [month1, month2, month3, month4, month5, month6, month7, month8, month9, month10, month11, month12] = mL;
// newArr.push([month1, month2]);
// newArr[0].push([month3]);
// newArr[0][2].push([month4]);
// newArr.push([month5, month6]);
// newArr[1].push([month7]);
// newArr[1][2].push([month8]);
// newArr.push([month9]);
// newArr[2].push([month10, month11]);
// newArr[2][1].push([month12]);

// console.log(newArr);
///////////////////////////////////////////////////////////////////////////////////////////

// 1.5 // Verilen array

// let mL = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']],
//     ['September' , ['October', 'November', 'December']]
//     ['May','June',['July','August']],
// ];

// let newArr = [];
// for (let i = 0; i < mL.length; i++) {
//   newArr.push(mL.splice(0, 4));
// }

// for (let j = 0; j < newArr.length; j++) {
//   if (newArr[j] !== newArr[newArr.length - 1]) {
//     newArr[j].push(newArr[j].splice(2, 2));
//   } else {
//     newArr[j].push(newArr[j].splice(1, 3));
//   }
// }

// let element = newArr[2];
// newArr.splice(2, 1);
// newArr.splice(1, 0, element);
// console.log(newArr);

///////////////////////////////////////////////////////////////////////////////////////////

// 2) ad ve soyadinizi yazin ve onlari ashagidaki struktura getirin
// let fullName = "Aynura Asadova";

// let result = [
//     ['M' , 'N']
//     ['U' , 'E']
//     ['R' , 'R']
//     ['A' , 'I']
//     ['D' , 'M']
//     ['X' , 'A']
//     ['X' , 'N']
//     ['X' , 'L']
//     ['X' , 'I']
// ]

// Gorunduyu kimi ad ve soyadinizin eyni indexli herflerini bir arraya yigib (Meselen 0ci index-de M ve N var)
// sonra onlari umumi arraya elave etmelisiz

// let newArr = [];

// let splitFullName = fullName.split(" ");
// let firstName = splitFullName[0];
// let lastName = splitFullName[1];

// for (let i = 0; i < lastName.length; i++) {
//   newArr.push([firstName[i], lastName[i]]);
//   if (newArr[i][0] === undefined) {
//     newArr[i][0] = "x";
//   }
// }
// console.log(newArr);

///////////////////////////////////////////////////////////////////////////////////////////

// // 3) 'Ey babeK kebaB ye!' cumlesini loop istifade ederek nida boyuk ve kicik herfler de daxil olmaqla tersine cevirin
// // gozlenilen netice  '!ey Babek Kebab yE' - olmalidir
// let text = 'Ey babeK kebaB ye!';
// let newText =""
// for (let i = text.length - 1; i >= 0; i--) {
//     newText += text[i]
// }
// console.log(newText);

let arr = [
  3, 2, 21, 12, 4, 12, 4, 23, 3, 23, 5, 34, 35, 3, 4, 234, 2, 105, 24, 2, 342,
  34, 140, 34, 23, 175, 342312, 1, 2, 1, 70, 21, 24, 23, 24, 23, 24, 2, 24, 34,
];

// // 4) Looplardan istifade ederek yuxaridaki arrayda hem 5-e hem 7-e eyni zamanda bolunen reqemlerin cemini tapin
// let newArr = []
// let sum = 0;
// for (let x of arr) {
//   if (x % 5 == 0 && x % 7 == 0) {
//     newArr.push(x)
//     sum += x;
//   }
// }
// console.log(newArr + " " + "cem:" + sum);

// // 5) Looplardan istifade ederek yuxaridaki arrayda en boyuk 3 reqemli cut ededi tapin (biraz cetindir tapmasaniz biryerde baxarg)
// let newArr =[]
// for(let i=0; i<arr.length; i++){
//     if(arr[i].toString().length == 3 && arr[i]%2==0){
//         newArr.push(arr[i])
//     }
// }

// let maxNumber = Math.max(...newArr)
// console.log(newArr + " " + "maxNumber:" + maxNumber)

// // 6) Looplardan istifade ederek yuxaridaki arrayda ozunden bashqa (3 ozu olmasin yenii) 3 e bolune bilen en kicik reqemi tapin
// let number = [];
// for (let x of arr) {
//   if (x % 3 == 0 && x !== 3) {
//     number.push(x);
//   }
// }
// console.log(Math.min(...number));

// // 7 verilmish obyektde keylerin son reqemi ile value-leri eyni olan valueleri tapin

// let obj = {
//   key1: 0,
//   key2: 3,
//   key3: 2,
//   key4: 4,
//   key5: 53,
//   key7: 7,
//   key8: 8,
//   key9: 91,
// };

// let newObj = {};

// for (let key in obj) {
//   if (key.slice(-1) == obj[key]) {
//     newObj[key] = obj[key];
//   }
// }
// console.log(newObj);

////////////////////////////////////////////////////////////////////////////////////////////////

// WINDOW & DOCUMENT//////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////

// BURADA SIZDEN YARATMAGINIZ ISTENILEN DIV-LER HER BIRI AYRI OLUB TASK HELL EDILDIKDEN SONRA KOMMENTE ATILMALI
// VE HANSI DIVIN HANSI TAKSA AID OLDUGU KOMMENT SHEKLINDE QEYD EDILMELIDIR!
// VE YA HER BIRINI AYRI FAYLLARDA EDE BILERSINIZ.

// // 1) Bir div yaradin pencerenin solunda normal yerinde dayansin. 2 saniyeden bir 20px sola hereket etsin ve 20 saniyeden sonra dayansin.
// let container = document.getElementById("container");
// let div = document.createElement("div");
// div.className = "box";
// div.style.cssText = `
//     width: 150px;
//     height: 150px;
//     background: purple;
//     transform: translateX(0px);
//     transition: 0.3s linear;
// `;
// container.appendChild(div);

// let count=0;
// let myInterval = setInterval(() => {
//     count +=20;
//     div.style.transform = `translateX(${count}px)`
// }, 2000);

// setTimeout(()=>{
//     clearInterval(myInterval);
// }, 20000)

// // 2) Bir div yaradin olcusu 100-100px kvadrat olsun 1 saniyeden bir 10px ashagi 10px saga transitionla hereket etsin.
// let container = document.getElementById("container");
// let div = document.createElement("div");
// div.className = "box";
// div.style.cssText = `
//     width: 100px;
//     height: 100px;
//     background: black;
//     transform: translate(0, 0);
//     transition: 0.5s ease;
// `;
// container.appendChild(div);

// let count=0;
// setInterval(() => {
//     count +=10;
//     div.style.transform = `translate(${count}px, ${count}px)`
// }, 1000);

// // 3) Bir div yaradin onu sehifede centerleyin. Olculeri 200-200px
// //  kvadrat olsun 1 saniyeden bir boyuyerek 400px-400px sonra yeniden oz olculerine qayitsin
// // Transitonla etmeyiniz gozlenilendir.
// let container = document.getElementById("container");
// container.style.cssText = `
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 100vh;
// `;
// let div = document.createElement("div");
// div.className = "box";
// div.style.cssText = `
//     width: 200px;
//     height: 200px;
//     background: green;
//     transform: translate(0, 0);
//     transition: 0.5s ease;
// `;
// container.appendChild(div);

// let width = 200;
// let height = 200;
// setInterval(() => {
//   if (width == 200 && height == 200) {
//     width = 400;
//     height = 400;
//     div.style.width = `${width}px`;
//     div.style.height = `${height}px`;
//   } else {
//     width = 200;
//     height = 200;
//     div.style.width = `${width}px`;
//     div.style.height = `${height}px`;
//   }
// }, 1000);

// // 4) Bir div (200px x 200px olcude kvadrat)  ve iki button (Start ve stop) yaradin onlari alt alta centerleyin
// // Start buttona basandan 1 saniye sonra ve her 2 saniyeden bir div 90 derece firlansin
// // Stop buttona basanda 'Stop' sozunun yaninda 3 2 1 saysin ve firlanma dayansin.
// let container = document.getElementById("container");
// let wrapper = document.createElement("div");
// let div = document.createElement("div");
// let startBtn = document.createElement("button");
// let stopBtn = document.createElement("button");
// startBtn.innerText = "Start";
// stopBtn.innerText = "Stop";
// let time = document.createElement("span");

// container.style.cssText = `
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 100vh;
// `;

// div.style.cssText = `
//     width: 200px;
//     height: 200px;
//     background: red;
//     margin-bottom: 20px;
//     transition: 0.5s ease;
// `;

// wrapper.style.cssText = `
//     text-align: center;
// `;

// startBtn.style.cssText = `
//   margin: 10px auto;
//   padding: 5px 20px;
//   cursor: pointer;
// `;

// stopBtn.style.cssText = `
//   margin: 10px auto;
//   padding: 5px 20px;
//   cursor: pointer;
// `;

// time.style.cssText = `
//   display: inline-block;
//   font-size: 18px;
//   margin-left: 4px;
// `;

// wrapper.append(div, startBtn, stopBtn, time);
// container.appendChild(wrapper);

// let rotateInterval;
// startBtn.onclick = () => {
//   setTimeout(() => {
//     rotateInterval;
//   }, 1000);

//   let deg = 90;
//   rotateInterval = setInterval(() => {
//     div.style.transform = `rotate(${deg}deg)`;
//     deg += 90;
//   }, 2000);
// };

// let count = 3;
// stopBtn.onclick = () => {
//   if(rotateInterval){
//     let timeInterval = setInterval(() => {
//       time.innerText = count;
//       if (count == 0) {
//         clearInterval(rotateInterval);
//         clearInterval(timeInterval);
//         time.innerText = "";
//       }
//       count--;
//     }, 1000);
//   }

// };

// // 5) Bir div yaradin pencerenin sol yuxari kuncunde dayansin. Ustune clickledikde Ilk olaraq en sag kunce
// // 2ci defe clickledikde ashagi kunce 3 cu de  sol ashagi kunce ve sonda ilk bashldigi yere qayitsin
// let container = document.getElementById("container");
// let div = document.createElement("div");
// div.className = "box";

// container.style.cssText = `
//     height: 100vh;
//     position: relative;
// `;

// div.style.cssText = `
//     width: 150px;
//     height: 150px;
//     background: green;
//     position: absolute;
//     left: 15px;
//     top: 15px;
//     bottom: auto;
//     right: auto;
// `;
// container.appendChild(div);

// div.addEventListener("click", function () {
//   if (div.offsetLeft == 15 && div.offsetTop == 15) {
//     div.style.left = "auto";
//     div.style.right = "15px";
//   } else if (
//     div.offsetLeft == window.innerWidth - div.offsetWidth - 15 &&
//     div.offsetTop == 15
//   ) {
//     div.style.top = "auto";
//     div.style.bottom = "15px";
//   } else if (
//     div.offsetLeft == window.innerWidth - div.offsetWidth - 15 &&
//     div.offsetTop == window.innerHeight - div.offsetHeight - 15
//   ) {
//     div.style.right = "auto";
//     div.style.left = "15px";
//   } else if (
//     div.offsetLeft == 15 &&
//     div.offsetTop == window.innerHeight - div.offsetHeight - 15
//   ) {
//     div.style.bottom = "auto";
//     div.style.top = "15px";
//   }
// });

// // 6) 5 ci task hell edildiyi teqdirde eyni fayllar uzerinden davam edin ve klaviaturada kursor ashagi yuxari sag sol duymelerine basdiqda div-i hereket etdirmeye calishin.
// // Hem 5 ci tapshiriqdaki hem de bu tapshiriq ishlek veziyyetde olmalidir.
// document.addEventListener("keydown", function(e){
//   if (e.key == "ArrowRight") {
//     div.style.left = "auto";
//     div.style.right = "15px";

//   }
//   if (e.key == "ArrowDown") {
//     div.style.top = "auto";
//     div.style.bottom = "15px";
//   }
//   if (e.key == "ArrowLeft") {
//     div.style.right = "auto";
//     div.style.left = "15px";
//   }
//   if (e.key == "ArrowUp") {
//     div.style.bottom = "auto";
//     div.style.top = "15px";
//   }

// })

// 7) 5 ve 6 ci tasklar ugurla hell edilerse budefe hemin box-un yerini yadda saxlayin.
// Sehifeni yenilesem bele axirinci hansi veziyyetde qalmishdisa o veziyyetde gorunsun
// Ipucu localstorage ve ya session storage istifade edin.

// // 8) Chrome dinozavr oyununu gormush olarsiz Space basdiqca Dinozavr tullanib dushur.
// // oradaki kimi oyun yazmaginizi yox sadece istediyiniz bir heyvanin png sheklini ekranda cixarib 'Space' duymesini basdiqda 200px tullanib sora yerine qayitmagini yazin. :D Maragli olacaq
// let container = document.getElementById("container");
// let imgWrap = document.createElement("div");
// let img = document.createElement("img");
// img.setAttribute("src", "img1.png")
// img.style.cssText = `
//   width: 150px;
//   transition: 0.3s linear;
// `;
// container.style.cssText = `
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 100vh;
// `;
// imgWrap.style.cssText = `
//   width: 50%;
//   text-align: center;
//   border-bottom: 2px solid rgb(138, 91, 43);
//   box-shadow: rgb(0 0 0 / 45%) 0px 25px 16px -20px;
// `;

// imgWrap.append(img)
// container.append(imgWrap)

// document.addEventListener("keydown", function(e){
//   if (e.code == "Space") {
//     img.style.transform = "translateY(-200px)";
//   }
// })

// document.addEventListener("keyup", function(e){
//   if (e.code == "Space") {
//     img.style.transform = "translateY(0)";
//   }
// })

// // 9) Random reng generate eden functionu internetden tapib ekrana her clickde body-e yeni generate edilmish ve yeni reng-le renglenmish 100px - kvadrat box elave edin.
// let container = document.getElementById("container");
// let div;
// container.style.cssText = `
//   display: flex;
//   flex-wrap: wrap;
// `;

// const setBg = () => {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   div.style.backgroundColor = "#" + randomColor;
//   div.innerHTML = "#" + randomColor;
// };

// window.addEventListener("click", function () {
//   div = document.createElement("div");
//   div.style.cssText = `
//     width: 100px;
//     height: 100px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;
//   container.appendChild(div);
//   setBg();
// });

// // 10) Input (Type number) ve box (div 10px kvadrat) elave edin. Inputun icerisine reqem yazdiginiz qeder olculer boyusun ve ya kicilsin.
// // Meselen 10px dir inputa 100yazdim olcusu 110px kvadrat olsun
// let container = document.getElementById("container");
// let div = document.createElement("div");
// let input = document.createElement("input");
// input.setAttribute("type", "number");

// container.style.cssText = `
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   flex-direction: column;
// `;

// div.style.cssText = `
//     width: 10px;
//     height: 10px;
//     background: orange;
//     margin-bottom: 20px;
// `;

// container.append(div, input);

// input.onchange = () => {
//   let divWidth = Number(parseInt(div.style.width));
//   let inputValue = Number(input.value);

//   let sumFunc = (a, b) => {
//     return a + b
//   }

//   if (inputValue > 0) {
//     div.style.width = sumFunc(inputValue, divWidth) + "px";
//     div.style.height = sumFunc(inputValue, divWidth) + "px";
//   } else if (inputValue < 0) {
//     div.style.width = sumFunc(divWidth, inputValue) + "px";
//     div.style.height = sumFunc(divWidth, inputValue) + "px";
//   }
// };
