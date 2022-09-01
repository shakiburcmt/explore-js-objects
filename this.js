// console.log(this)

const student = {
    name: 'ali',
    money: 5000,
    study: 'bangla',
    subjects: ['bangla 2nd', 'history'],
    exam: function () {
        console.log(this);
        return this.name + ' ' + 'omar';
    },
    examArrow: () => {
        // Regular function tar immediate level er object ke this hisabe consider kore kintu arrow function global e chole jay window dekhay
        console.log(this)
    },
    examNested: () => {
        const arrow = () => {
            console.log(this);
        }
        arrow();
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
student.exam();
// dot er left side e ja thakbe setai execution context ar kichu na thakle window object ba global object
const newStudent = {
    name: 'mariam',
    money: 8000
}
newStudent.exam = student.exam;
newStudent.exam()

function clickHandler() {
    console.log(this)
}

document.getElementById('btn2').addEventListener('click', function () {
    console.log(this)
})