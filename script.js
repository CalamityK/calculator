function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    return a / b;
};

function operate (operator, a, b) {
    let value = 0;
    switch (operator) {
        case "add":
            value = add(a, b);
            break;
        case "subtract":
            value = subtract(a, b);
            break;
        case "multiply":
            value = multiply(a, b);
            break;
        case "divide":
            value = divide(a, b);
            break;
    };
    return value;
}