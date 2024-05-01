interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'David',
    lastName: 'Obodo',
    age: 40,
    location: 'Lagos',
}

const student2: Student = {
    firstName: 'Rachael',
    lastName: 'Hassan',
    age: 27,
    location: 'Lagos'
}

const studentsList: Student[] = [student1, student2]

const renderTable = (): void => {
    const table = document.querySelector('body');
    const tableData = studentsList.map((row) => (
        `<tr>
            <td>${row.firstName}</td>
            <td>${row.location}</td>
        </tr>`
    )).join('')
    table.innerHTML = tableData;
}