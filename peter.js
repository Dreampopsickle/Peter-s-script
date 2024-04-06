function checkForDuplicates() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range1 = sheet.getRange('B2:B15'); // range of section 1
  const range2 = sheet.getRange('D2:D15'); // range of section 2
  const range3 = sheet.getRange('F2:F15'); // range of section 3
  const values1 = range1.getValues();
  const values2 = range2.getValues();
  const values3 = range3.getValues();
  let duplicates = [];

  const flatValuesLoop = (arr) => {
    arr.forEach((value, index) => {
      if (value !== "" && arr.indexOf(value) && !duplicates.includes(value)) {
        duplicates.push(value);
      }
    });
  };

  // Flatten Array of arrays to single level and check for duplicates
  flatValuesLoop(values1.flat());
  flatValuesLoop(values2.flat());
  flatValuesLoop(values3.flat());

  // Log Results
  if (duplicates.length > 0) {
    console.log('Duplicates Found: ${duplicates.join(", ")}');
  } else {
    console.log("No Duplicates Found.");
  }

}
