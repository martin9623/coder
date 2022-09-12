const CARRITO = document.querySelector('.carrito')
const RESULTADOS = document.querySelector('.buscador__resultados')
const INPUT = document.querySelector('.buscador__input')
const BTN = document.querySelector('.buscador__btn')
const BUSCADOR_TITULOS = document.querySelector('.buscador__titulos')
const CARRITO__EMPTY = document.querySelector('.carrito__empty')

class Productos {
    constructor(id, nombre, cantidad, precio, total) {
        this.id = id
        this.nombre = nombre
        this.cantidad = cantidad
        this.precio = precio
        this.total = total
    }
}

let frutas = []

const manzana = new Productos(1, 'manzana', 1, 300, 0)
const banana = new Productos(2, 'banana', 1, 400, 0)
const pera = new Productos(3, 'pera', 1, 250, 0)
const papa = new Productos(4, 'papa', 1, 100, 0)
const zanahoria = new Productos(5, 'zanahoria', 1, 400, 0)
const manzana_arenoza = new Productos(6, 'manzana arenoza', 1, 300, 0)

frutas.push(manzana, banana, pera, papa, zanahoria, manzana_arenoza)

// frutas.forEach(producto => {
//     CARRITO.innerHTML += crearTabla(producto.id, producto.nombre, producto.cantidad, producto.precio, producto.total)
// })

function crearTabla(id, nombre, cantidad, precio, total) {
    return `<tr>
        <td>${id}</td>
        <td>${nombre}</td>
        <td>
            <button class="btn__tabla">-</button>
                <span class=num__cantidad>
                    ${cantidad}
                </span>
                kg
            <button class="btn__tabla">+</button>
        </td>
        <td class="precio">${precio}</td>
        <td class="total">${precio}</td>
        <td>
            <button class="btn__tabla">Add to cart</button>
        </td>
    </tr>`
}

BTN.addEventListener('click', () => {
    RESULTADOS.innerHTML = ``

    let busqueda = INPUT.value.toLowerCase()

    const resultado = buscar(frutas, busqueda)

    resultado.forEach(el => {
        RESULTADOS.innerHTML += crearTabla(el.id,
            el.nombre,
            el.cantidad,
            el.precio,
            el.total)
    })

    BUSCADOR_TITULOS.style.display = 'table-row'
})

function buscar(array, busqueda) {
    return array.filter((el) => el.nombre.includes(busqueda))
}

RESULTADOS.addEventListener('click', (e) => {
    let event = e.target.textContent
    let cantidad = e.target.parentNode.querySelector('.num__cantidad')
    let precio = e.target.parentNode.parentNode.querySelector('.precio')
    let total = e.target.parentNode.parentNode.querySelector('.total')

    if (event === '+') {
        if (cantidad.innerHTML > 0) {
            calculoProducto('sumar', cantidad, precio, total)
        }
    } else if (event === '-') {
        if (cantidad.innerHTML > 1) {
            calculoProducto('restar', cantidad, precio, total)
        }
    }
})

function calculoProducto(operacion, cantidad, precio, total) {
    if (operacion === 'sumar') {
        cantidad.innerHTML = Number(cantidad.innerHTML) + 1
        calculoTotal()
    } else if (operacion === 'restar') {
        cantidad.innerHTML = Number(cantidad.innerHTML) - 1
        calculoTotal()
    }

    function calculoTotal() {
        total.innerHTML = Number(precio.innerHTML) * Number(cantidad.innerHTML)
    }
}