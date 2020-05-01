const billValue = document.getElementById("billAmount")
  const serviceQuality = document.getElementById("tipAmount")
  const numberOfGuests = document.getElementById("amountGuests")
  const tipDisplay = document.getElementById("output")
  let tip = undefined
  const tipCalculate = document.getElementById("submit")
  
  function tipCalculation() {
      if (!billValue.value){
          alert('Enter Your Bill Amount')
          return;
      }
      if (!numberOfGuests.value){
          alert('Please enter your guest')
          return;
      }
      
      if (isNaN(billValue.value)) {
          alert("Please enter a valid number")
      }
      if (isNaN(numberOfGuests.value)) {
          alert("Enter a valid number of guests")
      }
      let num = (billValue.value * serviceQuality.value) / numberOfGuests.value
      let tip = num.toFixed(2)
      if (numberOfGuests.value >= 2) {
          tipDisplay.innerHTML = `Your tip is ${tip} each`
      }
      else { tipDisplay.innerHTML = `Your tip is ${tip}` }
  
  }
  tipCalculate.addEventListener("click", tipCalculation);
  