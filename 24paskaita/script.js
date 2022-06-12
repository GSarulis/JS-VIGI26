fetch("https://magnetic-melon-yam.glitch.me")
  .then((resp) => resp.json())
  .then((users) => {
    renderTable(users);
  })
  .catch((error) => {
    console.error(error);
  });

// ID, name, city, fav_color

const renderTable = (users) => {
  const thId = document.createElement("th");
  const thname = document.createElement("th");
  const thcity = document.createElement("th");
  const thfav_color = document.createElement("th");

  thId.textContent = "ID";
  thId.style.textAlign = "left";
  thname.textContent = "Name";
  thname.style.textAlign = "left";
  thcity.textContent = "City";
  thcity.style.textAlign = "left";
  thfav_color.textContent = "Favorite color";

  const trow = document.createElement("tr");
  const thead = document.createElement("thead");
  const table = document.createElement("table");

  trow.append(thId, thname, thcity, thfav_color);
  thead.append(trow);
  table.append(thead);

  const tableBody = document.createElement("tbody");
  table.append(tableBody);
  document.body.append(table);

  users.forEach((user) => tableBody.append(renderUsers(user)));
};

const renderUsers = (users) => {
  const tdId = document.createElement("td");
  const tdName = document.createElement("td");
  const tdCity = document.createElement("td");
  const tdFavColor = document.createElement("td");

  tdId.textContent = users.id;
  tdName.textContent = users.name;
  tdCity.textContent = users.city;
  tdFavColor.textContent = users.fav_color;

  const trUser = document.createElement("tr");
  trUser.append(tdId, tdName, tdCity, tdFavColor);

  return trUser;
};
