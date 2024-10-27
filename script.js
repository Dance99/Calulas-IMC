// ingrese su altura y peso//
const peso =parseFloat(prompt("ingrese su peso en kg:"));
const altura = parseFloat(prompt("ingrese su altura en m: "));

//clasificar//
if (IMC < 18.5){
    categoria = " Bajo peso";
} else if (IMC < 24.9){
