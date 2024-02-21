fetch("text.md")
    .then(response => response.text())
    .then(result => document.getElementById("content").innerHTML = result)