function addData() {
    let totalMainRow = mainRow;
    let lastRow = table.insertRow(-1);
    lastRow.id = `row${totalMainRow}`;

    let countTotalCells = table.rows[0].cells.length;

    for (let colNumber = 1; colNumber <=countTotalCells; colNumber++) {
        let cell = lastRow.insertCell();
        cell.id = `tdRow${totalMainRow}${colNumber}`;

        if (colNumber == 1) {
            let inputCheckBox = document.createElement("input");
            inputCheckBox.type = "checkbox";
            inputCheckBox.id = `tdCb${totalMainRow}${colNumber}`;
            inputCheckBox.onchange = function() {
                checkBoxValueChange();
            }
            cell.appendChild(inputCheckBox);
        }
        else if (colNumber == 2) {
            cell.innerText = totalMainRow;
            cell.id = `tdRow${totalMainRow}${colNumber}`;
        }
        else {
            let textInput = document.createElement("input");
            textInput.type = "text";
            textInput.id = `textField${totalMainRow}${colNumber}`;
            cell.appendChild(textInput);
        }
    }
    rowNumberList.push(mainRow.toString());
    mainRow++;
}

function checkBoxValueChange() {
    let numberPattern = /\d+/g;
    let tableRowId = event.target.parentNode.parentNode.id;

    // Taking out row Number and match method return as a array so we taking only 1st value
    let rowNumber = tableRowId.match(numberPattern);

    if (rowNumberList.includes(rowNumber[0])) {
        // For Same Select Remove (In Future I use For Remove Same or Both Index Value)
        // let indexValue = rowNumberList.indexOf(rowNumber[0]);
        // if (indexValue > -1) {
        //     // Remove Uncheck RowId Number from list
        //     rowNumberList.splice(indexValue, 1);
        // }
        // Remove Duplicate Row Id
        rowNumberList.filter((value, index) => rowNumberList.indexOf(value) !== index);
    }
    else {
        rowNumberList.push(rowNumber[0]);
    }
    // console.log(rowNumberList);
}

function editData(rowNumberListData) {
    let totalColumn = table.rows[0].cells.length;

    try {
        if (rowNumberListData.length) {
            for (let totalSelect = 0; totalSelect < rowNumberListData.length; totalSelect++) {
                for (let colNumber = 3; colNumber <= totalColumn; colNumber++) {
                    let cellTdId = document.getElementById(`tdRow${rowNumberListData[totalSelect]}${colNumber}`);
                    let cellTdData = cellTdId.innerText;
                    cellTdId.innerHTML = "";

                    let txtField = document.createElement('input');
                    txtField.type = "text";
                    txtField.id = `textField${rowNumberListData[totalSelect]}${colNumber}`;
                    txtField.value = cellTdData;
                    cellTdId.appendChild(txtField);
                }
            }
        }
        else {
            throw new Error("Please Select Row for Edit")
        }
    }
    catch(error) {
        alert(error.message);
    }
}

function saveData(rowNumberListData) {
    let totalColumn = table.rows[0].cells.length;

    try {
        if (rowNumberListData.length) {
            for (let totalSelect = 0; totalSelect < rowNumberListData.length; totalSelect++) { 
                for (let colNumber = 3; colNumber <= totalColumn; colNumber++) {
                    let textFieldValue = document.getElementById(`textField${rowNumberListData[totalSelect]}${colNumber}`).value;
                    let cellTdId = document.getElementById(`tdRow${rowNumberListData[totalSelect]}${colNumber}`);
                    cellTdId.innerHTML = textFieldValue;
                }
                document.getElementById(`tdCb${rowNumberListData[totalSelect]}1`).checked = false;
            }
        }
        else {
            throw new Error("Please Select Row for Save")
        }
    }
    catch(error) {
        alert(error.message);
    }
    rowNumberList = [];
}

function deleteData(rowNumberListData) {
    try {
        if (rowNumberListData.length) {
            for (let totalSelect = 0; totalSelect < rowNumberListData.length; totalSelect++) { 
                document.getElementById(`row${rowNumberListData[totalSelect]}`).outerHTML = "";
            }
        }
        else {
            throw new Error("Please Select Row for Delete")
        }
    }
    catch(error) {
        alert(error.message);
    }
}
