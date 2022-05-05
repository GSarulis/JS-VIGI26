const nameButton = document.getElementById("name");
nameButton.addEventListener("click", clickButtonLister);

function clickButtonLister() {
  alert("Gediminas");
}

const backgroundButton = document.getElementById("background");
backgroundButton.addEventListener("click", onClickBackgroungButton);

function onClickBackgroungButton() {
  document.body.style.backgroundColor = "green";
}
const buttonLogin = document.getElementById("login");
buttonLogin.addEventListener("click", loginHandler);
function loginHandler() {
  const h1Node = document.querySelector("h1");
  h1Node.textContent = "Hello, Gediminas!";
  buttonLogin.textContent = "Log out";
}
