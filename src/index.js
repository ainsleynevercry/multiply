module.exports = function multiply(first, second) {
  let total = (BigInt(first) * BigInt(second)).toString();
  return total;
}
