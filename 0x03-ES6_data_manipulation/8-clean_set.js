export default function cleanSet(set, startString) {
  if (!startString) return '';

  const cleanedSet = [...set].map(
    (val) => (val.startsWith(startString)
      ? val.substring(startString.length)
      : undefined),
  ).filter((val) => val !== undefined);

  return cleanedSet.join('-');
}
