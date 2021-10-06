function checkCashRegister(price, cash, cid) {
  let currencies = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }
  let change = cash - price;
  let total = cid.reduce((prev, curr) => prev + curr[1], 0)
  if(Math.abs(total - change) < Number.EPSILON ){
    return {
      status: "CLOSED",
      change: cid
    }
  }
  let ret = cid.sort((curr, prev) => 
    currencies[curr[0]] < currencies[prev[0]])
    .reduce((prev, curr) => {
    if(change < currencies[curr[0]]){
      return prev
    }
    if(change == 0) {
      return prev
    }
    const drawer = [curr[0], 0]
    while(
      change - currencies[curr[0]] > (-1)*currencies["PENNY"] && curr[1] > 0){
      drawer[1] += currencies[curr[0]];
      change -= currencies[curr[0]];
      curr[1] -= currencies[curr[0]];
    }
    console.log(drawer)
    return drawer[1] <= 0 ? prev
      : prev.concat([drawer]);
  }, [])
  ret = ret.sort((a, b) => a[1] < b[1])
  if(change > 0) return {status: "INSUFFICIENT_FUNDS", change: []}
  return { status: "OPEN", change: ret };
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

