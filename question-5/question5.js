function changeContent() {
  const validateRowCol = targetRow => targetCol => table => {
    const rowCount = table.getElementsByTagName("tr").length;
    const colCount = table
      .getElementsByTagName("tr")[0]
      .getElementsByTagName("td").length;
      console.log('rowCount,colCount', rowCount,colCount)
    return (
      targetRow > 0 &&
      targetCol > 0 &&
      targetRow <= rowCount &&
      targetCol <= colCount
    );
  };
  const table = document.getElementById("contentTable");
  const form = document.getElementById("changeContentForm");
  const targetRow = form.elements.namedItem("tableRow").value;
  const targetCol = form.elements.namedItem("tableCol").value;
  const newContent = form.elements.namedItem("newContent").value;
  const logMessagePara = document.getElementsByClassName("logMessage")[0];
  if (validateRowCol(targetRow)(targetCol)(table)) {
    table
      .getElementsByTagName("tr")[targetRow - 1]
      .getElementsByTagName("td")[targetCol - 1]
      .innerHTML = newContent;
    logMessagePara.innerHTML = `row:${targetRow} & col:${targetCol} updated to ${newContent}`;
  }
  else{
    logMessagePara.innerHTML = `row:${targetRow} & col:${targetCol} do not exist. Please enter a valid row & column `;
  }
}
