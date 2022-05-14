// Store the data of inputs
const calcBTN = document.getElementById("calculate");
calcBTN.addEventListener("click", function () {
  let income = document.getElementById("income").value;
  let range1 = income <= 250000;
  let range2 = income > 250000 && income <= 500000;
  let range3 = income > 500000 && income <= 1000000;
  let range4 = income >= 1000000;

  let total1 = 0;
  total1 = total1.toFixed(2);
  const total2 = ((5 / 100) * income).toFixed(2);
  const total3 = ((20 / 100) * income).toFixed(2);
  const total4 = ((30 / 100) * income).toFixed(2);

  if (income <= "") {
    alert("Please enter some amount to use the calculator.");
  } else if (range1) {
    document.getElementById("info").style.display = "block";
    document.getElementById(
      "result"
    ).innerHTML = `NO TAX<p>You owe a total amount of:</p>$ ${total1} <p>in taxes - this year.</p>`;
    // alert(`You Owe a Total Amount of $ ${total1} in Taxes This Year`);
  } else if (range2) {
    document.getElementById("info").style.display = "block";
    document.getElementById(
      "result"
    ).innerHTML = `5%<p>You owe a total amount of:</p>$ ${total2} <p>in taxes - this year.</p>`;
    // alert(`You Owe 5% Taxes Total Amount of $ ${total2} in Taxes This Year`);
  } else if (range3) {
    document.getElementById("info").style.display = "block";
    document.getElementById(
      "result"
    ).innerHTML = `20%<p>You owe a total amount of:</p>$ ${total3} <p>in taxes - this year.</p>`;
    // alert(`You Owe a Total Amoint of $ ${total3} in Taxes This Year`);
  } else if (range4) {
    document.getElementById("info").style.display = "block";
    document.getElementById(
      "result"
    ).innerHTML = `30%<p>You owe a total amount of:</p>$ ${total4} <p>in taxes - this year.</p>`;
    // alert(`You Owe a Total Amoint of $ ${total4} in Taxes This Year`);
  } else {
    alert("Invalid Characters. Please try again.");
  }
});

// let info = document.getElementById("info");
// let btnClear = document.getElementById("btnClear");

// btnClear.addEventListener =
//   ("click",
//   function () {
//     info.style.display = "none";
//   });

// info.style.display = "block";
