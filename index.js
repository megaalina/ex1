'use strict'

// Перше завдання
// Є деякий текст. Скрипт має здійснити пошук слова. У результаті роботи скрипта потрібно відобразити кількість разів,
//  які слово зустрічається в тексті. Під час пошуку необхідно враховувати такі чинники:

// Пошук незалежно від регістру букв слова.
// Слово може бути відокремлене від інших слів: пропуском, розділовими знаками.

// Якщо слово є в тексті всередині іншого слова, треба враховувати його під час підрахунку.

class Text{
    constructor(str){
        this.str = str;
    }

    searchWord(findWord){
        let arrZnak = [",", ".", ":", ";", "(", ")", "#", "*", "'"];
        let regist = this.str.toLocaleLowerCase();

        arrZnak.forEach(arrZnak =>{
            regist = regist.split(arrZnak).join('');
        })

        let registArr = regist.split(' ');

        let count = 0;

        registArr.forEach(word =>{
            word.includes(findWord) ? count++ : count;
        });
        return console.log(`Кількість слів : ${findWord}` + count);
    }

}

const word1 = new Text("Быть или не быть, вот в чём вопрос.");
word1.searchWord("быть");


