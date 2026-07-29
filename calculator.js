let calculation = "";
function calc(value) {
  calculation += value;
  document.querySelector(".input").value = calculation;
}
function equals() {
  //used to round off decimals
  calculation = eval(calculation);
  if (Math.floor(calculation) === calculation)
    document.querySelector(".input").value = calculation;
  else {
    calculation = calculation.toFixed(3);
    document.querySelector(".input").value = calculation;
  }
}
function del() {
  calculation = calculation.slice(0, -1);
  document.querySelector(".input").value = calculation;
}
function ac() {
  calculation = "";
  document.querySelector(".input").value = calculation;
}

document.body.addEventListener("keydown", (value) => {
  if (("0987654321").includes(value.key))
    calc(value.key);
  else if (value.key === "Backspace") del();
  else if (value.key === "Enter") equals();
});
