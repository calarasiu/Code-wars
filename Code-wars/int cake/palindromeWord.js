// we just keep track of the 1 string - the middle one - if the character is already in the oddChar set - we remove it as only the middle char can appear just once 
// we finally check if we added just one character in the set
// O(n) time complexity as we are making one iteration through the string
// O(1) - space complexity 

function hasPalindromePermutation(theString) {
  const unpairedCharacters = new Set();

  for (let char of theString) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }
  return unpairedCharacters.size <= 1;
}