/*Realizo una función auto invocada para validar el formulario*/
(function validateForm() {
	var boton =	document.getElementById("enviar-form");
	
	boton.addEventListener("click", function(el){
		el.preventDefault();
	var nombre = document.getElementById("nombre").value;
	var email = document.getElementById("email").value;
	var asunto = document.getElementById("asunto").value;
	var area = document.getElementById("text-area").value;


	if (!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(nombre))) {
 		alert("Ingrese su nombre, por favor. La primera letra debe estar en mayúscula.");
 	} else if (!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(email))) {
 		alert("Ingrese un e-mail válido, por favor.");
 	} else if (asunto == "") {
 		alert("Ingrese su dirección, por favor.");
 	} else if (asunto == "") {
		alert("Escriba el asunto de su mensaje, por favor.");
	} else if (area.length > 100 || area == "") {	
		alert("Ingrese un mensaje, por favor. Máximo 100 caracteres");
	} else {
		document.getElementById("nombre").value ="";
		document.getElementById("email").value = "";
		document.getElementById("asunto").value = "";
		document.getElementById("text-area").value ="";	
		alert("Enviado correctamente, le responderemos a la brevedad.");		
	}
	})
})()

/*Realizo una función para cambiar el texto al presioanr el botón de "Inscribete"*/
function botonInscri(){
	var inscribete = document.getElementById("inscripcion");
	var texto = document.querySelector(".texto-encabezado h1");	
	texto.innerHTML = "¡Chicas unidas, jamás serán vencidas!";	
}

/*Realizo otra función auto invocada para cambiar la posición de la imagen y el texto al presionar el botón "Hackaton"*/
(function hackathon(){
	var boton = document.getElementById("hack");
	var img = Array.from(document.getElementsByClassName("respect"))
	boton.addEventListener("click", function(el){
		el.preventDefault();

		img.forEach(function(e){
			e.classList.add("cambio");
		})
	})

})()	
