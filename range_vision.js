const { match } = require("assert");
const {argv} = require("process");

function rangeVision(number) {
    let valorVisiones = [];
    let digitos = []

    for (let i = 0; i < number.length; i++) {
        let visionI = number.substring(i - (+number[i]), i) !== "" ? number.substring(i - (+number[i]), i) : "-";
        let visionD = number.substring(i + 1, i + (+number[i]) + 1) !== "" ? number.substring(i + 1, i + (+number[i] + 1)) : "-";
        let suma = 0;

        for (const iterator of (visionI + visionD)) {
            if (iterator !== "-") {
                suma += +iterator;
            }
        }

        let obj = {
                Digito: +number[i],
                Pueder_ver_a_la_Izquierda: visionI,
                Pueder_ver_a_la_Derecha: visionD,
                Valor_de_la_Vision: suma
            }
        

        digitos.push(obj)
        valorVisiones.push(suma);
    }
    let minimo = Math.min.apply(null, valorVisiones);

    console.log("valorminimo: " + minimo)
    for (let index = 0; index < digitos.length; index++) {
        if (digitos[index].Digito === 1) {
            return digitos[index].Valor_de_la_Vision === minimo;
            
        } else {
            return digitos[index].Digito === 1;
            
        }
        
    }
    
}

const validNum = /^([0-9])*$/;

if (!validNum.test(argv[2])) {
    console.log("Solo se aceptan numeros");
} else {
    console.log(rangeVision(argv[2]))
}
