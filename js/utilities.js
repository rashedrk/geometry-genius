// function to get input from the input field by using id
function getInputFieldValueById(inputId) {
    const inputFieldElement = document.getElementById(inputId);
    const inputValueString = inputFieldElement.value;
    inputFieldElement.value = '';
    // validation part 1
    if(isNaN(inputValueString) || inputValueString =='' || inputValueString <= 0){
        return false;
    }
    const inputValue = parseFloat(inputValueString);
    return inputValue
}

// function to multiply two input 
function multiplyInputs(firstInputId,secondInputId) {
    // get input value
    const firstInput = getInputFieldValueById(firstInputId);
    const secondInput = getInputFieldValueById(secondInputId);
    // validation part 2
    if (firstInput == false || secondInput == false) {
        return alert('please enter a valid number');
    }
    // return result after multiply
    return firstInput * secondInput
}

// function to display area after calculation
function displayArea(serial,name,area) {
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr')
    tr.innerHTML = `
        <th>${serial}</th>
        <td>${name}</td>
        <td>${area}cm<sup>2<sup></td>
        <td><button class="btn btn-primary">Convert to m<sup>2</sup></button></td>
        
    `;
    tableContainer.appendChild(tr);
}