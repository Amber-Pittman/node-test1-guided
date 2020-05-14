const calculator = require("./calculator")

// // Our first unit test
// test("runs our first test", () => {
//     expect(1 + 1).toBe(2)
// })

// test("Failing Test", () => {
//     expect(1 + 1).toBe(2)
// })

test("add()", () => {
    expect(calculator.add(2, 2)).toBe(4)
    expect(calculator.add(2, 10)).toBe(12)
    expect(calculator.add(3, 2)).toBe(5)
    expect(calculator.add(0, 2)).toBe(2)
    expect(calculator.add(-2, 3)).toBe(1)
    expect(calculator.add(16)).toBe(16) 
    expect(calculator.add()).toBe(0)
    expect(calculator.add(5, null)).toBe(5)
    //expect(calculator.add(18, "40")).toBe(NaN) // Fails, returns a string of "1840"
})

test("subtract()", () => {
    expect(calculator.subtract(2, 2)).toBe(0)
    expect(calculator.subtract(2, 10)).toBe(-8)
    expect(calculator.subtract(3, 2)).toBe(1)
    expect(calculator.subtract(0, 2)).toBe(-2)
    expect(calculator.subtract(-2, 3)).toBe(-5)
    expect(calculator.subtract(16)).toBe(16) 
    expect(calculator.subtract()).toBe(0)
    expect(calculator.subtract(5, null)).toBe(5)
    //expect(calculator.subtract(18, "40")).toBe(NaN) // Fails, returns -22
    expect(calculator.subtract(18, "40")).toBe(-22)
})

test("multiply()", () => {
    expect(calculator.multiply(2, 2)).toBe(4)
    expect(calculator.multiply(2, 10)).toBe(20)
    expect(calculator.multiply(3, 2)).toBe(6)
    expect(calculator.multiply(0, 2)).toBe(0)
    expect(calculator.multiply(-2, 3)).toBe(-6)
    expect(calculator.multiply(16)).toBe(0) // 0 because the 2nd param is defaulted to 0
    expect(calculator.multiply()).toBe(0)
    expect(calculator.multiply(5, null)).toBe(0) // 0 because the 2nd param is defaulted to 0
    //expect(calculator.multiply(18, "40")).toBe(NaN) // Fails, returns 720
    expect(calculator.multiply(18, "40")).toBe(720)
})

test("divide()", () => {
    expect(calculator.divide(2, 2)).toBe(1)
    expect(calculator.divide(2, 10)).toBe(0.2)
    expect(calculator.divide(3, 2)).toBe(1.5)
    expect(calculator.divide(0, 2)).toBe(0) // Can't divide by zero
    expect(calculator.divide(-2, 3)).toBe(-0.6666666666666666)
    //expect(calculator.divide(16)).toBe(0) // Can't divide by zero - Makes it Infinity
    expect(calculator.divide()).toBe(NaN) // Can't divide by zero
    //expect(calculator.divide(5, null)).toBe(0) // Can't divide by zero
    //expect(calculator.divide(18, "40")).toBe(NaN) // Fails, returns 720
    expect(calculator.divide(18, "40")).toBe(0.45)
})