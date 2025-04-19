export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, elem] of array.entries()) {
    // eslint-disable-next-line no-param-reassign
    array[idx] = appendString + elem;
  }
  return array;
}
