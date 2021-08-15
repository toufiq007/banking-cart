// making banking page functional
// deposite money logic
document.getElementById("depositeButton").addEventListener("click",function(){
  let depositeInput = document.getElementById("depositeInput");
  let previousDepositeAmmount = document.getElementById("previousDepositeAmmount");
  let previousMainAmmount = document.getElementById("previousMainAmmount");

  // calculate deposite ammount
  previousDepositeAmmount.innerText = parseFloat(previousDepositeAmmount.innerText) + parseFloat(depositeInput.value)
  // calculate main balance
  previousMainAmmount.innerText = parseFloat(previousMainAmmount.innerText) - parseFloat(depositeInput.value);
  depositeInput.value = ""
})