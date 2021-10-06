function rot13(str) {
  const newStr = str
  .split("")
  .map(e => {
    if(!/[A-Z]/.test(e))
      return e
    return String.fromCharCode(
      ((e.charCodeAt(0) - 65) + 13)%26 + 65
    )
  })
  .join("")
  return newStr;
}

rot13("SERR PBQR PNZC");