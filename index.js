
let nameInput = document.getElementById('cardName');
let numberInput = document.getElementById('cardNumber');
let monthExpiryDateInput = document.getElementById('cardDateMonth');
let yearExpiryDateInput = document.getElementById('cardDateYear')
let cvcInput = document.getElementById('cardCVC');

nameInput.onchange = (event) => {
    newName = event.target.value
    document.getElementById('updatedName').innerText = newName
};

numberInput.onchange = (event) => {
    newNumber = event.target.value
    document.getElementById('updatedNumber').innerText = newNumber
};

monthExpiryDateInput.onchange = (event) => {
    newMonthExpiryDate = event.target.value
    document.getElementById('updatedExpiryMonth').innerText = newMonthExpiryDate
};

yearExpiryDateInput.onchange = (event) => {
    newYearExpiryDate = event.target.value
    document.getElementById('updatedExpiryYear').innerText = newYearExpiryDate
};

cvcInput.onchange = (event) => {
    newCVC = event.target.value
    document.getElementById('updatedCVC').innerText = newCVC
}