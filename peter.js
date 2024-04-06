function onEdit(e) {
  const sheet = e.source.getActiveSheet();
  const editedRange = e.range;
  const row = editedRange.getRow();
  const col = editedRange.getColumn();

  // Check if the edit is within the specified rows and in the relevant columns
  if (row >= 2 && row <= 15) {
    if ([2, 4, 6].includes(col)) {
      // Columns B, D, F for sections
      checkForOverlap(sheet, row);
    }
  }
}

function checkForOverlap(sheet, row) {
  const sectionValues = [
    sheet.getRange(`B${row}`).getValue(),
    sheet.getRange(`D${row}`).getValue(),
    sheet.getRange(`F${row}`).getValue(),
  ].filter((value) => value !== ""); // Filter out empty strings

  console.log(`Checking overlap for row ${row}`, sectionValues);

  // Proceed with overlap check only if there is at least one non-empty value
  if (
    sectionValues.length > 0 &&
    new Set(sectionValues).size !== sectionValues.length
  ) {
    SpreadsheetApp.getUi().alert(
      "Overlap detected in sections. Please choose a different section."
    );
    sheet.getActiveCell().clearContent();
  }
}
