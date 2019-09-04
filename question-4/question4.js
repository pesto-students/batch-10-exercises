function insertRow() {
  const messageLog = document.getElementsByClassName('logMessage')[0];
  const table = document.getElementById('sampleTable');
  const noOfRows = table.getElementsByTagName('tr').length;
  const row = table.insertRow(-1);
  for (let j = 0; j < 2; j += 1) {
    const cell = document.createElement('td');
    const cellText = document.createTextNode(`Row${noOfRows + 1} cell${j + 1}`);
    cell.appendChild(cellText);
    row.appendChild(cell);
  }
  table.appendChild(row);
  messageLog.innerHTML = 'New Row Added';
}
