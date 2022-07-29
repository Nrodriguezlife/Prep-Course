// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  //var objeto= {D:1, C:2, A:5};
  array=[];
  for (const i in objeto) {
    array.push(i,objeto[i]);
  }
  return array   
  }  



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let response={};
  let transform=string.split('').sort();
  for(let i= 0; i<transform.length; i++){
    if(!response[transform[i]]){
      response[transform[i]]=1}else
      {
        response[transform[i]]++
      }
  } 
 return response
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
let mayusculas="";
let minusculas="";
for(var index = 0; index < s.length; index++)
{
    var letraActual = s.charAt(index);
    if(esMayuscula(letraActual))
    {
        mayusculas=mayusculas+letraActual;
    }else
    {
        minusculas=minusculas+letraActual;
    } 
}
s = mayusculas.concat(minusculas);
return s 
 
function esMayuscula(letra)
{
    return letra === letra.toUpperCase();
}

}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var string = []
    for(var i=0; i< str.lenght ; i++){
      string.unshift(str[i])
    }
    return string.join('').split('').reverse('').join('')
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var alReves = numero.toString().split('').reverse('').join('')
    alReves = parseInt(alReves)
    if(numero === alReves){
      return 'Es Capicua'
    }
    return 'No es capicua'
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  nuevaCadena = cadena.split('').filter (x => x! =='a' && x! =='b' && x! == 'c')
  return nuevaCadena.join('')
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for(i=0; i< arr.lenght; i++){
    for (var j=i+1; j<arr.lenght ; j++){
      if(arr[j].lenght < arr[i].lenght){
        var menor=arr[j]
        arr[j]=arr[i]
        arr[i]=menor 

      }
    }
  }
  return arr 
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
   var interseccion=[]
    for (var i=0; i<arreglo1.lenght; i++){

      for(var j=0; j< arreglo2.lenght; j++){
          if(arreglo1[i]===arreglo2[j]){
            intereseccion.push(arreglo1[i])
          }
      }
    }
    return interseccion
 }
 //return arreglo1.filter(elemento => arreglo2.includes(elemento))


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

