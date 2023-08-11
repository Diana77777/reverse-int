module.exports = function reverse (n) { 
    let reversedNumber = '';
    const numberString = Math.abs(n).toString();

    for (let i = numberString.length - 1; i >= 0; i--) {
      reversedNumber += numberString.charAt(i);
    }

    return Number(reversedNumber);

}
