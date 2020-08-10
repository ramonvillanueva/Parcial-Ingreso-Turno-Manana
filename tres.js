/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	//ALUMNO: Ramón Villanueva
	var respuesta;
	var nombre;
	var lugar;
	var temporada;
	var cantidad;

	var contadorSalta;
	var contadorCataratas;
	var contardorBariloche;
	var lugarMasElegido;

	var banderaPrimera;

	var acumuladorInvierno;

	respuesta = true;
	contadorSalta = 0;
	contardorBariloche = 0;
	contadorCataratas = 0;
	banderaPrimera = 0;
	acumuladorInvierno = 0;

	while(respuesta === true) {

		do{
			nombre = prompt("Ingrese el nombre del titular");
		} while ( nombre === null || (!(isNaN(nombre))) );

		do {
			lugar = prompt("Ingrese el lugar ( bariloche, cataratas o salta) ");
		} while (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta");

		do {
			temporada = prompt("Ingrese la temporada (otoño,invierno,verano,primavera) ");				
		} while (temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "prinavera" );

		do {
			cantidad = prompt("Ingrese la cantidad de personas que viajan");
		} while (isNaN(cantidad));

		//PUNTO A
		switch(lugar) {
			case "bariloche":
				contardorBariloche++;
				break;

			case "cataratas":
				contadorCataratas++;
				break;

			case "salta":
				contadorSalta++;
				break;
		}

		//PUNTO B
		if (banderaPrimera === 0) {
			banderaPrimera++;
			cantidadMasPersonas = cantidad;
			titularConMasPersonas = nombre;
		}else if (cantidad > cantidadMasPersonas) {
			cantidadMasPersonas = cantidad
			titularConMasPersonas = nombre;
		}

		//PUNTO C
		if (temporada == "invierno") {
			acumuladorInvierno += cantidad;
			contadorInvierno++;
		}



		respuesta = confirm("¿Desea ingresar otra estadia?");
	}




	//PUNTO A
	if (contadorSalta > contadorCataratas && contadorSalta > contardorBariloche) {
		lugarMasElegido = "Salta";

	}else if (contadorCataratas > contadorSalta && contadorCataratas > contardorBariloche) {
		lugarMasElegido = "Cataratass";

	}else if (contardorBariloche > contadorCataratas && contardorBariloche > contadorSalta) {
		lugarMasElegido = "bariloche";
	}

	//PUNTO C

	promedio = acumuladorInvierno / contadorInvierno;

	console.log("El lugar más elegido es:" + lugarMasElegido);
	console.log("El nombre del titular con más personas es " + titularConMasPersonas);
	console.log("Promedio de personas que van en invierno : " + promedio);
}
