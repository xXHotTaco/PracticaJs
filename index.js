//Esto es en caso de mandar un solo valor
// function hello(name){
//     return 'Hola ' + name
// }

// console.log(hello('Carlos'))
// console.log(hello('Arturo'))
// console.log(hello('Lopez'))

/****************************************************/

//Podemos mandar mas de un valor, por ejemplo aqui podemos
// Sumar dos numeros 
//Tambien se puede hacer valores por defecto, suponer
//que "y" no se le manda nada se le puede poner desde la funcion
// ejemplo y=10 o y=0 para que eso tenga un valor ya  


// function add(x, y){
//     return x + y
// }

// console.log(add(10, 5))
// console.log(add(10, 10))
// console.log(add(10, 20))
/****************************************************/

// Objetos
/* Se les puede agregar funciones sin necesidad de hacer "function()"
   solo se le ponen los () y ya con eso se hace la funcion
*/

// const user = {
//     nombre: 'carlos',
//     apellido: 'lopez',
//     edad: 24,
//     direccion :{
//         pais: 'Mexico',
//         ciudad : 'Guadalajara',
//         calle: 'hola 123'
//     },
//     amigos : ['hector', 'otro'],
//     active: true,
//     mandarCorreo(){
//         return 'Mandando correo...'
//     }

// }

// console.log(user.direccion.ciudad)
// console.log(user.amigos)
// console.log(user.mandarCorreo())

// const nombre = 'laptop'
// const precio = 2000

// const nuevoProducto = {
//     nombre,
//     precio
// }

// console.log(nuevoProducto)

/****************************************************/

//Manipular el DOM
/*
    Podemo crear cualquier elemento para modificar el DOM desde el js

*/

// const titulo = document.createElement('h1')
// titulo.innerText = 'Hola mundo'

// const boton = document.createElement('button')
// boton.innerText = 'Preciona'

// boton.addEventListener('click', function (){
//     titulo.innerText = 'Texto nuevo'
//     alert('Se hizo click')
// })

// document.body.append(titulo)
// document.body.append(boton)


// const user = {
//     nombre: 'carlos',
//     edad: 24
// }

// function imprimirInfo(user){
//     return '<h1>Hola ' + user.nombre + '</h1>'
// }

// console.log(imprimirInfo(user))
// document.body.innerHTML = imprimirInfo(user)

/****************************************************/

//Destructuring
/*
    A diferencia de lo anterior en este no necesitamos 
    llamar el objeto, podemos llamar directamente a un valor con
    ese nombre, por ejemplo aqui podemos ver que accedo a nombre 
    directamente
*/

// const user = {
//     nombre: 'carlos',
//     edad: 24
// }

// function imprimirInfo(user){

//     const { nombre, edad} = user;
//     return '<h1>Hola ' + nombre + '</h1>'
// }

// document.body.innerHTML = imprimirInfo(user)

/****************************************************/

//Funciones anonimas
/*
    Como lo dice no necita un nombre directamente la funcion
    la podemos mandar a llamar donde lo necitamos o simplemente
    se hacer la funcion donde estoy declarando
*/

// console.log(function(){
//     return 'Comenzando...'
// }())

// const boton = document.createElement('button')
// boton.innerText = 'click me'

// boton.addEventListener('click', function(){
//     alert('Hola')

// })

// document.body.append(boton)

/****************************************************/

//Arrow Funciones 

/*
    Abajo esta el ejemplo de como se hace es, esta el ejemplo de 
    la funcion arriba y aqui abajo es como se hace con la funcion
    flecha 
*/

// function add(x, y){
//     return x + y
// }

// const add = (x, y) => {
//     return x + y
// }

// const boton = document.createElement('button')
// boton.innerText = 'click me'

// boton.addEventListener('click', () => {
//     alert('Hola')

// })

// document.body.append(boton)

/****************************************************/

//Inline arrow functions

// const mostrarTexto = () => 'Hola mundo'
// const mostrarNumero = () => 24
// const mostrarBoolean = () => true
// const mostrarArray = () => [1, 2, 3]
// const mostrarObject = () => ({name: 'Carlos'})

// console.log(mostrarTexto())
// console.log(mostrarNumero())
// console.log(mostrarBoolean())
// console.log(mostrarArray())
// console.log(mostrarObject())

/****************************************************/

//Return en funciones

// const boton = document.createElement('button')
// boton.innerText = 'click me'

// const estaAutorizado = false

// boton.addEventListener('click', () => {
//     if(estaAutorizado){
//        return alert('Autorizado')
//     }

//     alert('No Autorizado')

// })

// document.body.append(boton)

/****************************************************/

//String en linea

// const background = 'red'
// const color = 'white'

// const estaAutorizado = true

// const boton = document.createElement('button')
// boton.innerText = 'click me'
// boton.style = `background: ${estaAutorizado ? 'blue' : 'red'}; color: ${color}`



// boton.addEventListener('click', () => {
//     if(estaAutorizado){
//        return alert('Autorizado')
//     }

//     alert('No Autorizado')

// })

// document.body.append(boton)

/****************************************************/

//Metodos de Array (map, filter, foreach, concat)

// const nombres = ['carlos', 'juan', 'josue']
// const nuevosNombres = ['arturo', 'carlos', 'hector']

/********** forEach **********/

// names.forEach(function(name){
//     console.log(name)

// })


/********** map **********/

/*
    Como vemos el metodo map no modifica el arreglo si no lo 
    podemos guardar y modificar el nuevo concatenando algo nuevo
*/
// names.map(function(name){
//     console.log(name)
// })

// const nuevoNombre = names.map(function(name){
//     return `Hola ${name}`
// })

// console.log(names)
// console.log(nuevoNombre)

/********** find **********/

// const findNombre = names.find(function(name){
//     if(name === 'josue'){
//         return name
//     }
    
// })

/********** Filter **********/
// const noFindNombre = names.filter(function(name){
//     if(name !== 'josue'){
//         return name
//     }
    
// })

// console.log(findNombre)
// console.log(noFindNombre)

/********** Concat **********/

// console.log(nombres.concat(nuevosNombres)
// )

/****************************************************/

//Spread

const nombres = ['carlos', 'juan', 'josue']
const nuevosNombres = ['arturo', 'carlos', 'hector']

console.log([...nombres, ...nuevosNombres])
console.log(nombres)
console.log(nuevosNombres)

const user = {
    nombre: 'carlos',
    apellido: 'lopez'
}

const direccion = {
    calle: 'base 123',
    ciudad: 'zapopan'
}

const userInfo = {
    ...user,
    ...direccion
}









