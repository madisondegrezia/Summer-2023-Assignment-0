class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    let middle = Math.floor(nums.length / 2);
    let newArray = nums.slice(0);
    if (newArray[middle] == target) {
      return true;
    }
    if (newArray[middle] < target) {
      return this.binarySearch(
        newArray.splice(middle, newArray.length - 1),
        target
      );
    }
    if (newArray[middle] > target) {
      return this.binarySearch(newArray.splice(0, middle), target);
    } else {
      return false;
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
