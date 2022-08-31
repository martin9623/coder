let resultado = 0;

const condicion = (respuesta) => {

    respuesta = prompt('Quiere ingresar otro producto? Si/No')
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

window.onload = () => agregarProducto()