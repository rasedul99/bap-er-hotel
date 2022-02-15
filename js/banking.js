function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);

  // clear input Field

  inputField.value = "";
  return amountValue;
}

function updateTotalField(totalFieldId, depositAmount) {
  const totalElement = document.getElementById(totalFieldId);
  const previousTotalText = totalElement.innerText;
  const previousTotal = parseFloat(previousTotalText);
  const newTotal = previousTotal + depositAmount;
  totalElement.innerText = newTotal;
}

// update balance
function updateBalance(balanceId) {
  const balance = document.getElementById("balance");
  const previousBalanceText = balance.innerText;
  const previousBalance = parseFloat(previousBalanceText);
  return previousBalance;
}

document.getElementById("deposit-btn").addEventListener("click", function () {
  // get deposit input
  const depositAmount = getInputValue("deposit-input");

  updateTotalField("deposit-total", depositAmount);

  // update balance after deposit

  const Balance = updateBalance("balance");
  const newBalance = Balance + depositAmount;
  balance.innerText = newBalance;
});

// handle withdraw button
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // get withdraw input

  const withdrawAmount = getInputValue("withdraw-input");

  // get current withdraw

  updateTotalField("withdraw-total", withdrawAmount);

  // update balance after withdraw

  const Balance = updateBalance("balance");
  const newBalance = Balance - withdrawAmount;
  balance.innerText = newBalance;
});
