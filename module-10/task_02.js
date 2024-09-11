// Example 1:
// Input: nums = [3,4,5,1,2]
// Output: 1

// Example 2:
// Input: nums = [4,5,6,7,0,1,2]
// Output: 0

// Example 3:
// Input: nums = [11,13,15,17]
// Output: 11

function search_minimum(arr) {
  let low = 0,
    high = arr.length - 1;

  return search_min_recur(arr, low, high);
}

function search_min_recur(arr, low, high) {
  if (low === high) return arr[low];

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] > arr[high]) {
    return search_min_recur(arr, mid + 1, high);
  } else {
    return search_min_recur(arr, low, mid);
  }
}

let nums = [3, 4, 5, 1, 2];
let result = search_minimum(nums);
console.log(result);
console.assert(result === 1);

nums = [4, 5, 6, 7, 0, 1, 2];
result = search_minimum(nums);
console.log(result);
console.assert(result === 0);

nums = [11, 13, 15, 17];
result = search_minimum(nums);
console.log(result);
console.assert(result === 11);
