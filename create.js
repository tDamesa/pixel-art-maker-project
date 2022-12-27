const myForm = document.getElementById("myForm");
const colorPicker = document.getElementById("colorPicker");
const container = document.getElementById("container");

//Listen to click events and set the color
container.addEventListener("click", (e) => {
  const selectedColor = colorPicker.value;
  console.log(e.target)
  console.log(e.target.className)
  if (e.target.id !== container.id && e.target.className !== 'row') e.target.style.backgroundColor = selectedColor;
});

//Get form data
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(myForm);
  this.designCanvas(data);
});

//Design canvas
function designCanvas(data) {
  height = parseInt(data.get("height"));
  width = parseInt(data.get("width"));

  let containerWidth = container.offsetWidth;
  container.style.setProperty("--cell-width", (containerWidth - 20) / (2 * width) + "px");
  container.innerHTML = "";
  let row = 0;

  while (row < width) {
    const rowElem = document.createElement("div");
    rowElem.setAttribute("id", "grid-" + row + "-" + 1);
    rowElem.className = "row";
    container.append(rowElem);

    for (let colum = 0; colum < height; colum++) {
      const columElem = document.createElement("div");
      columElem.setAttribute("id", "grid-" + row + "-" + colum);
      columElem.className = "cell";
      rowElem.append(columElem);
    }
    row++;
  }
}
