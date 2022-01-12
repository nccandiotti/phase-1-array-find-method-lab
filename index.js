// code your solution here
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
]
// function superBowlWin(records) {
//   const firstWin = records.find((result) => result === "W")
//   return firstWin
// }
// superBowlWin(record)

// const superbowlWin = (record) => {
//   const result = record.find((record) => record.result === "W")
//   return result ? result.year : undefined
// }
function superbowlWin(recordsArray) {
  let winRecord = recordsArray.find((rec) => rec.result === "W")
  if (winRecord) {
    return winRecord.year
  }
}
