QUnit.module('analyzeGrades', function() {
  const students = [
    { name: "Peter", grade: 5.5, subject: "Math", hasPassed: true },
    { name: "Anna", grade: 4.2, subject: "Science", hasPassed: true },
    { name: "George", grade: 3.8, subject: "Math", hasPassed: true },
    { name: "Maria", grade: 2.0, subject: "History", hasPassed: false },
    { name: "Ivan", grade: 5.5, subject: "Science", hasPassed: true }
  ];

  QUnit.test('should correctly analyze a list of students', function(assert) {
    const result = analyzeGrades(students);

    assert.deepEqual(result.topStudent, [
        { name: "Peter", grade: 5.5, subject: "Math", hasPassed: true },
        { name: "Ivan", grade: 5.5, subject: "Science", hasPassed: true }
    ], 'Should find all top students');

    assert.strictEqual(result.averageGrade, 4.20, 'Should calculate the average grade correctly');
    assert.strictEqual(result.passingCount, 4, 'Should count passing students correctly');
    
    assert.deepEqual(result.subjectStats, 
        { Math: 2, Science: 2, History: 1 }, 
        'Should provide correct subject statistics'
    );
    
    assert.deepEqual(result.gradeRange, { min: 2.0, max: 5.5 }, 'Should find the correct grade range');
  });

  QUnit.test('should handle a single student', function(assert) {
    const singleStudent = [{ name: "Alex", grade: 6.0, subject: "Physics", hasPassed: true }];
    const result = analyzeGrades(singleStudent);
    assert.deepEqual(result.topStudent, { name: "Alex", grade: 6.0, subject: "Physics", hasPassed: true }, 'Should handle a single top student object');
    assert.strictEqual(result.averageGrade, 6.00, 'Average grade should be the student\'s grade');
    assert.strictEqual(result.passingCount, 1, 'Passing count should be 1');
    assert.deepEqual(result.subjectStats, { Physics: 1 }, 'Subject stats should count the single student');
    assert.deepEqual(result.gradeRange, { min: 6.0, max: 6.0 }, 'Grade range should have min and max equal to the grade');
  });

  QUnit.test('should handle an empty array', function(assert) {
    const result = analyzeGrades([]);
    assert.deepEqual(result.topStudent, "unknown", 'Top student should be "unknown"');
    assert.strictEqual(result.averageGrade, 0, 'Average grade should be 0');
    assert.strictEqual(result.passingCount, 0, 'Passing count should be 0');
    assert.deepEqual(result.subjectStats, {}, 'Subject stats should be an empty object');
    assert.deepEqual(result.gradeRange, { min: 0, max: 0 }, 'Grade range should be 0');
  });
  
  QUnit.test('should handle students with the same lowest grade', function(assert) {
      const studentList = [
        { name: "John", grade: 2.0, subject: "Art", hasPassed: false },
        { name: "Jane", grade: 2.0, subject: "Music", hasPassed: false },
        { name: "Mike", grade: 5.0, subject: "PE", hasPassed: true }
      ];
      const result = analyzeGrades(studentList);
      assert.deepEqual(result.gradeRange, { min: 2.0, max: 5.0 }, 'Should correctly identify the min grade');
  });

});
