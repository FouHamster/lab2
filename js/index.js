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



