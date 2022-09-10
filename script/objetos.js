let resultado = 0;
const TABLA = document.querySelector('.tabla')

class Productos {
    constructor(numeroProducto, producto, cantidad, precio) {
        this.numeroProducto = numeroProducto
        this.producto = producto
        this.cantidad = cantidad
        this.precio = precio
    }
}

let frutas = []

const fruta1 = new Productos(1, 'manzana', '1 kg', 300)
const fruta2 = new Productos(2, 'banana', '1 kg', 400)
const fruta3 = new Productos(2, 'pera', '1 kg', 400)
const fruta4 = new Productos(2, 'banana', '1 kg', 400)
const fruta5 = new Productos(2, 'banana', '1 kg', 400)
const fruta6 = new Productos(2, 'banana', '1 kg', 400)
const fruta7 = new Productos(2, 'banana', '1 kg', 400)
const fruta8 = new Productos(2, 'banana', '1 kg', 400)
const fruta9 = new Productos(2, 'banana', '1 kg', 400)

frutas.push(fruta1, fruta2, fruta3, fruta4, fruta5, fruta6, fruta7, fruta8, fruta9)

console.log(frutas)

frutas.forEach(fruta => {
    console.log(fruta);
    TABLA.innerHTML += `
            <tr>
                <td>${fruta.numeroProducto}</td>
                <td>${fruta.producto}</td>
                <td>${fruta.cantidad}</td>
                <td>${fruta.precio}</td>
            </tr>
    `
})



const condicion = () => {

    let respuesta = prompt('Quiere ingresar otro producto? Si/No')
    respuesta = respuesta.toLowerCase()

    if (respuesta === 'si') {
        agregarProducto()
    } else if (respuesta === 'no') {
        alert(`Su total es de $${resultado}`)
    } else {
        alert('Por favor ingrese una respuesta correcta')
        condicion()
    }

}

const agregarProducto = () => {
    producto = prompt('Ingrese numero de producto a comprar')
    producto = Number(producto)

    if (producto === 1) {
        resultado += 200
        condicion()
    } else if (producto === 2) {
        resultado += 300
        condicion()
    } else if (producto === 3) {
        resultado += 250
        condicion()
    } else {
        alert('Por favor ingrese una respuesta correcta')
        agregarProducto()
    }
}

// window.onload = () => agregarProducto()