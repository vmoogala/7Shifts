const add = function(input) {
  let sum = 0;

  if (input.length === 0) {
    return 0;
  }

  // Finding the delimiter part
  let delimiter = input.substring(2, input.indexOf("\n"));

  // Seperating the input text from delimiter
  input = input.substring(input.indexOf("\n") + 1);

  if (delimiter.split(",").length === 1) {
    // When there is only one delimiter
    input = input.split(delimiter);
  } else {
    // More than one delimiters
    delimiter = delimiter.split(",");

    // Replacing all delimiters in input with a special character. ',' for now
    // We use it later to seperate delimiters and the text
    for (let i = 0; i < delimiter.length; i++) {
      input = input.replace(delimiter[i], ",");
    }

    input = input.split(",");
  }

  // Here input is an array of text seperated from delimiters
  for (let i = 0; i < input.length; i++) {
    const num = parseInt(input[i]);
    if (num < 0) {
      throw new Error("Negatives not allowed " + num);
    }

    // Checking whether num is not 'NaN'
    if (num && num <= 1000) {
      sum += num;
    }
  }

  return sum;
};

module.exports = add;
