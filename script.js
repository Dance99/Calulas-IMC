// ingrese su altura y peso//
function calcularIMC(peso, altura){
    return peso / (altura * altura)
}
let peso =parseFloat(prompt("ingrese su peso en kg:"))
let altura = parseFloat(prompt("ingrese su altura en m: "))

const IMC = peso / (altura * altura)

//clasificar//
function clasificarIMC (IMC) {
    if (IMC < 18.5){
        return " Bajo peso";
    } else if (IMC >=18.5 && IMC < 24.9){
        return "Peso normal";
    } else if (IMC >=25 && IMC < 29.9){
        return "Sobre peso";
    } else {
        return "Obesidad";
    }
}


//resultado//
console.log('su IMC es: ${IMC.toFixed (2)}')
console.log('su categoria es: ${categoria}')