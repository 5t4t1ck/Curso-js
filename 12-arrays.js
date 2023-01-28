// Un array es una estructura de datos, es un objeto tipo lista de alto nivel.

// Los arrays son objetos de tipo lista cuyo prototipo tiene métodos para realizar operaciones de recorrido y mutación

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);
console.log(frutas.length); // Length es una propiedad de array

// Acceder (por indice) a un elemento del Array

console.log(frutas[2]); // Los arrays inician en "0"

// === Métodos para mutar arrays ===

// .push();

var masFrutas = frutas.push("Uvas"); //Esté metodo añadirá "Uvas" al final del array
console.log(frutas);

// .pop();

var ultimo = frutas.pop(); // Eliminará el ultimo elemento del final
console.log(frutas);

// unshift();

var nuevaLongitud = frutas.unshift("Uvas") // Añade "Uvas" al inicio
console.log(frutas);


// shift();

var borrarFruta = frutas.shift("Manzana"); //Elimina el primer elemento del array
console.log(frutas);

// .indexOf();

var posicion = frutas.indexOf("Platano"); // te dará la posición de ese item en el array
console.log(frutas);

// splice()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

//At position 2, remove 2 items:
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 2);

/*
The splice() method adds and/or removes array elements.

The splice() method overwrites the original array.
*/