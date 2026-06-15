const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

  event.preventDefault();

  document.getElementById("success").innerText =
    "Thank you! Your message has been submitted.";

  form.reset();

});