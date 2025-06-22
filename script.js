function sayHi() {
    const msg = document.getElementById("message").value;
    const response = document.getElementById("response");
    response.innerText = `Камилла говорит: "${msg}" — очень мило! 💕`;
}
