// // My first thought was a for loop
// // While a for loop gets the job done, there are better ways to do this
// function add() {
//     let i;
//     let defaultValue = 0

//     for (i=0; i < arguments.length; i++) {
//         defaultValue += arguments[i]
//     }

//     return defaultValue
// }
function add(...values) {
    return values.reduce((a, b) => a + b, 0)
}

function subtract(a = 0, b = 0) {
	return a - b
}

// function subtract(...values) {
//     return values.reduce((a, b) => a - b, 0)
// }

function multiply(a = 0, b = 0) {
	return a * b
}
// function multiply(...values) {
//     return values.reduce((a, b) => a * b, 0)
// }


function divide(a = 1, b = 1) {
	// Typescript is useful for these exact situations, without
	// having to constantly check the data types
	if (typeof a !== "number" || typeof b !== "number") {
		throw new TypeError("Expected a number, got something else")
	}

	if (b === 0) {
		throw new Error("Cannot divide by zero")
	}
	
	return a / b
}

// function divide(a = 1, b = 1) {
//     if (typeof a !== "number" || typeof b !== "number") {
// 	 throw new TypeError("Expected a number, got something else")
// 	}
    
//     if (b === 0) {
//         throw new Error("Cannot divide by zero.")
//     }
//     return a / b
// }

module.exports = {
    add,
    subtract,
    multiply,
    divide,
}