function bookNow(packageName) {
    document.getElementById("paymentModal").style.display = "flex";
}

function confirmBooking() {
    document.getElementById("paymentModal").style.display = "none";
    document.getElementById("confirmationModal").style.display = "flex";
}

function closeConfirmation() {
    document.getElementById("confirmationModal").style.display = "none";
}


window.onclick = function(event) {
    if (event.target == document.getElementById("paymentModal")) {
        document.getElementById("paymentModal").style.display = "none";
    } else if (event.target == document.getElementById("confirmationModal")) {
        document.getElementById("confirmationModal").style.display = "none";
    }
}