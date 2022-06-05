const itemForm = document.getElementById("item-form");

const submitItemForm = (event) => {
  event.preventDefault();

  const item = document.querySelector("input[name='item']");

  const price = document.querySelector("input[name='price']");

  const count = document.querySelector("input[name='count']");

  console.log(item);
};

itemForm.addEventListener("submit", submitItemForm);

console.log(itemForm);
