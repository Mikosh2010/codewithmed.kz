const checkbox = document.querySelector("#hide_checkbox");
const discountCheck = document.querySelector("#discount_check");
let price = document.getElementById("price_text");
let discountText = document.getElementById("discount_text");
let priceDiscount = document.getElementById("price_discount");
let oldPrice = document.getElementById("old_price");
let discountPercent = document.getElementById("discount_percent");

const defaultPrice = "50.000";
const discountPrice = "15.000";
const discount = "70%";
price.textContent = defaultPrice;
discountText.textContent = `Бүгінгі ${discount} жеңілдікті активация жасау 🔥`;

discountCheck.addEventListener("click", () => {
  if (discountCheck.checked) {
    priceDiscount.style.display = "flex";
    oldPrice.textContent = price.textContent;
    discountPercent.textContent = `${discount} сақтап қал!`;

    price.textContent = discountPrice;
  } else {
    price.textContent = defaultPrice;
    priceDiscount.style.display = "none";
  }
});

hide_checkbox.addEventListener("click", () => {
  const body = document.body;

  if (checkbox.checked) {
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
});
