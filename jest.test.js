const src = require('./jest');

test("capitalizes first character in 'foobar'", () => {
    expect(src.capitalize('foobar')).toBe('Foobar');
});

test("reverses string 'fuk' to 'kuf'", () => {
    expect(src.reverseString('luk')).toBe('kul');
});

test("adds 5 and 6 successfully", () => {
    expect(src.calculator.add(5, 6)).toBe(11);
});

test("subtracts 67 from 4 successfully", () => {
    expect(src.calculator.subtract(67, 4)).toBe(63);
});

test("multiplies 78 and 2 successfully", () => {
    expect(src.calculator.multiply(78, 2)).toBe(156);
});

test("divides 69 by 3 successfully", () => {
    expect(src.calculator.divide(69, 3)).toBe(23);
});

test("successfully encrypts string 'nugget' with a shift factor of 8", () => {
    expect(src.caesarCipher('nugget', 8)).toBe('vcoomb');
});

test("successfully encrypts upper case string 'NUGGET' with a shift factor of 8", () => {
    expect(src.caesarCipher('NUGGET', 8)).toBe('VCOOMB');
});

test("successfully encrypts hybrid case string 'NugGeTs are Great!' with a shift factor of 22", () => {
    expect(src.caesarCipher('NugGeTs are Great!', 22)).toBe('JqcCaPo wna Cnawp!');
});

test("successfully analyzes array [7, 8, 2, 6, 3] and provides correct data object", () => {
    expect(src.analyzeArray([7, 8, 2, 6, 3])).toStrictEqual({
        average: 5.2,
        min: 2,
        max: 8,
        length: 5
    });
});



