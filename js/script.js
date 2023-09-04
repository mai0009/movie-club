const discountCodePreview = document.querySelectorAll(".discountCodeHere");
const discountCodeBox = document.querySelectorAll(".discount-code");

for (let i = 0; i < discountCodePreview.length; i++) {
  discountCodePreview[i].addEventListener("click", function () {
    discountCodeBox[i].classList.toggle("hidden");
  });
}
