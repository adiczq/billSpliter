const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const btn = document.querySelector(".count");
const error = document.querySelector(".error");
const costInfo = document.querySelector(".cost-info");
const cost = document.querySelector(".cost");
const costTip = document.querySelector(".costTip");

const check = () => {
  if (price.value == "" || people.value == "" || tip.value == 0) {
    error.textContent = "Uzupełnij wszystkie pola!";
    costInfo.style.display = "none";
  } else {
    error.textContent = "";
    countBill();
  }
};

const countBill = () => {
  const newPrice = parseFloat(price.value);
  const newPeople = parseInt(people.value);
  const newTip = parseFloat(tip.value);
  const total = newPrice + newPrice * newTip;
  const sum = (newPrice + newPrice * newTip) / newPeople;
  costInfo.style.display = "block";
  console.log(sum);
  cost.textContent = sum.toFixed(2);
  costTip.textContent = total.toFixed(2);
};

btn.addEventListener("click", check);
