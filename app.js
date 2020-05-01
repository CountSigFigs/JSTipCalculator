const billValue = document.getElementById("billAmount")
const serviceQuality = document.getElementById("tipAmount")
const numberOfGuests = document.getElementById("amountGuests")
const tipDisplay = document.getElementById("output")
let tip = undefined
const tipCalculate = document.getElementById("submit")


function tipCalculation() {
    if (!billValue.value || isNaN(billValue.value)) {
        tipDisplay.innerHTML = `Oops! Go back and make sure you entered 
        only numbers for the bill value`
        return;
    }
    if (!numberOfGuests.value || isNaN(numberOfGuests.value)) {
        tipDisplay.innerHTML = `Oops! Go back and make sure you entered 
        a number for the # of guests`
        return;
    }

    let num = (billValue.value * serviceQuality.value) / numberOfGuests.value
    let tip = num.toFixed(2)

    if (numberOfGuests.value >= 2) {
        tipDisplay.innerHTML = `Great! Your tip is $${tip} each`
    }
    else { tipDisplay.innerHTML = `Great! Your tip is $${tip}` }

}

tipCalculate.addEventListener("click", tipCalculation);


