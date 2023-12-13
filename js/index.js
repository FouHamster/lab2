class UserPhone {
    lastName
    firstName
    middleName
    tel
    address
    

    constructor(lastName, firstName, middleName, tel, postalCode, country, city, street, house, apartment) {
        this.lastName = lastName
        this.firstName = firstName
        this.middleName = middleName
        this.tel = tel
        this.address = new Address(postalCode, country, city, street, house, apartment)
    }
}

class Address{
    postalCode 
    country
    city
    street
    house
    apartment
    constructor(postalCode, country, city, street, house, apartment) {
        this.postalCode = postalCode
        this.country = country
        this.city = city
        this.street = street
        this.house = house
        this.apartment = apartment
    }
}

let user = []

function createNewUser () {
    let question = confirm('Хотите продолжить?')
    while (question !== false) {
        let lastName = prompt('Введите фамилию!')
        let firstName = prompt('Введите имя!')
        let middleName = prompt('Введите отчество!')
        let tel = prompt('Введите номер телефона!')
        let postalCode = prompt('Введите индекс!')
        let country = prompt('Введите страну!')
        let city = prompt('Введите город!')
        let street = prompt('Введите улицу!')
        let house = prompt('Введите дом!')
        let apartment = prompt('Введите квартиру!')

        let users = new UserPhone(lastName, firstName, middleName, tel, postalCode, country, city, street, house, apartment)
        user.push(users)
        console.log(users)
        question = confirm('Хотите продолжить?')
    }
}

function getSimilarity() {
    let userRequest = prompt('Что вы хотите найти?', '')
    let isFind = false;
    for (let i in user) {
        for (let key in user[i]) {
            if (typeof user[i][key] === 'object') {
                for (let nested_key in user[i][key]){
                    if (userRequest === user[i][key][nested_key])
                        console.log(user[i])
                    console.log(user[i][nested_key])
                    isFind = true
                }
            } else if (userRequest === user[i][key]) {
                console.log(user[i])
                isFind = true
            }
        }
    }
    if (!isFind) {
        console.log('Такого поле нет.Введите конкретное поле без ошибок')
    }
}

function sortByProperty() {
    let propertyName = prompt('Введите свойство для сортировки:', '');
    let isPropertyValid = false;

    // Проверяем, существует ли указанное свойство в объекте UserPhone или его вложенных объектах
    let hasProperty = propertyName in new UserPhone() || propertyName.startsWith('address.');

    if (!hasProperty) {
        console.log('Указанное свойство не существует. Пожалуйста, введите корректное свойство.');
        return;
    }

    user.sort((a, b) => {
        let valueA = getProperty(a, propertyName);
        let valueB = getProperty(b, propertyName);

        if (typeof valueA === 'string' && typeof valueB === 'string') {
            return valueA.localeCompare(valueB);
        } else {
            return valueA - valueB;
        }
    });

    console.log('Отсортированный список пользователей:');
    console.log(user);
}

// Вспомогательная рекурсивная функция для получения значения свойства, включая вложенные объекты
function getProperty(obj, path) {
    let parts = path.split('.');
    let value = obj;

    for (let part of parts) {
        if (value && value.hasOwnProperty(part)) {
            value = value[part];
        } else {
            return undefined; // Если свойство не существует, возвращаем undefined
        }
    }

    return value;
}