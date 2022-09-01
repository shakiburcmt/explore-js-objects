const student = {
    name: 'ali',
    money: 5000,
    study: 'bangla',
    subjects: ['bangla 2nd', 'history'],
    exam: function () {
        // Kono object er method theke property man pete this likhte hobe
        // console.log(this.name, 'omar');
        // evabe console log na kore return o kora jay, tobe ekhane + diye concat korte hobe
        return this.name + ' ' + 'omar';

    },
    // ekta method theke another method call kora jay, dan pashe ja thak seta call korte this use hoy
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is taking improvement on ${subject}`
    },
    treat: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money
    }
}
const output = student.exam();
console.log(output)

const reExam = student.improveExam('bangla 1st');
console.log(reExam)

const remaining = student.treat(900, 100);
console.log(remaining)
const bouErRing = student.treat(1000, 0);
console.log(bouErRing)