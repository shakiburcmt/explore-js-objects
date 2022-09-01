const student = {
    name: 'ali',
    money: 5000,
    study: 'bangla',
    subjects: ['bangla 2nd', 'history'],
    exam: function () {
        return this.name + ' ' + 'omar';

    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is taking improvement on ${subject}`
    },
    treat: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money
    }
}

const result = student.exam();
console.log(result)

const newStudent = {
    name: 'mariam',
    money: 8000
}
const result2 = student.exam.call(newStudent)
console.log(result2)

// this er moddhe jeta rakha hoyeche oita age call korte hobe, (newStudent) age dite hobe
const newStudentMoney = student.treat.call(newStudent, 450, 10);
console.log(newStudentMoney)
// call kore kora jay abar apply diyeo kora jay tobe parameter er man [] er moddhe rakhte hoy
const newStudentMoney2 = student.treat.apply(newStudent, [30, 10]);
console.log(newStudentMoney2)

// bind koreo kaj kora jay

const newTreat = student.treat.bind(newStudent);
console.log(newTreat(400, 100));