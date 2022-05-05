
function textToDecrypt() {

	const encryptedText = document.getElementById("textInput");

	const resultText = document.getElementById("textResult");

	const decryptedText = decrypt(encryptedText.value);

	resultText.value = decryptedText;
}

function decrypt(words) {

	let matrixCode = [["enter", "e"],["imes", "i"],["ai", "a"],["ober", "o"],["ufat","u"]];

	words = words.toLowerCase();

	for (let i=0; i < matrixCode.length; i++) {

		if(words.includes(matrixCode[i][0])){

			words = words.replaceAll(matrixCode[i][0],matrixCode[i][1]);
		}
	}

	return words;
}