let users = [
    { user: 'Einar', pass: '01', saldo: 200 },
    { user: 'Sergio', pass: '02', saldo: 290 },
    { user: 'Sam', pass: '03', saldo: 67 },
    { user: 'Natalia', pass: '17', saldo: 500 },
    { user: 'Blanca', pass: '2508', saldo: 500 },
    { user: 'Lore', pass: '2904', saldo: 500 },
]

let userName = document.querySelector('#username')
let passWord = document.querySelector('#password')
let btnInicio = document.querySelector('#btnInicio')
let mensaje = document.querySelector('#mensaje')
let menu = document.querySelector('menu')
let btnConsultar = document.querySelector('#btnConsultar')
let btnIngresar = document.querySelector('#btnIngresar')
let btnRetirar = document.querySelector('#btnRetirar')


function validar() {
    for (let i = 0; i <= users.length; i++) {
        console.log(users[i].user)

        if (userName.value === users[i].user && passWord.value === users[i].pass) {
            console.log('OK')
            mensaje.innerText = 'Correct'
            mensaje.classList.add('corr')
            mensaje.classList.remove('inc')
            location = "menu.html"
            window.localStorage.setItem('usuarioactual', i) //se crea variable en local storage con .setItem y se iguala a el indice "i"
            return true
        }
        else {
            console.log('INCORECT')
            mensaje.innerText = 'Incorrect'
            mensaje.classList.add('inc')
            mensaje.classList.remove('corr')
        }
    }
}

if (btnInicio) {
    btnInicio.addEventListener('click', validar) //boton validar usuario
}


function consultar() {
    let i = Number(window.localStorage.getItem('usuarioactual'))  //se crea en el scope una variable i, y se iguala a la variable creada en el local storage con .getItem
    alert('TU SALDO ACTUAL ES: $'+ users[i].saldo) 
}

function ingresar() {
    let i = Number(window.localStorage.getItem('usuarioactual'))
    if (users[i].saldo<990) {
       let deposito = Number(prompt('CANTIDAD A DEPOSITAR: '))
    let nuevosaldo = deposito + users[i].saldo
    alert('DEPOSITASTE: $'+ deposito + '        TU SALDO ACTUAL ES: $'+ nuevosaldo) 
    users[i].saldo=nuevosaldo 
    } else {
        alert('TU SALDO ACTUAL ES: $'+ users[i].saldo + ' NO ES POSIBLE DEPOSITAR MAS SALDO') 
    }
    
}

function retirar() {
    let i = Number(window.localStorage.getItem('usuarioactual'))
    if(users[i].saldo>10){
    let retiro = Number(prompt('CANTIDAD A RETIRAR: '))
    let nuevosaldo = users[i].saldo - retiro
    alert('RETIRASTE: $'+retiro +'       TU SALDO ACTUAL ES: $'+ nuevosaldo)
    users[i].saldo=nuevosaldo  
    }
    else{
        alert('TU SALDO ACTUAL ES: $'+ users[i].saldo + ' NO HAY SALDO DISPONIBLE')  
    } 
}




btnConsultar.addEventListener('click', consultar)  //boton consulata de saldo 
btnIngresar.addEventListener('click', ingresar)  //boton ingreso de saldo
btnRetirar.addEventListener('click', retirar)  //boton retiro de saldo

