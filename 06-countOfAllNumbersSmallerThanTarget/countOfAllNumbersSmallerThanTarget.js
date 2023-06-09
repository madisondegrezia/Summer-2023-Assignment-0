function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      // increments count value if it is less than the target
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
