function palindomo(palabra){
	//las variables que voy a usar para hacer los array
var arrayPalabra = []
var arrayPalabraAlreves = []
var palabraAlreves
//separo palabra en el primer array
arrayPalabra = palabra.split("")
//le doy la vuelta al array
arrayPalabraAlreves = arrayPalabra.reverse()
//convierto a string la palabra alreves
palabraAlreves = arrayPalabraAlreves.join("")
//compruebo si son iguales
if (palabra === palabraAlreves) {
	return true
}
else {
	return false
}
}


console.log("La palabra es un palíndromo: "  + palindomo("abba"))
