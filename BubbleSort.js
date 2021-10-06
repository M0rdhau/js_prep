// You know what bubble sort is...

const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function bubbleSort(array) {
  let sorted = false
  // loop over the array as many times as needed
  // while it is not sorted
  while(!sorted){
    // iterate over all the members and swap them if they
    // are not sorted (account for array bounds)
    let tempSorted = true
    for(let i = 0; i < array.length - 1; i++){
      if(array[i] > array[i+1]){
        swap(array, i, i+1)
        tempSorted = false
      }else if(tempSorted){
        tempSorted = true
      }
    }
    sorted = tempSorted
  }
  return array;
}
console.log(bubbleSort([3, 4, 1, 5,]))
console.log(bubbleSort([3, 4, 1, 5, 20, 100, 10, -1]))
console.log(bubbleSort([3, 4, 1, 5, 3, 4, 10, 100, 25]))