/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
	//ALUMNO: Ramón Villanueva
	
  var respuesta;
  var marca;
  var precio;
  var peso;
  var tipo;
  var acumuladorPeso;
  var primerLiquido;
  var precioMasAlto;
  var marcaDelMasCaro;

  var primerSolido;
  var pesoMasBajo;
  var marcaDelMasLiviano;

  respuesta = true;
  acumuladorPeso = 0;
  primerLiquido = 0;
  //precioMasAlto = 0;
  primerSolido = 0;
  //pesoMasBajo = 0;


  while(respuesta === true) {

  	do {
  		marca = prompt("Ingrese la marca");
  	} while (marca === null || (!(isNaN(marca))) );

  	do {
  		precio = prompt("Ingrese el precio");
  		precio = parseInt(precio);
  	} while (precio < 1 || isNaN(precio));

  	do {
  		peso = prompt("Ingrese el peso del producto en kilogramos");
  		peso = parseInt(peso);
  	} while (peso < 1 || isNaN(peso));

  	do {
  		tipo = prompt("Ingrese el tipo del producto (liquido o solido)" );
  	} while (tipo != "solido"  && tipo != "liquido");


  	//PUNTO A
  	acumuladorPeso += peso;

  	//PUNTO B
  	if(primerLiquido === 0 && tipo == "liquido") {
  		primerLiquido++;
  		precioMasAlto = precio;
  		marcaDelMasCaro = marca;
  	}else if (tipo == "liquido" && precio > precioMasAlto) {
  		precioMasAlto = precio;
  		marcaDelMasCaro = marca;
  	}

  	//PUNTO C
  	if (primerSolido === 0 && tipo == "solido" ) {
  		primerSolido++;
  		pesoMasBajo = peso;
  		marcaDelMasLiviano = marca;
  	}else if (tipo == "solido" && peso < pesoMasBajo) {
  		pesoMasBajo = peso;
  		marcaDelMasLiviano = marca;
  	}


  	respuesta = confirm("¿Desea ingresar otro producto?");
  	console.log("respuesta" + respuesta);
  }

  console.log("El peso total de la compra es: " + acumuladorPeso);
  console.log("La marca más cara de liquido es: " + marcaDelMasCaro);
  console.log("La marca del solido más liviano es: " + marcaDelMasLiviano);
}
