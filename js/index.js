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


document.getElementById('triangle-calculate-btn').addEventListener('click', function () {
    // get input value 
    const b = getInputFieldValueById('triangle-first-input');
    const h = getInputFieldValueById('triangle-second-input');

    // validation part 2
    if (b == false || h == false) {
        return alert('please enter a valid number')
    }
    // calculate the area 
    const area = 0.5 * b *h;
    console.log(area);
})