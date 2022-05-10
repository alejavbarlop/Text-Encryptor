function textToEncrypt() {

	var normalText = document.getElementById("textInput").value;

	var textContainer = "";

	for (i = 0; i < normalText.length; i++) {

		textContainer += encrypt(normalText[i]);
	}

	document.getElementById("textResult").innerHTML = textContainer;

	document.querySelector(".first").style.display = "none";

	document.querySelector(".second").style.display = "flex";
}

function encrypt(letters) {

	switch (letters) {

		case "e":
			return "enter";
			break;

		case "i":
			return "imes";
			break;

		case "a":
			return "ai";
			break;

		case "o":
			return "ober";
			break;

		case "u":
			return "ufat";
			break;

		case letters:
			return letters;
			break;
	}
}