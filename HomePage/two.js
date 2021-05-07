let people = [
    {
        name: "Jack",
        surname: "Smith",
        age: 16,
        gender: 'male'
    },
    {
        name: "Sam",
        surname: "Winchester",
        age: 34,
        gender: 'male'},
    {
        name: "Din",
        surname: "Winchester",
        age: 36,
        gender: 'male'
    },
    {
        name: "Ruby",
        surname: "Miller",
        age: 17,
        gender: 'female'},
    {
        name: "John",
        surname: "Cook",
        age: 24,
        gender: 'male'
    },
    {
        name: "Lisa",
        surname: "Taylor",
        age: 14,
        gender: 'female'
    },
    {
        name: "Mali",
        surname: "Row",
        age: 10,
        gender: 'female'
    },
    {
        name: "Elisabet",
        surname: "Winchester",
        age: 29,
        gender: 'female'
    },
    {
        name: "Bobby",
        surname: "Singer",
        age: 13,
        gender: 'male'
    }
]

function getOnlyAdults(){
    return people.filter(person => person.age >= 18);
}

function getOnlyFemale(){
    return people.filter(person => person.gender === 'female')
}

function getOnlyMale(){
    return people.filter(person => person.gender === 'male')
}

function getAllPeople(){
    return people
}

function getYounger(){
    return people.sort((a,b) => a.age > b.age ? 1 : -1)
}

function getOlder(){
   return people.sort((a,b) => a.age < b.age ? 1 : -1)
}

function showOnlyAdults(){
    let adults = getOnlyAdults()
    displayContacts(adults)
}
function showAll(){
    let allPeoples = getAllPeople()
    displayContacts(allPeoples)
}
function showFemale(){
    let onlyFemale = getOnlyFemale()
    displayContacts(onlyFemale)
}
function showMale(){
    let onlyMale = getOnlyMale()
    displayContacts(onlyMale)
}

function showOlder(){
    let sortDescending = getOlder()
    displayContacts(sortDescending)
}

function showYounger(){
    let sortAscending = getYounger()
    displayContacts(sortAscending)
}

function renderPeople(people) {
    return `<div class="user"> ${people.name} ${people.surname}</div>`
}

function renderContacts(contactsToRender) {
    return contactsToRender.map(people => renderPeople(people));
}

function displayContacts(contactsToRender) {
    let element = document.getElementById('contact-container')
    element.innerHTML = renderContacts(contactsToRender).join(' ');
}
displayContacts(people)