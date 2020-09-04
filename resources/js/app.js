// * ---------------- Selection ------------------------- *
const form = document.querySelector("form");
const userInput = document.querySelector(".userInput");
const userLink = document.querySelector(".userLink");
const messageForm = document.querySelector("#message-form");
const linkForm = document.querySelector("#link-form");
const messageShow = document.querySelector("#message-show");
const heading = document.querySelector(".heading");
const userNameInput = document.querySelector(".userName");
const userNameShow = document.querySelector(".userName-show");

// * ---------------- Handling Fome Event ------------------------- *

form.addEventListener("submit", (event) => {
  event.preventDefault();

  messageForm.classList.add("hide");
  linkForm.classList.remove("hide");

  const strToBase64Message = btoa(userInput.value);
  userLink.value = `${window.location}#${strToBase64Message}`;
  userLink.select();
});

// * ---------------- Getting User Message ------------------------- *

const { hash } = window.location;
// const secretMessageArr = hash.replace("#", "").split("-");
// console.log(secretMessageArr);
const secretMessage = atob(hash.replace("#", ""));

if (secretMessage) {
  messageForm.classList.add("hide");
  messageShow.classList.remove("hide");
  heading.textContent = secretMessage;
}
