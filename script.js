function doPost(e) {
  try {
    var sheet = SpreadsheetApp
      .getActiveSpreadsheet()
      .getActiveSheet();

    sheet.appendRow([
      new Date(),                       // Time
      e.parameter["full-name"] || "",   // Full Name
      e.parameter["mobile"] || "",      // Mobile
      e.parameter["email"] || "",       // Email
      e.parameter["state"] || "",       // State
      e.parameter["city"] || "",        // City
      e.parameter["gender"] || "",      // Gender
      e.parameter["age"] || ""          // Age
    ]);

    return ContentService
      .createTextOutput("Success")
      .setMimeType(ContentService.MimeType.TEXT);

  } catch (error) {
    return ContentService
      .createTextOutput("Error: " + error)
      .setMimeType(ContentService.MimeType.TEXT);
  }
}
