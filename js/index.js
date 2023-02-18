let serial=0; // to get serial number for area calculation element 
document.getElementById('triangle-calculate-btn').addEventListener('click', function () {
    // multiply two inputs
    // b x h
    const inputMultiply = multiplyInputs('triangle-first-input', 'triangle-second-input');

    // calculate the area 
    // area = 0.5 x b x h
    const area = 0.5 * inputMultiply;

    // display area to area calculation card 
    // return if input is invalid
    if(isNaN(area)){
        return
    }
    serial += 1;
    displayArea(serial,'Triangle',area);
})