var isPalindrom = function (s) {
  if (s.length <= 1) return true;
  if (s[0] !== s[s.length - 1]) return false;

  let trimmed = s.substring(1, s.length - 1);

  return isPalindrom(trimmed);
};

var result = isPalindrom("madam");
console.log(result);


//Time Complexity: O(N) // N = length of string
//Space Complexity: O(N)
