function merge(arr1, arr2){
  const newArr = []
  // we have two arrays - left and right
  // we know that they are sorted
  // we take a look at the elements on the left
  // if element on the right is bigger then this one,
  // no point in continuing, put this one in the return array,
  // move to next element in the left array
  // if the element on the right is smaller, put it in the 
  // return array and look at the next element in the right array
  let pushed = 0
  for(let i = 0; i < arr1.length; i++){
    for(let j = pushed; j < arr2.length; j++){
      if(arr1[i] > arr2[j]){
        newArr.push(arr2[j])
        pushed = j + 1
      }
    }
    // no matter how many elements from the right array were pushed
    // this element is less than the next one in the left array
    // so we have to push it as well
    newArr.push(arr1[i])
  }
  // all the remaining right array elements need to be pushed as well
  for(let i = pushed; i < arr2.length; i++) newArr.push(arr2[i])
  return newArr
}

function mergeSort(arr) {
  if(arr.length <= 1) return arr
  let half = Math.floor(arr.length/2)
  const arr1 = mergeSort(arr.slice(0, half))
  const arr2 = mergeSort(arr.slice(half))
  return merge(arr1, arr2);
  // Only change code above this line
}

console.log(mergeSort([3, 4, 1, 5, 3, 4, 10, 100, 25]))