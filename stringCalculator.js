/**
 * 
 * @param {string} numberString
 */

module.exports = (numberString = "") => {
    let sum = 0;
    if(numberString !== "") {
        const numbers = numberString.split(",");
        sum = numbers.map(number => +number).reduce((accumulator, currentValue) => accumulator + currentValue, sum);
    }

    return sum;
}