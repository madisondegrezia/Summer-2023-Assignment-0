function countOfAllBooleans(arr) {
  // Insert code here;
  // initializes count variable
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    // checks if the variable type is boolean
    if (typeof arr[i] == "boolean") {
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
