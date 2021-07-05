
function calcula() {

    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var imc = peso / (altura * altura);
    var imcnovo = parseFloat(imc.toFixed(2));
    document.getElementById("calculo").innerHTML = "O seu IMC é = " + imcnovo;




}



