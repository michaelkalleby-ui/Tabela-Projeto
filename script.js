document.getElementById("listaBtn").addEventListener("click", function () {
  window.location.href = "produtos.html";
});

// Table cross highlight effect: row and column highlight on cell hover
const table = document.querySelector("table");
if (table) {
  const cells = table.querySelectorAll("tbody td");
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      const columnIndex = cell.cellIndex;
      const row = cell.parentElement;
      row.classList.add("row-highlight");
      const tbodyRows = table.querySelectorAll("tbody tr");
      tbodyRows.forEach((r) => {
        const cellInColumn = r.cells[columnIndex];
        if (cellInColumn && cellInColumn.tagName === "TD") {
          cellInColumn.classList.add("column-highlight");
        }
      });
    });
    cell.addEventListener("mouseleave", () => {
      const columnIndex = cell.cellIndex;
      const row = cell.parentElement;
      row.classList.remove("row-highlight");
      const tbodyRows = table.querySelectorAll("tbody tr");
      tbodyRows.forEach((r) => {
        const cellInColumn = r.cells[columnIndex];
        if (cellInColumn && cellInColumn.tagName === "TD") {
          cellInColumn.classList.remove("column-highlight");
        }
      });
    });
  });
}

// Cross highlight for produtos page
const container = document.querySelector(".container");
if (container) {
  const produtos = container.querySelectorAll(".produto");
  if (produtos.length === 4) {
    // assume 2x2 grid
    produtos.forEach((produto, index) => {
      produto.addEventListener("mouseenter", () => {
        const row = Math.floor(index / 2);
        const col = index % 2;
        produtos.forEach((p, i) => {
          const pRow = Math.floor(i / 2);
          const pCol = i % 2;
          if (pRow === row) {
            p.classList.add("row-highlight");
          }
          if (pCol === col) {
            p.classList.add("column-highlight");
          }
          if (pRow === row && pCol === col) {
            p.classList.add("intersection-highlight");
          }
        });
      });
      produto.addEventListener("mouseleave", () => {
        produtos.forEach((p) => {
          p.classList.remove(
            "row-highlight",
            "column-highlight",
            "intersection-highlight",
          );
        });
      });
    });
  }
}
