function quickSort(array) {
  // if the array is empty or with one elem, return
  if(array.length <= 1) return array
  // select the pivot
  let pivot = array[0]
  // divide arrays
  const arr1 = quickSort(array.filter(e => e > pivot))
  const arr2 = quickSort(array.filter(e => e < pivot))
  // if multiple element have pivot values, put them in 
  // a separate array
  const arr3 = array.filter(e => e===pivot)
  // join arrays and return them
  return [...arr2, ...arr3, ...arr1];
}

console.log(quickSort([3, 4, 1, 5,]))
console.log(quickSort([3, 4, 1, 5, 20, 100, 10, -1]))
console.log(quickSort([3, 4, 1, 5, 3, 4, 10, 100, 25]))
console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))