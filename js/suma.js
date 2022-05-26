let valorA = prompt('Introduce valor de A');
let valorB = prompt('Introduce valor de B');

console.log(valorA);
console.log(valorB);

function sumar0(newA, newB){
    return newA + newB;
}

const sumar1 = function(newA,newB) {return newA + newB};

const sumar = (newA,newB) => newA + newB;


let result = sumar(Number(valorA), Number(valorB));
console.log(result);

let parrafo = document.getElementsByClassName('info');
console.log(parrafo);
parrafo[0].innerHTML = `El resultado de la suma de ${valorA} + ${valorB} es ${result}`;