function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    // increments count value if it is type boolean or string
    if (typeof arr[i] == "boolean" || typeof arr[i] == "string") {
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
