// 'use strict'

// Друге завдання
// Додати до першого завдання можливість пошуку набору слів. Шукані слова потрібно зберігати в масиві.

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
        
        
        class ArrayText extends Text{
    constructor(str, word){
        super(str, word, str1);
        this.str = str;
        this.word = word;
        this.str1 = this.str1;
        }
        researchStr(str, str1){
            let arrStr1 = str1.split(" ");
            console.log(this.str.indexOf(this.str1));
        }

        print(){
            console.log(this.researchWordNoRegistr(this.str, this.word, this.str1));
        }
    }

    const word2 = new ArrayText("Быть или не быть, вот в чём вопрос.", "Быть", "в чём вопрос");
    word2.researchStr();