// toma de decisiones

var esUsuario = true;

if(esUsuario){
    console.log("Tiene acceeso");
}

// Else

if(esUsuario){
    console.log("Tiene acceeso");
}else{
    console.log("Tienes que crear una cuenta");
}

// 

var edad = 18;
var accion;

if (edad >= 18){
    accion = "Puede votar";
} else {
    accion = "No puede votar";
}

console.log(accion)

// else if


var edad = 18;
var accion;

if (edad === 18){
    accion = "Puede votar, será su primera votación";
} else if (edad > 18){
    accion = "puede votar";
} else {
    accion = "Aún no puede votar";
}

console.log(accion)

// Operador ternario

var numero = 1;
var resultado;

if (numero === 1){
    resultado = "Sí son un 1";
} else {
    resultado = "No soy un 1";
}

condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? "Sí son un 1" : "No soy un 1";

console.log(resultado)