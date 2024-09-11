function search(array, key) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (array[mid] == key) {
      return mid;
    } else if (array[mid] > key) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

let input = [-1, 0, 3, 5, 9, 12];
let target = 9;

let result = search(input, target);
console.log(result);
console.assert(search(input, target) == 4);

(input = [-1, 0, 3, 5, 9, 12]), (target = 2);
result = search(input, target);
console.log(result);
console.assert(search(input, target) == -1);
