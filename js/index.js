let serial=0; // to get serial number for area calculation element 

// for triangle 
document.getElementById('triangle-calculate-btn').addEventListener('click', function () {
    // multiply two inputs
    // b x h
    const inputMultiply = multiplyInputs('triangle-first-input', 'triangle-second-input');

    // calculate the area 
    // area = 0.5 x b x h
    const areaRaw = 0.5 * inputMultiply;
    // fix output to two decimal number
    const area = areaRaw.toFixed(2);
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
    const areaRaw = multiplyInputs('rectangle-first-input', 'rectangle-second-input');
    // fix output to two decimal number
    const area = areaRaw.toFixed(2);
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
    const areaRaw = multiplyInputs('parallelogram-first-input', 'parallelogram-second-input');
    // fix output to two decimal number
    const area = areaRaw.toFixed(2);
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
    const inputMultiply = multiplyInputs('rhombus-first-input', 'rhombus-second-input');
    // calculate the area 
    // w x l
    const areaRaw =  0.5 * inputMultiply;
    // fix output to two decimal number
    const area = areaRaw.toFixed(2);
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
    const areaRaw = 0.5 * inputMultiply;
    // fix output to two decimal number
    const area = areaRaw.toFixed(2);
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
    const areaRaw = 3.1416 * inputMultiply;
    // fix output to two decimal number
    const area = areaRaw.toFixed(2);

    // display area to area calculation card 
    // return if input is invalid
    if(isNaN(area)){
        return
    }
    serial += 1;
    displayArea(serial,'Ellipse',area);
});

// blog button click handler
document.getElementById('blog-btn').addEventListener('click',function () {
    window.location.href = '../blog.html'
})

//on mouse enter each card get a random color
const cards = document.getElementsByClassName('geometry-card');
for (const card of cards) {
    card.addEventListener('mouseenter',function (event) {
        event.target.style.backgroundColor = randomColor();
    })
}