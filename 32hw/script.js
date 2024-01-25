function setTableParameters(row, col) {
    const table = document.createElement("table");
       
    let count = 1;
    for (let i = 0; i < row; i++) {
        const addRow = table.insertRow(i);
        for (let j = 0; j < col; j++) {
            const cell = addRow.insertCell(j);
            cell.innerHTML = count++;
        }
    }
    return document.body.appendChild(table);
}

setTableParameters(10, 10);