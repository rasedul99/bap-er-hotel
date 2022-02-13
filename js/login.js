document.getElementById("login-btn").addEventListener("click", function () {
  console.log("click");
  const inputValue = document.getElementById("input-value").value;
  const inputPass = document.getElementById("input-password").value;
  if (inputValue == "rased@gmail.com" && inputPass == ".") {
    window.location.href = "banking.html";
  } else {
    alert("gmail or password incorect");
  }
});
