// Given an array arr, find element pairs whose sum equal the 
// second argument arg and return the sum of their indices.

// You may use multiple pairs that have the same numeric elements
// but different indices. Each pair should use the lowest possible 
// available indices. Once an element has been used it cannot be reused 
// to pair with another element. For instance, pairwise([1, 1, 2], 3) 
// creates a pair [2, 1] using the 1 at index 0 rather than 
// the 1 at index 1, because 0+2 < 1+2.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. 
// The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write 
// out the array with their indices and values.


function pairwise(arr, arg) {
  // 1. for each element of the array, try to loop over the rest of array
  // and find pairs that equal to arg
  // 2. put paired element indices in a separate array - if the next 
  // elements have these indices, we'll ignore them in step 1
  const pairsArray = []
  arr.map((curr, ind) => {
    if(pairsArray.indexOf(ind) !== -1) return
    const validArray = arr.map((e, index) => {
      const currValue = [e, index, true]
      if(pairsArray.indexOf(index) !== -1 || index === ind){
        currValue[2] = false
      }
      return currValue
    })
    for(let potentialPair of validArray){
      if(potentialPair[2] && curr + potentialPair[0] === arg){
        pairsArray.push(ind)
        pairsArray.push(potentialPair[1])
        return
      }
    }
  })
  return pairsArray.reduce((prev, curr) => prev + curr, 0);
}

pairwise([1, 1, 1], 2)
// console.log(pairwise([1,4,2,3,0,5], 7));