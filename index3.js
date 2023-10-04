'use strict'

// Четверте завдання
// Є 4 масиви, що містять цілі числа. З ними потрібно виконати такі операції:

// Зібрати в п'ятий масив елементи всіх масивів. Отриманий масив відсортувати за спаданням.
// Зібрати в п'ятий масив унікальні елементи для кожного з чотирьох масивів.
// Зібрати в п'ятий масив спільні елементи для всіх чотирьох масивів.
// Зібрати в п'ятий масив усі прості числа з чотирьох масивів. Прибрати з масиву результату всі неунікальні значення.

class Array{
    constructor(arr1 = [12, 5, 7, 3], arr2 = [2, 23, 4, 5, 2, 5, 7, 9, 6], arr3 = [2, 5, 33, 6], arr4 = [5, 9, 4, 42],
        arr5 = [arr1, arr2, arr3, arr4]){
        this.arr1 = arr1;
        this.arr2 = arr2;
        this.arr3 = arr3;
        this.arr4 = arr4;
        this.arr5 = arr5.flat(Infinity);
    }

    sortingArray(){
        this.arr5.sort(function(a,b){
            return a - b;})
    }

    dublicatPrint(){
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
          }
          let unique1 = this.arr1.filter(onlyUnique);
          let unique2 = this.arr2.filter(onlyUnique);
          let unique3 = this.arr3.filter(onlyUnique);
          let unique4 = this.arr4.filter(onlyUnique);

          let arr = [unique1, unique2, unique3, unique4]
          
          console.log(arr);
    }

    uniquePrint(){
        function uniqueFun1(value, self) {
            return self.filter((item) => item === value).length === 1;
          }
          
          let elem1 = this.arr1.filter(uniqueFun1);
          let elem2 = this.arr2.filter(uniqueFun1);
          let elem3 = this.arr3.filter(uniqueFun1);
          let elem4 = this.arr4.filter(uniqueFun1);

          let arr = [elem1, elem2, elem3, elem4];

          console.log(arr);
          
    }

    researchYumber(){
        

for (let i = 0; i < this.arr1.length; i++) {
   let flag1 = true;
   
   for (let j = 2; j < i; j++) {
      if (this.arr1[i] % j == 0) {
         flag1 = false;
         break;
      }
   }

   let elem1 =this.arr1[i];

   if (flag1) {
      console.log(`${elem1} Просте число`);
   } else {
      console.log(`${elem1} НЕ просте число`);
   }

}

for (let i = 0; i < this.arr2.length; i++) {
    let flag2 = true;
    
    for (let j = 2; j < i; j++) {
       if (this.arr2[i] % j == 0) {
          flag2 = false;
          break;
       }
    }

    let elem2 =this.arr2[i];
 
    if (flag2) {
       console.log(`${elem2} Просте число`);
    } else {
       console.log(`${elem2} НЕ просте число`);
    }
 
 }

 for (let i = 0; i < this.arr3.length; i++) {
    let flag3 = true;
    
    for (let j = 2; j < i; j++) {
       if (this.arr3[i] % j == 0) {
          flag3 = false;
          break;
       }
    }

    let elem3 =this.arr3[i];
 
    if (flag3) {
       console.log(`${elem3} Просте число`);
    } else {
       console.log(`${elem3} НЕ просте число`);
    }
 
 }

 for (let i = 0; i < this.arr4.length; i++) {
    let flag4 = true;
    
    for (let j = 2; j < i; j++) {
       if (this.arr4[i] % j == 0) {
          flag4 = false;
          break;
       }
    }

    let elem4 =this.arr4[i];
 
    if (flag4) {
       console.log(`${elem4} Просте число`);
    } else {
       console.log(`${elem4} НЕ просте число`);
    }
 
 }

 let arr = [elem1, elem2, elem3, elem4];
 console.log(arr.uniquePrint());

    }
    }
       
