<script>
/* ============================================================
   GET VALUE FROM MATRIX (row/col are 0-based: A=0, B=1, C=2, D=3)
   Reads the value from the table cell at [row][col]
============================================================ */
function getEdgeValue(row, col) {
    const table = document.getElementById("matrixTable");
    const bodyRows = table.rows;

    // +1 to skip row/column header labels
    const cell = bodyRows[row + 1].cells[col + 1];

    return cell.textContent.trim();
}

/* ============================================================
   SET VALUE IN MATRIX
   Writes the value into the table cell at [row][col]
============================================================ */
function setEdgeValue(row, col, value) {
    const table = document.getElementById("matrixTable");
    const bodyRows = table.rows;

    const cell = bodyRows[row + 1].cells[col + 1];
    cell.textContent = value;
}

/* ============================================================
   OPTIONAL EXAMPLES (you can delete these if you want)
============================================================ */
console.log("A → C =", getEdgeValue(0, 2)); // reads row A, col C

setEdgeValue(1, 3, "5"); // sets B → D to "5"
console.log("B → D updated to:", getEdgeValue(1, 3));

</script>



