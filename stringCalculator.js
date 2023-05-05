/**
 * 
 * @param {string} numberString
 */

module.exports = (numberString = "") => {
    let sum = 0;
    let delimeter = ",";
    if(numberString !== "") {
        const changeDelimeter = new RegExp("^\/\/").test(numberString);
        if(changeDelimeter) {
            delimeter = numberString[2];
            numberString = numberString.slice(4);
        }

        const numbers = numberString.split(new RegExp(`[${delimeter}\n]`, "g"));
        if(numbers.includes(undefined) || numbers.includes("")) {
            throw new Error("input is incorrect");
        }

        sum = numbers.map(number => +number).reduce((accumulator, currentValue) => accumulator + currentValue, sum);
    }

    return sum;
}