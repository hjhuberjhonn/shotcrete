function calcular(){
let B=Number(document.getElementById('ancho').value);
let H=Number(document.getElementById('altura').value);
let L=Number(document.getElementById('avance').value);
let pulg=Number(document.getElementById('espesor').value);

if(!B||!H||!L||!pulg){alert('Ingrese todos los datos');return;}

let hastial=1;
let R=B/2;
let arco=Math.PI*R;
let P=(2*hastial)+arco;
let A=P*L;
let e=pulg*0.0254;
let teorico=A*e;
let rebote=teorico*0.15;
let total=teorico+rebote;

resultado.innerHTML=`
<b>RESULTADOS</b><br>
Sección: ${B.toFixed(2)} x ${H.toFixed(2)} m<br>
Hastiales: 1.00 m<br>
Radio bóveda: ${R.toFixed(2)} m<br>
Perímetro: ${P.toFixed(2)} m<br>
Área sostenida: ${A.toFixed(2)} m²<br><br>
Espesor: ${pulg}" (${e.toFixed(4)} m)<br>
Shotcrete teórico: ${teorico.toFixed(2)} m³<br>
Rebote 15%: ${rebote.toFixed(2)} m³<br>
<hr><b>SHOTCRETE TOTAL: ${total.toFixed(2)} m³</b>`;
}

function limpiar(){
document.querySelectorAll('input').forEach(i=>i.value='');
document.getElementById('resultado').innerHTML='';
}
