// //? 1

// const user = {
//     name: 'Baysal',
//     age: 18,
//     person: function() {
//         console.log(this.name, this.age);
//     }
// };

// user.person();

// //? 2

// const автомобиль = {
//     марка: 'Tesla',
//     brand: function() {
//         console.log( 'Моя марка -' + this.марка )
//     }
// }

// автомобиль.brand()

// //? 3

// const circle = {
//     radius
// }

//? 4
// const calculator = {
//     num1: 0, 
//     num2: 0,

//     ascNum1: function(sum1) {
//         this.num1 = sum1; 
//     },
//     ascNum2: function(sum2) {
//         this.num2 = sum2; 
//     },

//     plus1: function() {
//         return this.num1 + this.num2; 
//     },
//     plus2: function() {
//         return this.num1 * this.num2;
//     },
// }

// calculator.ascNum1(6); 
// calculator.ascNum2(4); 

// const сумма = calculator.plus1(); 
// console.log("Сумма чисел:", сумма);

// const произведение = calculator.plus2(); 
// console.log("Произведение чисел:", произведение);

//? 5

// function getDayOfWeek() {
//     const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
//     const currentDate = new Date();
//     const dayOfWeek = currentDate.getDay();
  
//     return days[dayOfWeek];
//   }
  
//   const currentDay = getDayOfWeek();
//   console.log('Сегодня ' + currentDay);

//? 6 

// const product1 = {
//     name: "Мобильный телефон",
//     price: 499.99,
//   };
  
  
//   product1.getInfo = function () {
//     console.log(`Продукт ${this.name} стоит ${this.price} долларов.`);
//   };
  
  
//   product1.getInfo();

//? 7

// const animal = {
//     name: "Cat",
    
    
//     Sound: function(sound) {
//       console.log(`${this.name} издает звук: ${sound}`);
//     }
//   };
  
  
//   animal.Sound("Meow");