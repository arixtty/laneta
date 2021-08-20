const passwordInputs = document.querySelectorAll(".password-input");
const iconToggles = document.querySelectorAll(".icon-toggle-password");

iconToggles.forEach((icon) => icon.addEventListener("click", togglePassword));

function togglePassword(e) {
  // toggle the type attribute
  const inputField = e.target.previousElementSibling;
  const iconLockOpen = e.target.nextElementSibling;
  console.log(inputField);
  const type =
    inputField.getAttribute("type") === "password" ? "text" : "password";
  inputField.setAttribute("type", type);
}
