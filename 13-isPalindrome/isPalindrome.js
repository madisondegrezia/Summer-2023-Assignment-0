function isPalindrome(word) {
  // Insert code here;
  const wordLength = word.length;
  // traverses through the first half of the word
  for (let i = 0; i < wordLength / 2; i++) {
    if (word[i] != word[wordLength - 1 - i]) {
      // not a palindrome
      return false;
    }
  }
  // its a palindrome
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;
