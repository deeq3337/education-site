const students = [
    {
        name: "Ali ahmed",
        id: "2023001",
        password: "password123",
        department: "Computer Science",
        creditHours: 15,
        courses: [
            { code: "ANAT111", name: "Human Anatomy", year: "YEAR I", semester: "1", academicYear: "2009", credit: 3, grade: "A", gradePoint: 12 },
            { code: "PHYSI111", name: "Human Physiology", year: "YEAR I", semester: "1", academicYear: "2009", credit: 3, grade: "A", gradePoint: 12 },
            // Add more courses as needed
        ],
        paymentOutstanding: "$500"
    },
    // Add more student objects
];

document.getElementById("loginButton").addEventListener("click", function() {
    const name = document.getElementById("studentName").value;
    const password = document.getElementById("studentPassword").value;

    const student = students.find(s => s.name === name && s.password === password);

    if (student) {
        displayStudentInfo(student);
        document.getElementById("studentInfo").style.display = "block";
    } else {
        alert("Invalid credentials.");
    }
});

function displayStudentInfo(student) {
    const tableBody = document.getElementById("studentTableBody");
    tableBody.innerHTML = ""; // Clear previous data

    student.courses.forEach(course => {
        const row = document.createElement("tr");

        const codeCell = document.createElement("td");
        codeCell.textContent = course.code;
        row.appendChild(codeCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = course.name;
        row.appendChild(nameCell);

        const yearCell = document.createElement("td");
        yearCell.textContent = course.year;
        row.appendChild(yearCell);

        const semesterCell = document.createElement("td");
        semesterCell.textContent = course.semester;
        row.appendChild(semesterCell);

        const academicYearCell = document.createElement("td");
        academicYearCell.textContent = course.academicYear;
        row.appendChild(academicYearCell);

        const creditCell = document.createElement("td");
        creditCell.textContent = course.credit;
        row.appendChild(creditCell);

        const gradeCell = document.createElement("td");
        gradeCell.textContent = course.grade;
        row.appendChild(gradeCell);

        const gradePointCell = document.createElement("td");
        gradePointCell.textContent = course.gradePoint;
        row.appendChild(gradePointCell);

        tableBody.appendChild(row);
    });
}