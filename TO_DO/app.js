fetch("https://jsonplaceholder.typicode.com/todos")
  .then((resp) => resp.json())
  .then((users) => {
    appList(users);
  })
  .catch((error) => {
    console.error(error);
  });

// PIRMA SUKURTI UL IR TADA APPEND LI
// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false

const appList = (users) => {
  // Create time and date
  const divMain = document.createElement("div");
  divMain.style.display = "flex";
  divMain.style.justifyContent = "space-between";
  //
  const divSubMain1 = document.createElement("div");
  divSubMain1.className = "date";
  divSubMain1.style.marginRight = "20px";
  const currentDate = document.createElement("h3");
  currentDate.textContent =
    new Date().getFullYear() +
    "-" +
    ("0" + (new Date().getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + new Date().getDate()).slice(-2);
  divSubMain1.append(currentDate);

  // create to-do containers
  const divSubMain2 = document.createElement("div");
  divSubMain2.className = "weekday";
  divSubMain2.style.marginLeft = "20px";
  const currentDay = document.createElement("h3");
  currentDay.textContent = new Date().toLocaleString("en-us", {
    weekday: "long",
  });
  divSubMain2.append(currentDay);
  divMain.append(divSubMain1, divSubMain2);
  document.body.append(divMain);
  //
  const toDoDiv = document.createElement("div");
  toDoDiv.style.marginRight = "20px";
  const usersText = document.createElement("ul");
  toDoDiv.append(usersText);
  document.body.append(toDoDiv);
  //
  //   const selectItem = document.querySelector("ul");
  //   selectItem.addEventListener("click", () => {
  //     var color = document.querySelector("li");
  //     color.style.color = "red";
  //   });

  //
  const masterDiv = document.createElement("div");

  users.forEach((user) => usersText.append(appUsers(user)));
};

const appUsers = (users) => {
  const usersText = document.createElement("li");
  usersText.textContent = users.title;
  if (users.completed === true) {
    usersText.style.color = "#c0c5ce";
  } else {
    usersText.style.color = "#343d46";
  }

  return usersText;
};
