function textToEncrypt() { // Funtion to read the textInput and to direct the result to textResult and then to contain the string, then 2

	const normalText = document.getElementById("textInput");

	const resultText = document.getElementById("textResult");

	const encryptedText = encrypt(normalText.value);

	resultText.value = encryptedText;

	document.querySelector(".first").style.display = "none";

	document.querySelector(".second").style.display = "flex";
}

function encrypt(words) { // Funtion to change each letter of the string with the selecction of the matrix to be replaced.

	let matrixCode = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u", "ufat"]];

	words = words.toLowerCase();

	for (let i=0; i < matrixCode.length; i++) {

		if(words.includes(matrixCode[i][0])){

			words = words.replaceAll(matrixCode[i][0],matrixCode[i][1]);
		}
	}

	return words;
}