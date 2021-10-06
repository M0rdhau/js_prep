// Compare and update the inventory stored in a 2D array against
// a second 2D array of a fresh delivery. Update the current existing 
// inventory item quantities (in arr1). 
// If an item cannot be found, add the new item and quantity into the inventory array.
// The returned inventory array should be in alphabetical order by item.
const indexOfString = (arr, str) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] === str) return i;
  }
  return -1;
};

function updateInventory(arr1, arr2) {
  // test each element of arr2 - if arr1 has an analogous
  // element, add to it. otherwise add this element to arr1
  // and then sort the resulting array
  arr2.map((e) => {
    const arr1Elem = arr1.filter((each) => each[1] === e[1]).flat();
    if (arr1Elem.length > 0) {
      const newElem = [arr1Elem[0] + e[0], arr1Elem[1]];
      console.log(newElem);
      arr1[indexOfString(arr1, arr1Elem[1])] = newElem;
    } else {
      arr1.push(e);
    }
  });
  const ret = arr1.sort((a, b) => a[1] > b[1]);
  console.log(ret);
  return ret;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

updateInventory(curInv, newInv);
