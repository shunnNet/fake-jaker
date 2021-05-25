function toNumber(value) {
  return value && !Array.isArray(value) ? Number(value) : NaN
}
function pollNum(num, max) {
  let result = (num + 1) % max
  return result === 0 ? max : result
}
function inRange(num, min, max) {
  return num <= min ? min : num >= max ? max : num
}

function sleep(milesecond) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, milesecond)
  })
}

module.exports = {
  toNumber,
  sleep,
  inRange
}
