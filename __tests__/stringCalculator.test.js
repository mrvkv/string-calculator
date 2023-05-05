const stringCalculator = require("../stringCalculator");

it("should return zero for an empty string", () => {
    expect(stringCalculator("")).toEqual(0);
});

it("should return the sum equal to the number in case of string contains a single number", () => {
    expect(stringCalculator("1")).toEqual(1);
});

it("should return sum for the numbers seperated with comma", () => {
    expect(stringCalculator("1,2,3")).toEqual(6);
});

it("should handle comma and newline both in number string", () => {
    expect(stringCalculator("1\n2,3")).toEqual(6);
    expect(stringCalculator("1,2\n3")).toEqual(6);
    expect(stringCalculator("1,2\n3\n4")).toEqual(10);
});

it("should throw error in case number string contains comma and newline without any number in between", () => {
    expect(() => stringCalculator("1,\n")).toThrow("input is incorrect");
});

it("should handle the change delimeter characters and perform the operation", () => {
    expect(stringCalculator("//;\n1;2;3")).toEqual(6);
    expect(stringCalculator("//%\n1%2%3%4")).toEqual(10);
});

it("should throw error in case string contains delimeter and newline without any number in between", () => {
    expect(() => stringCalculator("//;\n;1;2")).toThrow("input is incorrect");
    expect(() => stringCalculator("//;\n;;2")).toThrow("input is incorrect");
});

it("should throw error for negative numbers in string", () => {
    expect(() => stringCalculator("-1")).toThrow("negatives not allowed: -1");
    expect(() => stringCalculator("-1,-2")).toThrow("negatives not allowed: -1,-2");
    expect(() => stringCalculator("1\n2,-3")).toThrow("negatives not allowed: -3");
    expect(() => stringCalculator("//;\n1;2;-3")).toThrow("negatives not allowed: -3");
});