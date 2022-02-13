// handle deposit button event
document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositInput = document.getElementById("deposit-input");
  const newDepositAmountText = depositInput.value;
  const newDepositAmount = parseFloat(newDepositAmountText);

  const depositTotal = document.getElementById("deposit-total");

  const previousDepositText = depositTotal.innerText;
  const previousDepositAmount = parseFloat(previousDepositText);

  const newDepositTotal = previousDepositAmount + newDepositAmount;

  depositTotal.innerText = newDepositTotal;
  depositInput.value = "";

  const totalBalance = document.getElementById("balance");
  const currentBalanceText = totalBalance.innerText;
  const currentBalance = parseFloat(currentBalanceText);
  let newBalance = currentBalance + newDepositAmount;
  totalBalance.innerText = newBalance;

  // withdraw  functionality added
  // const withdrawText = document.getElementById("withdraw").innerText;
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawText = withdrawInput.value;
  const withdrawAmount = parseFloat(withdrawText);

  // set withdraw total

  const withdrawTotal = document.getElementById("withdraw-total");
  const previousWithdrawText = withdrawTotal.innerText;

  const previousWithdrawTotal = parseFloat(previousWithdrawText);
  const newWithdrawTotal = previousWithdrawTotal + withdrawAmount;
  withdrawTotal.innerText = newWithdrawTotal;
  withdrawInput.value = "";

  const balance = document.getElementById("balance");
  const totalBalanceText = balance.innerText;
  // console.log(totalBalanceText);
  const totalBalance = parseFloat(totalBalanceText);
  // console.log(totalBalance);
  const newTotalBalance = totalBalance - withdrawAmount;
  balance.innerText = newTotalBalance;
});
