"strict";

const btn5 = parseInt(document.querySelector("#btn-5").innerHTML);
const btn10 = +parseInt(document.querySelector("#btn-10").innerHTML);
const btn15 = +parseInt(document.querySelector("#btn-15").innerHTM);
const btn20 = +parseInt(document.querySelector("#btn-20").innerHTM);
const btn50 = +parseInt(document.querySelector("#btn-50").innerHTML);
const btn = document.querySelectorAll("button");
const reset = document.querySelector("#reset");
// let totalAmount = parseInt(document.querySelector("#totalamount").innerHTML);
const form = document.querySelectorAll(".form");
const totalPerperson = document.querySelector("#totalamount");

// const btn = document.querySelectorAll("#btn");
let percentage = 0;
// console.log(btn5);

btn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    percentage = `${parseInt(e.target.innerHTML)}`;
    // console.log(percentage);
  });
});

form.forEach((Element) =>
  Element.addEventListener("submit", function (e) {
    e.preventDefault();
    const billAmount = +document.getElementById("bill-amount").value;
    const people = document.querySelector("#people").value;
    tipAmount = (percentage / 100) * billAmount;
    console.log("--------------");
    document.querySelector(".tip-amount").textContent = (
      tipAmount / people
    ).toFixed(2);

    totalPerperson.textContent = ((tipAmount + billAmount) / people).toFixed(2);

    console.log(people);
  })
);

reset.addEventListener("click", function (e) {
  location.reload();
});
