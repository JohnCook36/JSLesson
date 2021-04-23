let contacts = [
    "Jack Smith",
    "Sam Winchester",
    "Din Winchester",
    "Ruby Miller",
    "John Cook",
    "Lisa Taylor",
    "Mali Row",
    "Elisabet Winchester",
    "Bobby Singer",
]

function renderContact(contact) {
    return `<div class="name">${contact}</div>`
}

function renderContacts(contactsToRender) {
    return contactsToRender.map(renderContact);
}

function displayContacts(contactsToRender) {
    let element = document.getElementById('contact-container')

    element.innerHTML = renderContacts(contactsToRender).join(' ');
}

function hasPhrase(contact, phrase) {
    return contact.toLowerCase().includes(phrase.toLowerCase())
}

function filterContacts(contacts, searchPhrase) {
    return contacts.filter(contact => hasPhrase(contact, searchPhrase))
}

function phraseOnChange(newSearchValue) {
    let filteredContacts = filterContacts(contacts, newSearchValue)

    displayContacts(filteredContacts)
}

displayContacts(contacts)