function isPalindrome(word) {
  // Insert code here;
  const wordLength = word.length;
  for (let i = 0; i < wordLength / 2; i++) {
    if (word[i] != word[wordLength - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;
