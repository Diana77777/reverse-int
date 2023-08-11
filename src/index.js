module.exports = function reverse (n) {
  let reverseNumber = String(Math.abs(n));
  let resultNumber = reverseNumber.split('').reverse().join(''); 
  return resultNumber;
}
