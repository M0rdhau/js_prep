// Here we will implement selection sort. Selection sort works by selecting the minimum value
// in a list and swapping it with the first value in the list.
// It then starts at the second position, selects the smallest value
// in the remaining list, and swaps it with the second element.
// It continues iterating through the list and swapping elements
// until it reaches the end of the list. Now the list is sorted.
// Selection sort has quadratic time complexity in all cases.
const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function selectionSort(array) {
  for(let i = 0; i < array.length; i++){
    // start with the current element and try 
    // to find the smallest element in the current subarray
    let temp = i
    for(let j = i+1; j < array.length; j++){
      // here we determine if it's smaller than the current smallest elem
      if(array[temp] > array[j]) temp = j
    }
    // put it at the start of current sub-array
    // next sub-array will contain elements larger than this one
    swap(array, i, temp)
  }
  return array;
}

console.log(selectionSort([3, 4, 1, 5,]))
console.log(selectionSort([3, 4, 1, 5, 20, 100, 10, -1]))
console.log(selectionSort([3, 4, 1, 5, 3, 4, 10, 100, 25]))