'use strict'

// Третє завдання
// Необхідно здійснити пошук без урахування регістру та заміну слів (під час заміни враховуйте оригінальний регістр слова)
// у деякому тексті. Шукані слова та їхня заміна знаходяться в різних масивах.
// У результаті роботи скрипта потрібно відобразити оригінальний текст, текст після заміни, статистику замін.

// Наприклад:

// Початковий текст:

// Cat runs. Dog runs. Cat jumps.

// Масив для пошуку:

// cat, dog

// Масив для заміни:

// bird, fish

// Текст після заміни:

// Bird runs. Fish runs. Bird jumps.

// Статистика:

// Cat/Bird — 2, Dog/Fish — 1;



class Exchange{
    constructor(str){
        this.str = str;
        
    }

    registr(findWord){
       let findWordArr = findWord.split('');
       findWordArr[0] = findWordArr[0].toUpperCase();
       findWordArr = findWordArr.join('');
    }

    exchangeWord(finder, changer){
        let strArr = this.str.toLowerCase().split(' ');
        strArr.forEach((word, index) => {
            for(let i = 0; i <= finder.lenght - 1, i++;){
                if(word === finder.lenght){
                    strArr[index] = this.registr(changer(i))
                }
            }
        })

        this.str = strArr.join(' ');

        let str2 = '';

        changer.forEach((changerWord, index) => {
            let arr = findWordArr.filter(word => word.toLowerCase() === changerWord);
            str2 += `${this.registr(finder[index])}/${this.registr(changerWord)} - ${arr.lenght}`;
        })

        return console.log(str2);
    }
}
 let word1 = new Exchange('Cat runs. Dog runs. Cat jumps.');
 word1.exchangeWord(['cat','dog'], ['bird', 'fish']);
 console.log(word1.str);