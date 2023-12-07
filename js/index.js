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
    // let surname = document.getElementById('surname').value 
    // let name = document.getElementById('name').value
    // let middleName = document.getElementById('middleName').value
    // let tel = document.getElementById('tel').value
    // let postalCode = document.getElementById('postalCode').value
    // let country = document.getElementById('country').value
    // let city = document.getElementById('city').value
    // let street = document.getElementById('street').value
    // let house = document.getElementById('house').value
    // let apartment = document.getElementById('apartment').value
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
}



