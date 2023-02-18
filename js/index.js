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

// for pentagon 
document.getElementById('pentagon-calculate-btn').addEventListener('click', function () {
    // multiply two inputs
    // p x b
    const inputMultiply = multiplyInputs('pentagon-first-input', 'pentagon-second-input');

    // calculate the area 
    // area = 0.5 x p x b
    const area = 0.5 * inputMultiply;

    // display area to area calculation card 
    // return if input is invalid
    if(isNaN(area)){
        return
    }
    serial += 1;
    displayArea(serial,'Pentagon',area);
});

// for Ellipse 
document.getElementById('ellipse-calculate-btn').addEventListener('click', function () {
    // multiply two inputs
    // a x b
    const inputMultiply = multiplyInputs('ellipse-first-input', 'ellipse-second-input');

    // calculate the area 
    // area = π x a x b
    const area = 3.1416 * inputMultiply;

    // display area to area calculation card 
    // return if input is invalid
    if(isNaN(area)){
        return
    }
    serial += 1;
    displayArea(serial,'Ellipse',area);
});