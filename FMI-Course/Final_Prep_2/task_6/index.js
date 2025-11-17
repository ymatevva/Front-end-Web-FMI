
// ## Условие:
// Създайте функция `analyzeGrades(students)`, която анализира масив от данни за студенти и връща статистика за техните оценки.

// ### Входни данни:
// Масив от обекти със структура:
// ```javascript
// {
//     name: "string",
//     grade: number, // (от 2 до 6)
//     subject: "string",
//     hasPassed: boolean
// }
// ```

function analyzeGrades(students){
    
    let topStudent;
    let averageGrade = 0;
    let passingCount = 0;
    let subjectStats = {};
    let gradeRange = {};
    let min = Infinity;
    let max = -Infinity;
    

    for(let student of students) {

        let currGrade = Number(student.grade);

        averageGrade += currGrade;

        if(student.hasPassed) {
            passingCount++;
        }

        if (currGrade < min) {
            min = currGrade;
        }

        if(currGrade > max) {
            max = currGrade;
            topStudent = student;
        } 
        else if(currGrade == max) {
            topStudent = [topStudent];
            topStudent.push(student);
        }

        subjectStats[student.subject] =  (subjectStats[student.subject]  || 0 ) + 1;
    }

    topStudent = topStudent == null ? "unknown" : topStudent; 
    averageGrade =  students.length == 0 ? 0 : averageGrade / students.length;
    averageGrade = Number(averageGrade.toFixed(1));
    min = min == Infinity ? 0 : min;
    max = max == -Infinity ? 0 : max;

    return {
        topStudent,
        averageGrade,
        passingCount,
        subjectStats,
        gradeRange :{min: min, max: max}
    }
}

// ### Изходни данни:
// Функцията трябва да връща обект със следните property-та:

// - `topStudent` — обектът на студента с най-висока оценка. Ако има няколко с еднаква най-висока оценка, връща масив с тези обекти. Ако масивът е празен, връща "unknown".
// - `averageGrade` — средната оценка на всички студенти, закръглена до 2 знака.
// - `passingCount` — брой студенти, които са преминали (`hasPassed === true`).
// - `subjectStats` — обект с броя студенти по предмети, например:
//   ```js
//   { Math: 3, Science: 2, History: 1 }
//   ```
// - `gradeRange` — обект със свойствата:
//   - `min` — най-ниската оценка
//   - `max` — най-високата оценка

const students = [
  { name: "Peter", grade: 5.5, subject: "Math", hasPassed: true },
  { name: "Anna", grade: 4.2, subject: "Science", hasPassed: true },
  { name: "George", grade: 3.8, subject: "Math", hasPassed: true },
  { name: "Maria", grade: 2.0, subject: "History", hasPassed: false },
  { name: "Ivan", grade: 5.5, subject: "Science", hasPassed: true }
];

console.log(analyzeGrades(students));

// {
//   topStudent: [
//     { name: "Peter", grade: 5.5, subject: "Math", hasPassed: true },
//     { name: "Ivan", grade: 5.5, subject: "Science", hasPassed: true }
//   ],
//   averageGrade: 4.2,
//   passingCount: 4,
//   subjectStats: { Math: 2, Science: 2, History: 1 },
//   gradeRange: { min: 2.0, max: 5.5 }
// }
