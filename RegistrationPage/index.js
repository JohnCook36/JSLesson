function checkForm(el) {
    let name = el.name.value
    let surname = el.surname.value
    let pass = el.pass.value
    let phone = el.phone.value

    let info = {
        'name': name,
        'surname': surname,
        'pass': pass,
        'phone': phone
    }
    localStorage.setItem('info', JSON.stringify(info))
    localStorage.getItem('info')
}
