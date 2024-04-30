export default function getListStudentIds(objArr) {
  if (!Array.isArray(objArr)) {
    return [];
  }
  const ids = objArr.map((val) => (val.id));
  return ids;
}
