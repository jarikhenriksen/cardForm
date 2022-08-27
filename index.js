
let nameInput = document.getElementById('cardName');
let numberInput = document.getElementById('cardNumber');
let monthExpiryDateInput = document.getElementById('cardDateMonth');
let yearExpiryDateInput = document.getElementById('cardDateYear')
let cvcInput = document.getElementById('cardCVC');

nameInput.onkeyup = (event) => {
    newName = event.target.value
    document.getElementById('updatedName').innerText = newName
};

numberInput.onkeyup = (event) => {
    newNumber = event.target.value
    document.getElementById('updatedNumber').innerText = newNumber
};

monthExpiryDateInput.onkeyup = (event) => {
    newMonthExpiryDate = event.target.value
    document.getElementById('updatedExpiryMonth').innerText = newMonthExpiryDate
};

yearExpiryDateInput.onkeyup = (event) => {
    newYearExpiryDate = event.target.value
    document.getElementById('updatedExpiryYear').innerText = newYearExpiryDate
};

cvcInput.onkeyup = (event) => {
    newCVC = event.target.value
    document.getElementById('updatedCVC').innerText = newCVC
}