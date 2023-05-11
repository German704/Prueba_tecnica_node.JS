const {argv} = require("process");

function fizz_buzz(number) {
    let arr = [];
    for (let index = 0; index < number; index++) {
        arr[index] = index + 1;

        if (arr[index] % 5 === 0 && arr[index] % 3 === 0) {
            arr[index] = "fizz_buzz";

        } else if (arr[index] % 3 === 0) {
            arr[index] = "fizz";

        } else if (arr[index] % 5 === 0) {
            arr[index] = "buzz";
        }
    };
    console.log(arr);
};

const validNum = /^([0-9])*$/;

if (!validNum.test(argv[2])) {
    console.log("Solo se aceptan numeros");
} else {
    fizz_buzz(+argv[2]);
}
// pasar los datos por la terminal, ej : node fizz_buzz 15


