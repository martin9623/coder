//tabla de multiplicar

let producto = prompt('Ingrese numero para ver su tabla de multiplicacion')

if (!isNaN(producto) && producto != null) {
    console.log(`Tablas de multipicar del numero ${producto}`)
    for (i = 1; i <= 10; i++) {
        console.log(`${producto} * ${i} = ${producto * i}`)
    }
} else {
    alert('Su numero es invalido')
}
