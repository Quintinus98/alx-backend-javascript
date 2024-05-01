export default function updateStudentGradeByCity(objArr, city, newGrades) {
  const newObjArr = objArr.filter((value) => value.location === city).map((value) => {
    const studentGrade = newGrades.find((grade) => grade.studentId === value.id);
    const grade = studentGrade ? studentGrade.grade : 'N/A';
    return { ...value, grade };
  });
  return newObjArr;
}
