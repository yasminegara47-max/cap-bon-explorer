var searchBox = document.getElementById("searchBox");
var cards = document.getElementsByClassName("activity-card");
var buttons = document.querySelectorAll("#filters button");
var counter = document.getElementById("counter");
var emptyMessage = document.getElementById("emptyMessage");
var category = "Toutes";

function showActivities() {
    var word = searchBox.value.toLowerCase();
    var count = 0;

    for (var i = 0; i < cards.length; i++) {
        var cardCategory = cards[i].getAttribute("data-category");
        var cardText = cards[i].getAttribute("data-search");

        if ((category == "Toutes" || category == cardCategory) && cardText.includes(word)) {
            cards[i].style.display = "block";
            count++;
        } else {
            cards[i].style.display = "none";
        }
    }

    counter.innerText = count;
    emptyMessage.hidden = count != 0;
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        category = this.getAttribute("data-category");

        for (var j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove("choisi");
        }

        this.classList.add("choisi");
        showActivities();
    });
}

searchBox.addEventListener("input", showActivities);

document.getElementById("activityModal").addEventListener("show.bs.modal", function (event) {
    var button = event.relatedTarget;
    document.getElementById("modalTitle").innerText = button.getAttribute("data-title");
    document.getElementById("modalInfo").innerText = button.getAttribute("data-category") + " - " + button.getAttribute("data-place") + " - " + button.getAttribute("data-duration") + " - " + button.getAttribute("data-price") + " TND par personne";
    document.getElementById("modalText").innerText = button.getAttribute("data-description");
});

showActivities();
