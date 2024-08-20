//alert("vinculado")
let canSec = 3
let nroSec = 0

let secAct = 0
let secAnt = 0
var traza = {}

function procesar(arg){

   let obj = JSON.parse(arg.getAttribute('id'))
   console.log("obj")
   console.log(obj)

   trazar(obj)

   traza = {...traza,...obj}
   console.log("traza")
   console.log(traza)
   
   document.getElementById('seccion'+secAct).style.display = 'none';
   secAct=obj.ss
   document.getElementById('seccion'+obj.ss).style.display = 'block';

   /* 
   if(nroSec < canSec - 1){
      document.getElementById('seccion'+nroSec).style.display = 'none';
      nroSec += 1;
      document.getElementById('seccion'+nroSec).style.display = 'block';
   }else{
      window.location.href = url+"cu111"
   }*/
}

function trazar(arg){
   
  var sel = document.getElementById('seleccionado').innerHTML
  sel += arg[Object.keys(arg)[0]]+'<br>'

  document.getElementById('seleccionado').innerHTML = sel

}
   

