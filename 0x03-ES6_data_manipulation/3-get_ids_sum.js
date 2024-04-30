export default function getStudentIdsSum(objArr) {
  return objArr.reduce((acc, cur) => acc + cur.id, 0);
}
