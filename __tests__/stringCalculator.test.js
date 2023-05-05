const stringCalculator = require("../stringCalculator");

it("should return zero for an empty string", () => {
    expect(stringCalculator("")).toEqual(0);
});