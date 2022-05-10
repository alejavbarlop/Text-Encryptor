function copyToClipBoard() {

    var content = document.getElementById("textResult");
    
    content.select();
    document.execCommand('copy');

    alert("Copied!");
}
