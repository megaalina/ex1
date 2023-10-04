'use strict'

// Перше завдання
// Є деякий текст. Скрипт має здійснити пошук слова. У результаті роботи скрипта потрібно відобразити кількість разів,
//  які слово зустрічається в тексті. Під час пошуку необхідно враховувати такі чинники:

// Пошук незалежно від регістру букв слова.
// Слово може бути відокремлене від інших слів: пропуском, розділовими знаками.

// Якщо слово є в тексті всередині іншого слова, треба враховувати його під час підрахунку.

class Text{
    constructor(str, word){
        this.str = str = prompt("Введіть текст");
        this.word = word = prompt("Введіть слово");
    }

    researchWord(str, word){


        if(this.word.toLocaleLowerCase){
            return true;
        } else if(this.word.toLocaleUpperCase){
            return true;
        } else{
            return false;

        
        console.log(this.str.includes(this.word));
    }
}

    countWord(str, word){
        
            let arr1 = this.str.split(" ");
            let w1 = this.word.toLocaleLowerCase;
         
                let count1 = {};
            
                for (w1 of arr1) {
                    if (count1[w1] === undefined) {
                    count1[w1] = 1;
                    } else {
                    count1[w1]++;
                    }
                }
                
                console.log((count1));
                
            }

    
    print(){
    console.log(this.countWord(this.str, this.word));
}
}



const word1 = new Text("Быть или не быть, вот в чём вопрос.", "Быть");
word1.researchWord("Быть или не быть, вот в чём вопрос.", "Быть");