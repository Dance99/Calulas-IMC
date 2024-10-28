// ingrese su altura y peso//
function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

let peso = parseFloat(prompt("ingrese su peso en kg:"))
let altura = parseFloat(prompt("ingrese su altura en m: "))

let IMC = calcularIMC(peso, altura);
let clasificar = clasificarIMC(IMC);

//clasificar//
function clasificarIMC (imc) {
    if (imc < 18.5){
        return " Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9){
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9){
        return "Sobre peso";
    } else {
        return "Obesidad";
    }
}


//resultado//
document.write("Su IMC es: " + IMC.toFixed(2) + "(" + clasificar + ")");