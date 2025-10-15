
// Sample JSON data
const jsonData = [
    { "Name": "Alice", "Age": 25, "City": "New York" },
    { "Name": "Bob", "Age": 30, "City": "Los Angeles" },
    { "Name": "Charlie", "Age": 35, "City": "Chicago" }
];

// Get table elements
const tableHeader = document.getElementById('tableHeader');
const tableBody = document.getElementById('tableBody');

// Generate table headers dynamically
const headers = Object.keys(jsonData[0]);
headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    tableHeader.appendChild(th);
});

// Generate table rows dynamically
jsonData.forEach(row => {
    const tr = document.createElement('tr');
    headers.forEach(header => {
        const td = document.createElement('td');
        td.textContent = row[header];
        tr.appendChild(td);
    });
    tableBody.appendChild(tr);
});
