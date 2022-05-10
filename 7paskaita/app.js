console.log("7 paskaita, formos");

const exampleForm = document.getElementById("example-form");

exampleForm.addEventListener("submit", handleSubmitExampleForm);

function handleSubmitExampleForm(event) {
  event.preventDefault();
  const nameInput = document.querySelector("input[name=Username]");
  const nickNameInput = document.querySelector("input[name=Nickname]");
  const resultNode = document.getElementById("Example-result");
  const fullName = `${nameInput.value} ${nickNameInput.value}`;
  resultNode.textContent = `Sveikiname ${fullName}, Jūs priimtas!`;

  nameInput.value = "";
  nickNameInput.value = "";

  //   console.log(nameInput.value);
  //   console.log(nickNameInput.value);
  //   console.log("Example form submited");
}

const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", handleSubmitRegisterForm);

function handleSubmitRegisterForm(event) {
  event.preventDefault();

  const userName = document.querySelector("input[name= Username]");
  const password = document.querySelector("input[name= password]");
  const email = document.querySelector("input[name= email]");
  const result = document.querySelector("#redister-result");

  result.textContent = `${userName.value} ${email.value}`;

  username.value = "";

  password.value = "";

  email.value = "";
}
