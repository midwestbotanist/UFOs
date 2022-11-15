// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build table
function buildTable(data) {

    // Clear out existing data
    tbody.html("");

    // Using forEach function to iterate through each object in data
    // Append a row and cells for each value in row ("tr")
    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        // Loop through each field in dataRow
        // Add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });

}