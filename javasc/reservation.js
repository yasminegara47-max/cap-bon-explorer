var form = document.getElementById("bookingForm");
var activity = document.getElementById("activity");
var people = document.getElementById("people");
var date = document.getElementById("visitDate");

function calculatePrice() {
    var price = Number(activity.value);
    var number = Number(people.value);
    var subtotal = price * number;
    var discount = 0;

    if (number >= 4) {
        discount = subtotal * 0.10;
    }

    document.getElementById("unitPrice").innerText = price + " TND";
    document.getElementById("subtotal").innerText = subtotal + " TND";
    document.getElementById("discount").innerText = discount + " TND";
    document.getElementById("total").innerText = (subtotal - discount) + " TND";
}

activity.addEventListener("change", calculatePrice);
people.addEventListener("input", calculatePrice);
document.getElementById("calculateButton").addEventListener("click", calculatePrice);

form.addEventListener("submit", function (event) {
    event.preventDefault();

    var error = "";
    var today = new Date().toISOString().split("T")[0];
    var number = Number(people.value);

    if (document.getElementById("lastName").value == "" || document.getElementById("firstName").value == "") {
        error = "Veuillez saisir votre nom et votre prenom.";
    } else if (!document.getElementById("email").checkValidity()) {
        error = "Veuillez saisir une adresse e-mail valide.";
    } else if (document.getElementById("phone").value == "") {
        error = "Veuillez saisir votre telephone.";
    } else if (activity.value == "") {
        error = "Veuillez choisir une activite.";
    } else if (date.value == "" || date.value < today) {
        error = "Veuillez choisir une date valide.";
    } else if (!Number.isInteger(number) || number < 1 || number > 6 || people.value == "") {
        error = "Le nombre de participants doit etre entre 1 et 6.";
    }

    if (error != "") {
        document.getElementById("formError").innerText = error;
        document.getElementById("formError").hidden = false;
        document.getElementById("summary").hidden = true;
    } else {
        calculatePrice();
        document.getElementById("formError").hidden = true;
        document.getElementById("summaryActivity").innerText = activity.options[activity.selectedIndex].text;
        document.getElementById("summaryDate").innerText = date.value;
        document.getElementById("summaryPeople").innerText = number;
        document.getElementById("summaryTotal").innerText = document.getElementById("total").innerText;
        document.getElementById("summary").hidden = false;
    }
});

form.addEventListener("reset", function () {
    document.getElementById("formError").hidden = true;
    document.getElementById("summary").hidden = true;
    setTimeout(calculatePrice, 0);
});
