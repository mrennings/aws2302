function btnAlert() {
    text = document.getElementById("tarea1").value;
    alert(text);
}

document.getElementById("btn1").addEventListener("click", btnAlert);
