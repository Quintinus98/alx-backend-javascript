export default function getStudentsByLocation(objArr, city) {
  if (!Array.isArray(objArr) && typeof city !== 'string') {
    return [];
  }
  const filteredObjArr = objArr.filter((value) => (value.location === city));
  return filteredObjArr;
}
