function square(n){
    return n*n;

}

//Arrow Notation
const cube = x =>{
    console.log("En funcion cube....");
    return x * x * x;
}
function greet() {
  return "Hola Mundo" 
} 
const getTriangleType = (a, b, c)=> { 
    if(a == b && a == c){
        return "Equilatero";
    }else if (a == b || a == c || b == c ){
        return "Isoceles";
    }else{
        return "Escaleno"
    }
}
//Funcion que recibe un etnero y retorne  un array  con la suma de los numeros
//enteros entre 1 y n (inclusive). Muestre en consola  la suma total.

const getSum = n =>{
    let sum = 0;
    let values = [];
    for(let i = 1; i<=n;i++){
        values.push(i);
        sum += i;
    }
    console.log("La suma es:", sum);
    return values;
}
//Implemente una funcion que reciba un array y un valor a buscar.
//Debe retornar verdadero si el valor se encuentra en el array
//y falso en caso contrario.

const find = (arr, x)=>{
    //primera forma: con indices
    for (let i = 0; i< arr.length; i++){
        if(arr[i] == x){
            return true;
        }
    }
    return false;
}
const find2 = (arr, x) => {
    //segunda forma
    for(let element of arr){
        if(element == x){
            return true;
        }
    }
    return false;
}
const showMatrix = _=> {
    const values = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    for(let i = 0; i < values.length; i++){
        for(let j = 0; j < values[0].length; j++){
            console.log(i, j, values[i][j])
        }
    }
    return true;
} 
const getFullName = student.firstName + " " + student.lastName;

//retorne verdadero si el estudiante es mayor a edad o falso en caso contrario

const legalAge = student => student.age >= 18;

//Modifique el ejercicio anterior para considerar un texto de respuesta 
const legalAge1 = student => student.age >= 18 ? "Mayor de edad" : "Menor de edad";

function showResult(result){
    //Se obtiene una referencia al elemento html con ese ID 
    //Podemos modificar sus atributos 
    document.getElementById("txtResult").value = result;
}