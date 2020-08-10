/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var contandor;
	var nombre;
	var edad;
	var temperatura;
	var sexo;
	var contadorDeHombres;
	var contadorDeMujeres;
	var acumuladorEdad;
	var primeraMujer;
	var temperaturaMaxima;
	var nombreDeLaMujer;

	contador = 0;
	contadorDeHombres = 0;
	contadorDeMujeres = 0;
	acumuladorEdad = 0;
	primeraMujer = 0;

	while(contador < 5) {
		do{
			nombre = prompt("Ingresar nombre");
			console.log(nombre);
			console.log(contador);
		} while (nombre === null || (!(isNaN(nombre))) );

		do{
			edad = prompt("Ingrese edad");
			edad = parseInt(edad);
		} while (isNaN(edad) || edad < 1 );

		do{
			temperatura = prompt("Ingrese temperatura");
			temperatura = parseInt(temperatura);
		} while (isNaN(temperatura));

		do{
			sexo = prompt("Ingrese el sexo(m para masculino o f para femenino)");		 
		} while (sexo != "m" && sexo != "f");

		//PUNTO A
		switch (sexo) {
			case "m":
				contadorDeHombres++;
				break;

			case "f":
				contadorDeMujeres++;
				break;
		}
		//PUNTO B
		acumuladorEdad += edad;

		//PUNTO C
		if (sexo == "f" && primeraMujer < 1) {
			primeraMujer++;
			temperaturaMaxima = temperatura;
			nombreDeLaMujer = nombre;
		}else if (sexo == "f" && temperatura > temperaturaMaxima) {
			temperaturaMaxima = temperatura;
			nombreDeLaMujer = nombre;
		}


		contador++;
	}

	promedioEdad = acumuladorEdad / contador;

	console.log("Hay " + contadorDeHombres + " hombres.");
	console.log("Hay " + contadorDeMujeres + " mujeres.");
	console.log("El promedio de edad es: " + promedioEdad);
	if (contadorDeMujeres > 0) {
		console.log("La mujer con la temperatura más alta es: " + nombreDeLaMujer);
	}
	
}
