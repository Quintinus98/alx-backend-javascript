export default function cleanSet(set, startString) {
  let res = '';
  if (!startString) return res;
  set.forEach((val) => {
    if (val.startsWith(startString)) {
      res += `${val.substring(startString.length)}-`;
    }
  });
  res = res.slice(0, -1);
  return res;
}
