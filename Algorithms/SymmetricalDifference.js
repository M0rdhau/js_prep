function sym(...args) {
  const retValue = args.reduce((prev, curr) => {
      prev = prev.filter((e, ind, arr) => 
        arr.indexOf(e, ind + 1) === -1)
      curr = curr.filter((e, ind, arr) => 
        arr.indexOf(e, ind + 1) === -1)
      return prev
      .filter(e => curr.indexOf(e) === -1)
      .concat(curr.filter(e => prev.indexOf(e) === -1))
  }, [])
  .sort((a, b) => a > b)
  console.log(retValue)
  return retValue;
}

sym([1, 2, 3], [5, 2, 1, 4]);