class MySolution {
  countDownSum(num) {
    // Insert code here;

    // base case to end the recursion
    if (num <= 1) {
      return num;
    } else {
      return num + this.countDownSum(num - 1);
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
