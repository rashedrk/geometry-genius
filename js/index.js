let serial=0; // to get serial number for area calculation element 

// for triangle 
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
});

// for rectangle 
document.getElementById('rectangle-calculate-btn').addEventListener('click', function () {
    // multiply two inputs
    // calculate the area 
    // w x l
    const area = multiplyInputs('rectangle-first-input', 'rectangle-second-input');

    // display area to area calculation card 
    // return if input is invalid
    if(isNaN(area)){
        return
    }
    serial += 1;
    displayArea(serial,'Rectangle',area);
});

// for parallelogram 
document.getElementById('parallelogram-calculate-btn').addEventListener('click', function () {
    // multiply two inputs
    // calculate the area 
    // w x l
    const area = multiplyInputs('parallelogram-first-input', 'parallelogram-second-input');

    // display area to area calculation card 
    // return if input is invalid
    if(isNaN(area)){
        return
    }
    serial += 1;
    displayArea(serial,'Parallelogram',area);
});

// for Rhombus 
document.getElementById('rhombus-calculate-btn').addEventListener('click', function () {
    // multiply two inputs
    // calculate the area 
    // w x l
    const area = multiplyInputs('rhombus-first-input', 'rhombus-second-input');

    // display area to area calculation card 
    // return if input is invalid
    if(isNaN(area)){
        return
    }
    serial += 1;
    displayArea(serial,'Rhombus',area);
});