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
    let surname = document.getElementById('surname').value 
    let name = document.getElementById('name').value
    let middleName = document.getElementById('middleName').value
    let tel = document.getElementById('tel').value
    let postalCode = document.getElementById('postalCode').value
    let country = document.getElementById('country').value
    let city = document.getElementById('city').value
    let street = document.getElementById('street').value
    let house = document.getElementById('house').value
    let apartment = document.getElementById('apartment').value
}

function getViewArray() {
    let viewSortResult = document.getElementById('viewSortResult')
    viewSortResult.setAttribute('style', 'display: none')

    let viewSearchResult = document.getElementById('viewSearchResult')
    viewSearchResult.setAttribute('style', 'display: none')

    let search = document.getElementById('search')
    search.setAttribute('style', 'display: none')

    let sort = document.getElementById('sort')
    sort.setAttribute('style', 'display: none')

    let viewUser = document.getElementById('viewUser')
    viewUser.setAttribute('style', 'display: flex')

    let container = document.getElementById("viewUser")
    container.innerHTML = "";

    for(let i in users) {

        let user = users[i]
        let p = document.createElement("p")

        p.innerHTML = `<b>Название:</b> ${book.title},
                       &nbsp &nbsp &nbsp &nbsp <b>Автор:</b> ${book.author},
                       &nbsp &nbsp &nbsp &nbsp <b>Год выхода:</b> ${book.year_release}, 
                       &nbsp &nbsp &nbsp &nbsp <b>Издательство:</b> ${book.publisher},
                       &nbsp &nbsp &nbsp &nbsp <b>Себестоимость:</b> ${book.cost}, 
                       &nbsp &nbsp &nbsp &nbsp <b>Цена:</b> ${book.price},
                       &nbsp &nbsp &nbsp &nbsp <b>Прибыль:</b> ${book.profit} <hr>`

        container.appendChild(p);   
    }
}