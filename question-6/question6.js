function createTable() {
  const form = document.getElementById("createTableForm");
  const messageLog = document.getElementsByClassName("messageLog")[0];
  const table = document.getElementById("newTable");
  const noOfRows = form.elements.namedItem("tableRow").value;
  const noOfCols = form.elements.namedItem("tableCol").value;
  for (let i = 0; i < noOfRows; i += 1) {
    const row = table.insertRow(-1);
    for (let j = 0; j < noOfCols; j += 1) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(
        `Row${i + 1} Cell${j + 1}`
      );
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  messageLog.innerHTML = "New Table Created";
}
