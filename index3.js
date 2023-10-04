'use strict'

// Четверте завдання
// Є 4 масиви, що містять цілі числа. З ними потрібно виконати такі операції:

// Зібрати в п'ятий масив елементи всіх масивів. Отриманий масив відсортувати за спаданням.
// Зібрати в п'ятий масив унікальні елементи для кожного з чотирьох масивів.
// Зібрати в п'ятий масив спільні елементи для всіх чотирьох масивів.
// Зібрати в п'ятий масив усі прості числа з чотирьох масивів. Прибрати з масиву результату всі неунікальні значення.

class Array{
    constructor(arr1, arr2, arr3, arr4, arr5){
        this.arr1 = [12, 5, 7, 3];
        this.arr2 = [2, 23, 4, 5,];
        this.arr3 = [2, 5, 7, 9,];
        this.arr4 = [6, 2, 5, 12]
        this.arr5 = [];
    }

    sorting(a, b){
      if(a < b){
         return -1;
      } else if(a > b){
         return 1;
      } else{
         return 0;
      }
    }

    collectArrs(){
      let arr = [];
      arr.push(this.arr1, this.arr2, this.arr3, this.arr4);
      return arr;
    }

    sortingCcollectArrs(){
      this.arr1 = this.collectArrs().flat().sort(this.sorting);
      return this.arr5;
    }

    unique(){
      let arr = [];
      this.collectArrs.forEach(array => {
         let NewArr = array.filter((number, elem) => {
            return array.IndexOf(number) === elem;
         })

         arr.push(NewArr);
      });

      this.arr5 = arr.flat();
      return this.arr5;
    }

    printSameNum(){
      let uniqueArr = [];
      let allNum = this.collectArrs().flat();
      let array = this.collectArrs();

      allNum.forEach(number =>{
         let rez = array.every(arr => {
            return arr.includes(number);
         })

         if(rez && uniqueArr.includes(number)){
            uniqueArr.push(number);
         }
      })

      return uniqueArr;
    }

    printPrimeNum(){
      let arr = this.collectArrs().flat().filter(number => {
         if(number <= 1){
            return false;
         }

         for(let i = 2; i < number; i++){
            if(number % 1 === 0){
               return false;
            }
         }

         return true;
      })

      arr = arr.filter((number, elem) => {
         return arr.indexOf(number) === elem;
      })

      return arr;
    }

    
    }

    let num = new Array();

    console.log(num.collectArrs());
    console.log(num.unique());
    console.log(num.printSameNum());
    console.log(num.printPrimeNum());
       
