function addData() {
    let btn;
    let totalMainRow = mainRow;

    let lastRow = table.insertRow(-1);
    lastRow.id = `row${totalMainRow}`;
    let countTotalCells = table.rows[0].cells.length;

    for (let colNumber = 1; colNumber <=countTotalCells; colNumber++) {
        let cell = lastRow.insertCell();
        cell.id = `tdRow${totalMainRow}${colNumber}`;

        if (colNumber < countTotalCells) {
            let textInput = document.createElement("input");
            textInput.type = "text";
            textInput.id = `textField${totalMainRow}${colNumber}`;
            cell.appendChild(textInput);
        }
        else {
            btn = document.createElement('input');
            btn.type = "button";
            btn.value = "Edit";
            btn.id = `editBtn${totalMainRow}`;
            btn.onclick = function() {
                editData(totalMainRow);
            };
            cell.appendChild(btn);

            btn = document.createElement('input');
            btn.type = "button";
            btn.value = "Save";
            btn.id = `saveBtn${totalMainRow}`;
            btn.onclick = function() {
                saveData(totalMainRow);
            };
            cell.appendChild(btn);

            btn = document.createElement('input');
            btn.type = "button";
            btn.value = "Delete";
            btn.id = `deleteBtn${totalMainRow}`;
            btn.onclick = function() {
                deleteData(totalMainRow);
            };
            cell.appendChild(btn);
        }
    }
    mainRow++;
}

function editData(rowNumber) {
    let totalColumn = table.rows[0].cells.length;
    
    for (let colNumber = 1; colNumber <= totalColumn-1; colNumber++) {
        let cellTdId = document.getElementById(`tdRow${rowNumber}${colNumber}`);
        let cellTdData = cellTdId.innerText;
        cellTdId.innerHTML = "";

        let txtField = document.createElement('input');
        txtField.type = "text";
        txtField.id = `textField${rowNumber}${colNumber}`;
        txtField.value = cellTdData;
        cellTdId.appendChild(txtField);
    }
}

function saveData(rowNumber) {
    let totalColumn = table.rows[0].cells.length;

    for (let colNumber = 1; colNumber <= totalColumn; colNumber++) {
        let textFieldValue = document.getElementById(`textField${rowNumber}${colNumber}`).value;
        let cellTdId = document.getElementById(`tdRow${rowNumber}${colNumber}`);
        cellTdId.innerHTML = textFieldValue;
    }
}

function deleteData(rowNumber) {
    document.getElementById(`row${rowNumber}`).outerHTML = "";
}
