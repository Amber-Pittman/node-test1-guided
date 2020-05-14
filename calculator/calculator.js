function add(a = 0, b = 0) {
    return a + b
}

function subtract(a = 0, b = 0) {
    return a - b
}

function multiply(a = 0, b = 0) {
    return a * b
}

function divide(a = 1, b = 1) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.")
    }
    return a / b
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
}