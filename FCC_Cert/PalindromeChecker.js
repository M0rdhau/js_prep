function palindrome(str) {
  const newStr = str.toLowerCase()
    .split("")
    .filter(e => /[a-z0-9]/.test(e))
  const strlen = newStr.length;
  for(let i = 0; i< strlen; i++){
    if(strlen % 2 === 1 &&
      i === Math.floor(strlen / 2)){
      continue;
    }
    if(newStr[i] !== newStr[strlen - i - 1])
      return false;
  }
  return true;
}



console.log(palindrome("eye"));