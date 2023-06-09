function fizzBuzz(start, end) {
  // Insert code here;
  let sizeArr = end - start + 1;
  let count = 0;
  let newArr = new Array(sizeArr);

  for (let i = start; i <= end; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      newArr[count] = "FizzBuzz";
    } else if (i % 3 == 0) {
      newArr[count] = "Fizz";
    } else if (i % 5 == 0) {
      newArr[count] = "Buzz";
    } else {
      // if not a multiple of 3 or 5, the value is printed out
      newArr[count] = i;
    }
    count++;
  }
  return newArr;
}

// Do not edit this line;
module.exports = fizzBuzz;
