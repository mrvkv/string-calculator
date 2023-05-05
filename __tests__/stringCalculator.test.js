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