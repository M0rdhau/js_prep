const ones = [
  "I", "X", "C", "M"
]
const fives = [
"V", "L", "D"
]

function convertToRoman(num) {
const numerals = num.toString()
.split("")
.map(e => parseInt(e))
.reduce((prev, curr) => 
  [curr].concat(prev), [])
.reduce((prev, curr, ind) => {
  let numeral = ""
  switch(curr){
    case 0:
      break;
    case 1:
    case 2:
    case 3:
      for(let i = 0;
      i<curr; i++, numeral+=ones[ind]);
      break;
    case 4:
      numeral += ones[ind] + fives[ind];
      break;
    case 5:
      numeral = fives[ind];
      break;
    case 6:
    case 7:
    case 8:
      numeral = fives[ind];
      for(let i = 0;
      i<curr-5; i++, numeral+=ones[ind]);
      break;
    case 9:
      numeral = ones[ind] + ones[ind+1]
  }
  return numeral + prev
}, "")
console.log(num)
console.log(numerals)
return numerals;
}


convertToRoman(36);
