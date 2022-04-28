function textToEncrypt() {

	var normalText = document.getElementById("textInput").value;

	var textContainer = "";

	for (i = 0; i < normalText.length; i++) {

		textContainer += encrypt(normalText[i]);
	}

	document.getElementById("result").innerHTML = textContainer;
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

function textToDecrypt() {

	var textResult = document.getElementById("result").value;

	var encryptedText = ["enter", "imes", "ai", "ober", "ufat"]

	for (encryptedText in textResult) {

		switch() {

		case "enter":
			return "e";
			break;

		case "imes":
			return "i";
			break;

		case "ai":
			return "a";
			break;

		case "ober":
			return "o";
			break;

		case "ufat":
			return "u";
			break;
		}

		document.getElementById("result2").innerHTML = textContainer;
	}
}