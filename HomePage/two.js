let people = [
    {
        name: "Jack Smith",
        age: 16,
        gender: 'male'
    },
    {
        name: "Sam Winchester",
        age: 34,
        gender: 'male'},
    {
        name: "Din Winchester",
        age: 36,
        gender: 'male'
    },
    {
        name: "Ruby Miller",
        age: 17,
        gender: 'female'},
    {
        name: "John Cook",
        age: 24,
        gender: 'male'
    },
    {
        name: "Lisa Taylor",
        age: 14,
        gender: 'female'
    },
    {
        name: "Mali Row",
        age: 10,
        gender: 'female'
    },
    {
        name: "Elisabet Winchester",
        age: 29,
        gender: 'female'
    },
    {
        name: "Bobby Singer",
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
    return `<div class="name"> ${people.name}</div>`
}

function renderContacts(contactsToRender) {
    return contactsToRender.map(people => renderPeople(people));
}

function displayContacts(contactsToRender) {
    let element = document.getElementById('contact-container')
    element.innerHTML = renderContacts(contactsToRender).join(' ');
}
displayContacts(people)