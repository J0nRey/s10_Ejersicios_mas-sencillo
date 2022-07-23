/*
1. Crear un script para calcular el IMC (Indice de masa corporal) de cualquier persona, y determinar la composición corporal de dicha persona bajo los siguientes criterios:
Peso inferior al normal	: IMC Menos de 18.5
Normal	: IMC 18.5 – 24.9
Peso superior al normal	: IMC 25.0 – 29.9
Obesidad : IMC Más de 30.0

formila = peso/(altura^2)

-pedir la altura en metros
-pedir el pero en kilos
-aplicar la formila
-evaliar el resultado en base a los criterios definidos
*/


var heigth = parseFloat(prompt("ingresa tu altura en metros"))
var weight = parseFloat(prompt("ingresa tu peso en kilogramos"))

var imc = weight / (heigth*heigth)

console.log(imc)

if( imc < 18.5 ){
  alert("Tu IMC es inferior al normal")
}else if( imc >= 18.5 && imc <= 24.9 ){
  alert("Tu IMC es normal")
}else if( imc >=25 && imc <= 29.9 ){
  alert("Tu IMC es un poco elevado")
}else{// if( imc > 30 ){
  alert("Presentas obesidad")
}



/*
2. Usando como referencia los siguientes datos de estaturas promedio:
            General Varón   Mujer
México	    169.9	170.0	160.8   cm's
Australia	172.6	179.2	165.9   cm's
Canadá	    171.0	178.1	163.9   cm's
Brasil	    167.3	173.6	160.9   cm's
Reino Unido	171.0	177.5	164.4   cm's
crear un script que me permita conocer si mi estatura es superior, 
inferior o igual al promedio dependiendo de mi país y género. 
Si mi país no se encuentra en la lista, indicar que no se cuenta 
con el dato de estatura para ese país.
-recibir el dato del país
-recibir el dato de la estatura
-comprar los datos con base en la información brindada


-recibir el dato del pais
-recibir el dato de la estatura
-comparar los datos con base a la informacion brindada
*/


var country = prompt("Ingresa tu pais")
var height2 = parseFloat("Ingresa tu estatura en centimetros ")
var gender = prompt("Ingresa tu genero ( Masculino || femenino ) ")

var averageHeight; //indefinido

  switch(country){
    case "mexico":

    /*
             condition ? result if true : result if false 
        gender === "masculino" ? averageHeight = 170 : averageHeight = 160.8
      
 
          encadenamoento de alternarios 
      averageHeight = gender === "masculino" ? 170 : 
                      gender === "femenino"  ? 160.8 :
                       "genero no valido"
*/

  averageHeight = gender === "masculino" ? 170 : 160.8

  if( height2 < averageHeight ){
  alert("Tu estatura es menor al promedio")  
  } else if ( height2 > averageHeight){
    alert("Tu estatura es mayor al promedio")
  } else {
    alert("Tu estatura es promedio")
  }



      break
    
    case "australia":
      break
    
    case "canada":
      break

    case "brasil":
      break

    case "reino unido":
      break

      default:
      alert("la informacion no se encuentra disponible")
  }



  /*
3. Tomando como referencia los siguientes datos de densidades:
Sustancia       Densidad (kg/m3)
Acero           7850
Cobre           8940
Oro             19300
Plata           10490
Diamante        3515
crear un script que me permita conocer el peso de un cubo de cualquier material 
(pedir al usuario la dimensión del lado del cubo y el material a consultar). 
Si el material no se encuentra en la lista, 
informar que no se cuentan con datos sobre la densidad de dicho material.
*/

alert("conocer el peso de un cubo del material indicado")
alert("indique la dimencion del cubo")
var lado1 = prompt(("Digite lado 1"))
var lado2 = prompt(("Digite lado 2"))
var lado3 = prompt(("Digite lado 3"))

var material = prompt("digite el tipo de material")

cubo = lado1* lado2* lado3

switch(material){
  
  case "acero":
  var densidad = 7850
  alert("densidad del acero = "+densidad)
  alert("La densidad del Acero es : "+cubo*densidad+" (kg/m3)"  )
  break

  case "cobre":
    var densidad = 8940
    alert("densidad del cobre = "+densidad)
    alert("La densidad del cobre es : "+cubo*densidad+" (kg/m3)"  )
    break

    case "oro":
      var densidad = 19300
      alert("densidad del oro = "+densidad)
      alert("La densidad del oro es : "+cubo*densidad+" (kg/m3)"  )
      break

      case "plata":
        var densidad = 10490
        alert("densidad del plata = "+densidad)
        alert("La densidad del plata es : "+cubo*densidad+" (kg/m3)"  )
        break

        case "diamante":
          var densidad = 3515
          alert("densidad del diamante = "+densidad)
          alert("La densidad del diamante es : "+cubo*densidad+" (kg/m3)"  )
          break

          default:

          alert("no se cuentan con datos sobre la densidad de dicho material")
}
