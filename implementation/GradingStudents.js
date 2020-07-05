let grades = [73,67,38,33];


const gradingStudents = (grades) => grades.map(grade => (Math.ceil(grade/5)*5 - grade >= 3 || grade <38) ? grade : Math.ceil(grade/5)*5);



console.log(gradingStudents(grades));