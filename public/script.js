//alert("vinculado")
let canSec = 3
let nroSec = 0

var traza = {}
function procesar(arg){

   let obj = JSON.parse(arg.getAttribute('id'))

   traza = {...traza,...obj}
   console.log(traza)
   if(nroSec < canSec - 1){
      document.getElementById('seccion'+nroSec).style.display = 'none';
      nroSec += 1;
      document.getElementById('seccion'+nroSec).style.display = 'block';
   }else{
      window.location.href = url+"cu111"
   }
}


   

