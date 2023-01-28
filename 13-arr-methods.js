var articulos = [
    {nombre: "Bici", costo: 500},
    {nombre: "TV", costo: 700},
    {nombre: "Libro", costo: 20},
    {nombre: "Celular", costo: 250},
    {nombre: "laptop", costo: 1200},
    {nombre: "teclado", costo: 25},
    {nombre: "audifonos", costo: 15}
]

// Metodos para recorrer arrays

// Método Filter

// Válida si es un true o false para poder meterlos al nuevo arrays,  y éste método no modifica el array original

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 250; //Artículo menor a 250
});

console.log(articulosFiltrados);

// Metodo Map

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

console.log(nombreArticulos);
// Metodo Find

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Libro";
})

console.log(encuentraArticulo);

// Metodo some

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo >= 5000; // true o false
})

// Metodo forEach

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})

// Metodo Every

var articulosBaratos = articulos.every(function(articulo){
    return articulo.costo < 700;
})

console.log(articulosBaratos);

