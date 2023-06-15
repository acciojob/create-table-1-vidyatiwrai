// script.js

function insert_Row() {
  const table = document.getElementById('sampleTable');
  const newRow = table.insertRow(0); // Insert row at the top

  // Create the left cell and set its content
  const leftCell = newRow.insertCell(0);
  leftCell.textContent = 'New Cell1';

  // Create the right cell and set its content
  const rightCell = newRow.insertCell(1);
  rightCell.textContent = 'New Cell2';
}

