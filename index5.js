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

    constructor(){
        this.users = [];
    }

    createContact(name, famyle, numberPhone, email){
        let user = {name, famyle, numberPhone, email};
        this.users.push(user);
    }

    editUser(name, famyle){
        this.users.forEach(user => {
            if(user.name === name && user.famyle === famyle){
                return user.numberPhone, user.email;
            }
        })
    }

    deleteUser(name, famyle){
        this.users = this.users.filter(user => {
            return user.famyle !== famyle && user.name !== name;
        })
    }
    
}

const contact = new PhoneBook ("Ім'я", "Прізвище", "+380 000 00 00", "username@gmail.com");
contact.createContact();
contact.editUser();
contact.deleteUser();