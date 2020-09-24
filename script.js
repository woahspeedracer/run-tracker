
let entries = [];
let goal = 25;
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

function weeklyHigh() {
    const high = Math.max(...entries);
    document.getElementById('high').innerText = high;
}

function calcGoal() {
    const totalValue = entries.reduce(reducer).toFixed(1);
    const completed = totalValue / (goal / 100);
    const progressCircle = document.querySelector('#progressCircle');
    if (completed > 100) completed === 100;
    progressCircle.style.background = `conic-gradient(#70db70 ${completed}%, #2d3740 ${completed}% 100%)`
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
    //call format functions
    addNewEntry(entry);
    calcTotal();
    calcAverage();
    weeklyHigh();
    calcGoal();

}

const form = document.querySelector('form').addEventListener('submit', handleSubmit);