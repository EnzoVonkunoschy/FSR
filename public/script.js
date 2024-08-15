//alert("vinculado")
let nroSec = 1
var traza = {}
function procesar(arg){
   let obj = JSON.parse(arg.getAttribute('id'))
    console.log(Object.keys(obj)[0])
    let seccion = Object.keys(obj)[0]
   traza = {...traza,...obj}
   console.log(traza)
   document.getElementById('seccion'+nroSec).style.display = 'none';
   nroSec += 1;
   document.getElementById('seccion'+nroSec).style.display = 'block';

}

