const { Console } = require("console");
const {argv} = require("process");

let number_cardinality = (number) => {

    let num = number.toString();
    num = +num[num.length - 1];
    const arr = ["Zero", "Five", "Even", "Odd"];
    
    switch (true) {
        case num === 0:
            console.log(arr[0]);
            break;

        case num === 5:
            console.log(arr[1]);
            break;

        case (num !== 0) && (number % 2 === 0):
            console.log(arr[2]);
            break;

        case (num !== 5) && (number % 2 !== 0):
            console.log(arr[3]);
            break;
    
        default:
            console.log("A")
            break;
    };

};

const validNum = /^([0-9])*$/;

if (!validNum.test(argv[2])) {
    console.log("Solo se aceptan numeros");
} else {
    number_cardinality(+argv[2]);
}