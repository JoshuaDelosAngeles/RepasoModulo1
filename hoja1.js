function zodiaco(mes,día){
   
   let signo ;
   
    if((mes == "Diciembre"&& día>22) || (mes=="Enero"&&día<19)){
       signo= 'Capricornio'
    }else if ((mes=="Enero"&& día> 19) || (mes=="Febrero"&&día<19)){
        signo= "Acuario"
    }else if ((mes =="Febrero" && día>19) || (mes=="Marzo"&& día<20)){
        signo= 'Piscis'
    }else if ((mes=="Marzo"&& día>20 ) || (mes =="Abril" && día<19)){
        signo='Aries'
    }else if ((mes=="Abril" && día>19 )|| (mes == "Mayo" && día<20))
{
   signo= 'Tauro'
}else if ((mes=="Mayo"&& día>20) || (mes== "Junio" && día<20)){
   signo='Géminis'
}else if (( mes == "Junio" && día>20) || (mes=="Julio"&& día<21)){
   signo = 'Cáncer'
}else if ((mes == "Julio" && día>=22) || (mes=="Agosto" && día<22)){
  signo= 'Leo'
}else if ((mes == "Agosto" && día>22 )|| (mes=="Septiembre" && día<23)){
    signo = 'Virgo'
}else if((mes=="Septiembre"&& día>23) || (mes =="Octubre" && día<22)){
    signo = 'Libra'
}else if((mes == "Octubre" && día>22) || (mes=="Noviembre" && día<22)){
   signo= 'Escorpio'
}else if ((mes== "Noviembre" && día>22) || (mes=="Dicicembre" && día<22)){
signo = 'Sagitario'
}
return signo
};
console.log(zodiaco("Junio",22))

//segundo ejercicio

function buscaContinente(pais) {
    let continente1=["España","Italia","Francia","Alemania","Bélgica"]
    let continente2=["Egipto","Marruecos","Nigeria","Congo","Sudafrica"]
    let continente3=["China","Japón","Corea","Iraq","Siria"]
    let continente4=["Brasíl","Argentina","Colombia","Venezuela","Perú","EEUU","México","Canadá"]
    let continente5=["Australia","Nueva Zelanda","Nueva Guinea","Fiyi","Samoa"]
    let continentes=[continente1,continente2,continente3,continente4,continente5]

    if(continentes[0].includes(pais)){
        console.log( "Europa")
        
    }else if(continentes[1].includes(pais)){
        console.log("África");
    }else if(continentes[2].includes(pais)){
        console.log("Asia");
    }else if(continentes[3].includes(pais)){
        console.log("América");
    }else if (continentes[4].includes(pais)){
        console.log("Oceanía");
    }
    
    }

    buscaContinente("Nigeria")
// ejercicio 3

function impares1(numero){
    let marcador= [];
   for(let i = 0; i <= numero; i++){
  if(i%2!=0){
      marcador.push(i)
  }
   }
   return marcador
}

console.log(impares1(10));


//ejercicio4

function invertida(atributo){
 atributo =[1,2,3,4,5]

  return atributo.reverse()
}

 console.log(invertida(1,2,3,4,5));

 // ejercicio5


function arcoirisYess(colores){

let arcoiris=["rojo","naranja","amarillo","verde","añil","azúl","violeta"]

if(arcoiris.includes(colores)){
    console.log('true')
}else{console.log('false');}
}

arcoirisYess("negro","marron","gris")

//ejercicio 6

function pares(numero){
    let marcador= [];
   for(let i = 0; i <= numero; i++){
  if(i%2==0){
      marcador.push(i)
  }
   }
   return marcador
}
console.log(pares(20));

//ejercicio7


function comprobarM(nombre) 
{
    let emes=0
    let total=nombre.length
    for (let i=0;i<nombre.length; i++){
        if(nombre[i].indexOf("M")===0){
            emes++
        } 
    }
    if(emes===total){
        return(true)
    }
    return(false)
}
console.log(comprobarM(["Manolo","Marcos","Miguel"]))
console.log(comprobarM(["Maria","Marta","Fernando"]))


//ejercicio8

function sumaArr(atributos){
    let resultado=0
    for(let i=0 ; i<atributos.length;i++){
       resultado+=atributos[i].length
    }
return resultado
}
console.log(sumaArr("Maria","Marta","Fernando"));

//ejercicio 9


function paresNones(numero1){

    if(numero1%2==0){
        console.log('El numero '+ numero1 +' es par');
    }else if (numero1%2!=0){
        console.log('El numero '+ numero1 + ' es impar') ;
    }
}

paresNones(17)

//ejercicio 10



console.log(sumaArr('casa','coche','ciudad','cesta'));
paresNones(sumaArr('Casa', 'Coche', 'Ciudad', 'Cesta'))
paresNones(sumaArr('barco','baca','bicicleta','bisiesto','brasil'))
paresNones(sumaArr('venezuela','veneno','voltaje'))

//ejercicio 11
// 11. Clasificar las funciones según el tipo y guardarlas en ficheros distintos
// o RepasoIf.ts
// o RepasoFor.ts
// o RepasoWhile.ts
// 12. Crear un proyecto nuevo en Git que se llame RepasoProgramacion y guardar los
// otros ficheros allí.

