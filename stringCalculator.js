/**
 * 
 * @param {string} numberString
 */

module.exports = (numberString = "") => {
    let sum = 0;
    if(numberString !== "") {
        const numbers = numberString.split(new RegExp("[,\n]", "g"));
        if(numbers.includes(undefined) || numbers.includes("")) {
            throw new Error("input is incorrect");
        }

        sum = numbers.map(number => +number).reduce((accumulator, currentValue) => accumulator + currentValue, sum);
    }

    return sum;
}