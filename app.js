function calcular(){
let B=Number(document.getElementById('ancho').value);
let H=Number(document.getElementById('altura').value);
let L=Number(document.getElementById('avance').value);

let R=B/2;
let P=2+(Math.PI*R);
let A=P*L;
let V=A*0.0508;
let total=V*1.15;

document.getElementById('resultado').innerHTML=
`
<h2>RESULTADO</h2>
Sección: ${B} x ${H} m<br>
Hastiales: 1 m<br>
Radio bóveda: ${R.toFixed(2)} m<br>
Área sostenida: ${A.toFixed(2)} m²<br><br>
Shotcrete: ${V.toFixed(2)} m³<br>
Rebote 15%: ${(V*0.15).toFixed(2)} m³<br>
<h2>Total: ${total.toFixed(2)} m³</h2>
`;
}