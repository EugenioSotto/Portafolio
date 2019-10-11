// var Menor = parseInt(prompt("¿Cuál es el número menor?"))

// var Mayor = parseInt(prompt("¿Cuál es el número mayor?"))

// var Orden = parseInt(prompt("Si lo quieres descendente, escribe 1. Si lo quieres ascendente escibre 2."))


// if (Orden == 1) {
//     for (var i=Menor; i <= Mayor; i++ ) {
//         console.log (i)
//     }
// } else if (Orden == 2) {
//     for (var i = Mayor; i >= Menor; i--) {
//         console.log (i)
//     }
// } else {
//     alert("Algo pasó mal")
// }

var Dinero = parseInt(prompt("¿Cuánto dinero tienes?"))

if (Dinero == 0) {
    console.log ("No tienes dinero")
} else if (Dinero >= 1 && Dinero <= 50) {
    console.log ("Puedes comprar unas papas y un chesquito")
} else if (Dinero > 50 && Dinero <= 200) {
    console.log ("Puedes invitar la peda")
} else if (Dinero >= 201) {
    console.log ("Pinche rico")
}