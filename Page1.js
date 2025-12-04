<script>
  function getEdgeValue(row, col) {
    // row/col are 0-based indices for nodes [A,B,C,D]
    const table = document.querySelector('.adj-matrix');
    const bodyRows = table.tBodies[0].rows;

 

    // +1 because column 0 is the row header (A/B/C/D)
    const cell = bodyRows[row].cells[col + 1];
    return Number(cell.textContent);
  }

 

  console.log(getEdgeValue(0, 2)); // A -> C = 1
</script>

