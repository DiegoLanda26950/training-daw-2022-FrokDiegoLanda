// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos



function doCalculation(array) {

    let suma=0;
    let media=0;
    let min = array[0];
    let max = array[0];

    for (let i = 0; i < array.length; i++){

        suma += array[i];
        media = suma/array.length;

        if(array[i] < min){

            min = array[i];

        }

        if(array[i] > max){

            max = array[i];

        }

    }

    console.log(`La suma es ${suma}`);
    console.log(`La media es ${media}`);
    console.log(`El minimo es ${min}`);
    console.log(`El Maximo es ${max}`);
}


doCalculation([1,2,3,4])
doCalculation([5,5,5,5])
doCalculation([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5])
