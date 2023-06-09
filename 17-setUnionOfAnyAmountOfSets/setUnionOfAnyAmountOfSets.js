function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let finalSet = new Set();
  for (let i = 0; i < args.length; i++) {
    for (const num of args[i]) {
      // adds the element to the new set
      finalSet.add(num);
    }
  }
  return finalSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
