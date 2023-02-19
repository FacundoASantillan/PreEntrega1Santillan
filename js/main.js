
let valor = Number(1250)
let StockPorPersona = Number(10)

for (let i = 1; i <= 8; i++){
let nombre = prompt("Ingrese su nombre")

let Unidades = Number(prompt("Gracias " + nombre + ", \n \nIngrese la cantidad de unidades deseadas: "))
if(Unidades <= 10){
let Total = ((Unidades * valor))
let mensaje = "Gracias " + nombre + ", \n\nSu total a pagar es de $"  + Total + "\n\n"
let desglose ="\nSu numero de reserva es el " + "#" +i+ " ¡Gracias por su compra!"
alert(mensaje + desglose)
}else{
    let Total = ((StockPorPersona * valor))
let mensaje = "Gracias " + nombre + ", \n\n El maximo de unidades disponible por persona es de 10, Su total a pagar es de $"  + Total + "\n\n"
let desglose ="\nSu numero de reserva es el " + "#" +i+ " ¡Gracias por su compra!"
alert(mensaje + desglose)
}
}