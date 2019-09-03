function insert_Row() {
  const table = document.querySelector('#sampleTable');
  const rows = document.querySelectorAll('tr');
  table.insertAdjacentHTML(
    'beforeend',
    `<tr>
  <td>Row${rows.length + 1} cell1</td>
  <td>Row${rows.length + 1} cell2</td>
</tr>`
  );
}
