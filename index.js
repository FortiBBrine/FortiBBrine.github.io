
function valid (form) {
    var login = form.name.value;
    var password = form.password.value;
    if ((login == "admin" && password == "admin") || (login == "Scorpion" && password == "5040") || (login == "NIKA" && password == "4050")) {
        alert("Ты ввошел в систему");
        window.location = "https://fortibbrine.github.io/articles.html";          
    }
    else {
        alert("Сори чувак нельзя")
    }
}
