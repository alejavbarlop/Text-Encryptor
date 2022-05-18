
function textToDecrypt() { // Funtion to read the textarea(textInput) and to direct the resulto to textarea(textResult) and then to contain the string

	const encryptedText = document.getElementById("textInput");

	const resultText = document.getElementById("textResult");

	const decryptedText = decrypt(encryptedText.value);

	resultText.value = decryptedText;
}

function decrypt(words) { // Funtion to change each letter of the string with the selecction of the matrix to be replaced.

	let matrixCode = [["enter", "e"],["imes", "i"],["ai", "a"],["ober", "o"],["ufat","u"]];

	words = words.toLowerCase();

	for (let i=0; i < matrixCode.length; i++) {

		if(words.includes(matrixCode[i][0])){

			words = words.replaceAll(matrixCode[i][0],matrixCode[i][1]);
		}
	}

	return words;
}