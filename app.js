function calcular(){

let B=parseFloat(document.getElementById("ancho").value);
let H=parseFloat(document.getElementById("altura").value);
let L=parseFloat(document.getElementById("avance").value);

if(!B || !H || !L){
alert("Ingrese todos los datos");
return;
}

let hastial=1;
let radio=B/2;
let arco=Math.PI*radio;

let perimetro=(2*hastial)+arco;
let area=perimetro*L;

let espesor=2*0.0254;
let rebote=0.15;

let teorico=area*espesor;
let perdida=teorico*rebote;
let total=teorico+perdida;

document.getElementById("resultado").innerHTML=`
<b>RESULTADOS</b><br>
Sección: ${B.toFixed(2)} x ${H.toFixed(2)} m<br>
Hastiales: 1.00 m<br>
Radio bóveda: ${radio.toFixed(2)} m<br>
Perímetro: ${perimetro.toFixed(2)} m<br>
Área sostenida: ${area.toFixed(2)} m²<br><br>
Shotcrete teórico: ${teorico.toFixed(2)} m³<br>
Rebote 15%: ${perdida.toFixed(2)} m³<br>
<hr>
<b>SHOTCRETE TOTAL: ${total.toFixed(2)} m³</b>
`;

localStorage.setItem("ultimoCalculo",document.getElementById("resultado").innerHTML);
}

function limpiar(){
document.getElementById("resultado").innerHTML="";
document.querySelectorAll("input").forEach(x=>x.value="");
}
