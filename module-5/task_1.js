var strShuffle = function (str, arr) {
  var output = [];

  for (let i = 0; i < str.length; i++) {
    output[arr[i]] = str[i];
  }

  return output.join("");
};

console.log(strShuffle("mamacode", [4, 5, 6, 7, 0, 1, 2, 3]));
console.log(strShuffle("dosta", [4, 0, 1, 2, 3]));
console.log(strShuffle("abc", [2, 0, 1]));


//Time Complexity: O(N)
//Space Complexity: O(N)
