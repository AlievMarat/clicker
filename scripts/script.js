const eyeShow = document.querySelector(".show");
const notShow = document.querySelector(".not-show");
const typeInput = document.querySelector(".input-type");
const inputEmail = document.querySelector(".input__email");
const inputPassword = document.querySelector(".input__password");
const submit = document.querySelector(".form__submit");
const emailValue = document.querySelector(".input-email");
const sidebarbtn = document.querySelector(".sidebar__total--btn");
const submitObj = {
  email: "",
  password: "",
};
const updateSubmitObj = (key) => (e) => (submitObj[key] = e.target.value);

inputPassword.addEventListener("input", updateSubmitObj("password"));
inputPassword.addEventListener("input", updateSubmitObj("email"));
submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(submitObj);
});
function showIcon(oneIcon, twoIcon) {
  eyeShow.style.display = oneIcon;
  notShow.style.display = twoIcon;
}
typeInput.getAttribute("type") == "password" && showIcon("block", "none");

notShow.addEventListener("click", () => {
  if (typeInput.getAttribute("type") === "text") {
    typeInput.setAttribute("type", "password");
    showIcon("block", "none");
  }
});
notShow.removeEventListener("click", () => {
  if (typeInput.getAttribute("type") === "text") {
    typeInput.setAttribute("type", "password");
    showIcon("block", "none");
  }
});
eyeShow.addEventListener("click", () => {
  if (typeInput.getAttribute("type") === "password") {
    typeInput.setAttribute("type", "text");
    showIcon("none", "block");
  }
});
eyeShow.removeEventListener("click", () => {
  if (typeInput.getAttribute("type") === "password") {
    typeInput.setAttribute("type", "text");
    showIcon("none", "block");
  }
});
const btnBuy = document.querySelector(".sidebar__total--btn");
const sidebarCard = document.querySelector(".sidebar__card");

btnBuy.addEventListener("mouseover", () => {
  sidebarCard.classList.add("hover-sidebar");
});

btnBuy.addEventListener("mouseout", () => {
  sidebarCard.classList.remove("hover-sidebar");
});
