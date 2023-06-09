function sumOfMinimumAndMaximum(nums) {
  // Insert code here;

  // initialized to the first element in the array
  let min = nums[0];
  // initialized to the first element in the array
  let max = nums[0];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i];
    }
    if (max < nums[i]) {
      max = nums[i];
    }
  }

  sum = min + max;
  return sum;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
