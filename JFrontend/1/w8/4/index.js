function isPalindrome(string) {
  const revers = string.split("").reverse().join("");
  return revers === string;
}

isPalindrome("racecar"); // true
isPalindrome("programmer"); // false
