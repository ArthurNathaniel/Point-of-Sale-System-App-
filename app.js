document.addEventListener("DOMContentLoaded", function () {
  const orderButtons = document.querySelectorAll(".orderButton");
  const orderForm = document.getElementById("orderForm");
  const closeButton = document.getElementById("closeButton");

  orderButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Toggle the visibility of the form
      if (orderForm.classList.contains("hidden")) {
        orderForm.classList.remove("hidden");
      } else {
        orderForm.classList.add("hidden");
      }
    });
  });

  closeButton.addEventListener("click", function () {
    orderForm.classList.add("hidden");
  });
});
