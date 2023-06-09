function frequencyCounter(word) {
  // Insert code here;
  let freq = {};
  for (let i = 0; i < word.length; i++) {
    let letter = word.charAt(i);
    if (freq[letter]) {
      freq[letter]++;
    } else {
      freq[letter] = 1;
    }
  }
  return freq;
}

// Do not edit this line;
module.exports = frequencyCounter;
