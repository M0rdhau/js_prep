function telephoneCheck(str) {
  const check = 
  /^(1 |1)?([0-9]{3}|\([0-9]{3}\))[-| ]?[0-9]{3}[-| ]?[0-9]{4}$/
  console.log(str)
  console.log(check.test(str))
  return check.test(str);
}

telephoneCheck("1 (555)555-5555")
telephoneCheck("(6054756961)")
telephoneCheck("55555555")
telephoneCheck("555-555-5555");