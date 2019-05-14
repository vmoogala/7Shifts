const add = function(input) {
  let sum = 0;
  let numbersArr = [];

  if (input.length === 0) {
    return 0;
  }

  // Finding the delimiter part
  let delimiter = input.substring(2, input.indexOf("\n"));

  // Seperating the input text from delimiter
  input = input.substring(input.indexOf("\n") + 1);

  if (delimiter.split(",").length === 1) {
    // When there is only one delimiter
    numbersArr = input.split(delimiter);
  } else {
    // More than one delimiters
    const delimitersArray = delimiter.split(",");

    // Replacing all delimiters in input with a special character. ',' for now
    // We use it later to separate delimiters and the text
    delimitersArray.forEach(delim => {
      input = input.replace(delim, ",");
    });

    numbersArr = input.split(",");
  }

  // Here input is an array of text seperated from delimiters
  numbersArr.forEach(d => {
    const num = parseInt(d);

    if (num < 0) {
      throw new Error("Negatives not allowed " + num);
    }

    // Checking whether num is not 'NaN'
    if (num && num <= 1000) {
      sum += num;
    }
  });

  return sum;
};

module.exports = add;