function copyToClipBoard() { // Function to read textarea(textResult), copy the string on it and clear the text at the same time.

    var content = document.getElementById("textResult");
    content.select();
    document.execCommand('copy');
    alert("Copied!");
    document.querySelector("#textInput").value = "";
    document.querySelector("#paste").style.display = "block";
}

function pasteOfClipBoard() { // Function to read clipboard, copy the string on it and clear the text at the same time.

    document.getElementById("textInput").value = document.getElementById("textResult").value;
    document.querySelector("#textResult").value = "";

    }