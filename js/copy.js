function copyToClipBoard() {

		var content = document.getElementById("result");

		content.select();

		document.execCommand("Copy");

		alert("Infomación Copiada con Exito");

}