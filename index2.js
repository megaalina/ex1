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

class Text{
    constructor(str, word){
        this.str = str = prompt("Введіть текст");
        this.word = word = prompt("Введіть слово");
    }

    researchWord(str, word){
        console.log(this.str.indexOf(this.word));
    }

    countWord(str, word){
        
            let arr1 = this.str.split(" ");

            // let s1 = this.word.toLocaleLowerCase;
            let count1 = {};
            
            for (this.word of arr1) {
                if (count1[this.word] === undefined) {
                count1[this.word] = 1;
                } else {
                count1[this.word]++;
                }
            }

            
            console.log(count1);
        }

        researchWordNoRegistr(str){
            let all_letters = this.str.length;
            let upper=0;
            let lower=0;

            for(let i=0, upper=0,  lower=0, char; i < all_letters; i++) {
    char = this.str.charAt(i);

    if (char == this.word.toUpperCase()) {
        upper++;
    }
    else if (char == this.word.toLowerCase()){
        lower++;
    }
}

console.log(upper + lower);



  
        }

        print(){
            console.log(this.countWord(this.str, this.word));
        }
}

const word1 = new Text("Быть или не быть, вот в чём вопрос.", "Быть");
word1.researchWordNoRegistr("Быть или не быть, вот в чём вопрос.", "Быть");


class Exchange extends Text{
    constructor(str, word){
        super(str, word);
        this.str = "Cat runs. Dog runs. Cat jumps.";
        this.word = word;
        }
        researchWordNoRegistr(str, word){
            let arr = this.str.split(" ");

            const s1 = this.word.toLocaleLowerCase;
            const s2 = this.word.toLocaleUpperCase;
            console.log(s1.toLocaleUpperCase() === s2.toLocaleUpperCase());
        }

        researchWord(str){
            console.log(this.str.indexOf(researchArr[""]));
        }

        exchangeWord(str){
            let newstr = this.str.replace(researchArr[""]/gi, exchangeArr['']);
            console.log(newstr.researchWordNoRegistr());
        }

        countExchangeWord(str){
            let elem = exchangeArr[''];
            let count = this.str.split(elem).length - 1;
            console.log(count);
        }
    }

    let researchArr = ["cat", "dog"];

    let exchangeArr = ["bird", "fish"];

    const word2 = new Exchange(str);
    word2.exchangeWord(researchArr["cat"], exchangeArr["bird"]);
    word2.countExchangeWord();