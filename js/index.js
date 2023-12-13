function UserPhone(surname, name, middleName, tel, postalCode, country, city, street, house, apartment) {
    this.surname = surname
    this.name = name
    this.middleName = middleName
    this.tel = tel
    this.address = {
        postalCode: postalCode,
        country: country,
        city: city,
        street: street,
        house: house,
        apartment: apartment,
    }
}

let user = []

function createNewUser () {
    let question = confirm('Хотите продолжить?')
    while (question !== false) {
        let surname = prompt('Введите фамилию!')
        let name = prompt('Введите имя!')
        let middleName = prompt('Введите отчество!')
        let tel = prompt('Введите номер телефона!')
        let postalCode = prompt('Введите индекс!')
        let country = prompt('Введите страну!')
        let city = prompt('Введите город!')
        let street = prompt('Введите улицу!')
        let house = prompt('Введите дом!')
        let apartment = prompt('Введите квартиру!')

        let users = new UserPhone(surname, name, middleName, tel, postalCode, country, city, street, house, apartment)
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

// function sortUsersByAttribute() {
//     // Check if the attribute is valid
//     let attribute = 'surname'
//     console.log(attribute)
//     if (!UserPhone.prototype.hasOwnProperty(attribute)) {
//         console.log('Неверный атрибут. Введите корректный атрибут пользователя.');
//         return;
//     }
//
//     // Sort the user array based on the specified attribute
//     user.sort((a, b) => {
//         if (typeof a[attribute] === 'object') {
//             return a[attribute].toString().localeCompare(b[attribute].toString());
//         } else {
//             return a[attribute].toString().localeCompare(b[attribute].toString());
//         }
//     });
//
//     // Display the sorted user array
//     console.log('Отсортированные пользователи по атрибуту ' + attribute + ':');
//     user.forEach(u => console.log(u));
// }