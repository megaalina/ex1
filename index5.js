'use strict'

// Шосте завдання
// Створіть додаток "Телефонна книга". Вам необхідно зберігати таку інформацію:

// Ім'я контакту;
// Прізвище контакту;
// Телефон контакту;
// Email контакту.
// Додаток має давати змогу:

// Додавати контакти;
// Редагувати контакти;
// Видаляти контакти.


class PhoneBook{
    #names = {
        "Name1": "Ім'я контакту1",
        "Name2": "Ім'я контакту2",
        "Name3": "Ім'я контакту3"
    }

    #famylies = {
        "Family1": "Прізвище контакту1",
        "Family2": "Прізвище контакту2",
        "Famyly3": "Прізвище контакту3"
    }

    #phone = {
        "Phone1": 380000000001,
        "Phone2": 380000000002,
        "Phone3": 380000000003
    }

    #email = {
        "email1": "username1@gmail.com",
        "email2": "username2@gmail.com",
        "email3": "username3@gmail.com"
    }

    constructor(){}
    print(){
        console.log(`${this.#names}, ${this.#famylies}, ${this.#phone}, ${this.#email}`)
    }

    set names(value){
        return this.#names = value;
    }

    set famylies(value){
        return this.#famylies = value;
}

set phone(value){
    return this.#phone = value;
}

set email(value){
    return this.#email = value;
}
}

const kontakt = new PhoneBook (Name1, Family1, Phone1, email1);
kontakt.print();