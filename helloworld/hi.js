console.log("hello world")
//var,let,const


var name = "asas";
let name1 = 'asassss';
const number = 2;
console.log(name)
console.log(name1)
console.log(number);
//let thi gan lai gia tri lai dc
let number1 = 45
number1 = 11
//const không gán lại dc giá trị
//Phạm vi biến số của let và const là y chang nhau
// ví dụ

// const age = 20;
// age = 24
// console.log(age)
console.log(number1)

function example() {
    if (true) {
        let y = 2;
        const z = 3;
    }
    //defind là xác định
    console.log(y); // ReferenceError: y is not defined
    console.log(z); // ReferenceError: z is not defined
}

