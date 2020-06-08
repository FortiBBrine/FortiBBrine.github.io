function comment(nick, text, email) {
	if email.value == "" || email.value == " " {
		alert("Введите email");
	}
	else if (text.value == "") {
		alert("Введите текст комментария");
	}
	else if (nick.value == "") {
		alert("Ник пустой");
	}
	else {
		alert("Запрос на комментарий отправлен на вашу почту");
	}
}