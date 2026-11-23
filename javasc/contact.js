var form = document.getElementById("contactForm");
var answer = document.getElementById("contactAnswer");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (form.checkValidity()) {
        answer.className = "alert alert-success";
        answer.innerText = "Merci " + document.getElementById("contactName").value + " ! Votre message a ete prepare. Rien n’a ete envoye.";
        answer.hidden = false;
    } else {
        form.classList.add("was-validated");
        answer.className = "alert alert-danger";
        answer.innerText = "Veuillez remplir correctement tous les champs.";
        answer.hidden = false;
    }
});
