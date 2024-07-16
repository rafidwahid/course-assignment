var recur_multiply = function (a, b) {
  if (b <= 0) return 0;

  b--;

  return a + recur_multiply(a, b);
};

var result = recur_multiply(4, 5);
console.log(result);

result = recur_multiply(3, 3);
console.log(result);

result = recur_multiply(0, 2);
console.log(result);

result = recur_multiply(2, 0);
console.log(result);

//Time Complexity: O(b) // here second argument
//Space Complexity: O(b)
