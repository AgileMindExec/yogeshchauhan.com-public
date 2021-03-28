let allColumns = document.querySelectorAll(".column");

function flip() {
  const selections = document.querySelectorAll('input[name="yc-form-switch"]');

  let userSelection;
  for (const selection of selections) {
    if (selection.checked) {
      userSelection = selection.value;
      if (userSelection == "yearly") {
        allColumns.forEach((column) => column.classList.add("flip"));
      } else {
        allColumns.forEach((column) => column.classList.remove("flip"));
      }
    }
  }
}
