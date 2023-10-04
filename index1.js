// 'use strict'

// Друге завдання
// Додати до першого завдання можливість пошуку набору слів. Шукані слова потрібно зберігати в масиві.

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

class NewText extends Text{
    constructor(str){
        super(str)
    }

    searchWord(wordsArr){
        wordsArr.forEach(findWord => {
            this.searchWord(findWord);
        })
    }
}


const word2 = new NewText("Быть или не быть, вот в чём вопрос.");
word2.searchWord("быть", "вопрос");