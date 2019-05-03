const add = function(input) {
  let sum = 0;

  let delimiter = input.substring(2, input.indexOf("\n"));

  input = input.substring(input.indexOf("\n") + 1);
  input = input.split(delimiter);

  if (input.length === 0) {
    return 0;
  }

  for (let i = 0; i < input.length; i++) {
    const num = parseInt(input[i]);
    if (num < 0) {
      throw new Error("Negatives not allowed " + num);
    }
    if (num && num <= 1000) {
      sum += parseInt(input[i]);
    }
  }

  return sum;
};

module.exports = add;
