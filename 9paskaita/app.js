const painter = document.querySelector("input[name=painter]");
painter.addEventListener("input", (event) => {
  const value = event.target.value;
  const result = document.getElementById("painter-result");
  let paintedI = "";
  for (let i = 0; i < value; i++) {
    paintedI += "<div>I</div>";
  }
  result.innerHTML = paintedI;
  console.log(value);
});
