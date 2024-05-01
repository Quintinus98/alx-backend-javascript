export default function hasValuesFromArray(set, arr) {
  const newSet = new Set(arr);
  return newSet.isSubsetOf(set);
}
