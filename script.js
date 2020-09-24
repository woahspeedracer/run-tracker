
let entries = [];
const entriesWrapper = document.querySelector('#entries')

function addNewEntry(newEntry) {
    //removes first list item from ul
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
    const listItem = document.createElement('li')
    const listValue = document.createTextNode(newEntry.toFixed(1));
    //combines listItem and listValue
    listItem.appendChild(listValue);
    //adds new list item to end of ul
    entriesWrapper.appendChild(listItem);
    console.log(listItem, listValue);
}

function reducer (total, currentValue) {
    return total + currentValue;
}

function calcTotal() {
    const totalValue = entries.reduce(reducer).toFixed(1);
    document.getElementById('total').innerText = totalValue;
    document.getElementById('progressTotal').innerText = totalValue;
}

function calcAverage() {
    const average = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById('average').innerText = average;
}

function handleSubmit(event) {
    //prevents browser from resetting
    event.preventDefault();
    const entry = Number(document.querySelector('#milesInput').value);
    //prevents function from logging 0 or empty
    if (!entry) return;
    //resets form
    document.querySelector('form').reset();
    //update run array
    entries.push(entry);
    //call addNewEntry function
    addNewEntry(entry);
    calcTotal();
    calcAverage();
}

const form = document.querySelector('form').addEventListener('submit', handleSubmit);