var strStr = function (haystack, needle) {
  let needleLength = needle.length;
  let haystackLength = haystack.length;

  if (needleLength === 0) return 0;
  if (haystackLength < needleLength) return -1;

  let needleHash = hash(needle, needleLength);
  let heyHash = hash(haystack.substr(0, needleLength), needleLength);

  if (heyHash === needleHash && stringMatch(haystack, needle, 0)) return 0;

  for (let i = 1; i <= haystackLength - needleLength; i++) {
    heyHash = rollingHash(
      heyHash,
      haystack[i - 1],
      haystack[i + needleLength - 1],
      needleLength
    );

    if (heyHash === needleHash && stringMatch(haystack, needle, i)) return i;
  }

  return -1;
};

var hash = function (str, l) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h += (str.charCodeAt(i) * 10) ^ (l - 1);
  }

  return h;
};

var rollingHash = function (existingHash, oldChar, newChar, l) {
  return existingHash - hash(oldChar, l) + hash(newChar, l);
};

var stringMatch = function (haystack, needle, start) {
  for (let i = 0; i < needle.length; i++) {
    if (haystack[start + i] !== needle[i]) return false;
  }

  return true;
};

let result = strStr("osadbutsad", "sad");
console.log(result);

result = strStr("sadbutsad", "sad");
console.log(result); 

result = strStr("leedcode", "ode");
console.log(result); 

result = strStr("hello", "ll");
console.log(result); 


// Time complexity: O(NxM)
// inside the for-loop we're matching string which is another for-loop.

//Space Complexity: O(1)
// Usage of space is not related to the input. so it's constant.
