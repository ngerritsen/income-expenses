export function objectToArray (obj) {
  return Object.keys(obj).map(key => obj[key])
}
