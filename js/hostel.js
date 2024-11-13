let selectedPrice;

function bookNow(hostelName, price) {
    document.getElementById('checkin').value = '';
    document.getElementById('checkout').value = '';
    document.getElementById('people').value = '1';
    document.getElementById('price-details').textContent = '';
    document.getElementById('payment-method').value = 'credit-card';

    selectedPrice = price;
    document.getElementById('hostel-name').textContent = `Booking: ${hostelName} - $${price} per night`;
    document.getElementById('paymentModal').style.display = "flex";
}

function closeModal() {
    document.getElementById('paymentModal').style.display = "none";
}

function submitBooking() {
    const checkinDate = document.getElementById('checkin').value;
    const checkoutDate = document.getElementById('checkout').value;
    const peopleCount = document.getElementById('people').value;
    const paymentMethod = document.getElementById('payment-method').value;

    if (checkinDate && checkoutDate && peopleCount && paymentMethod) {
        alert(`Booking Confirmed! You have booked ${peopleCount} people at the hostel. Payment via ${paymentMethod}.`);
        closeModal();
    } else {
        alert("Please fill out all fields.");
    }
}

function searchHostel() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const hostels = document.querySelectorAll('.card');

    hostels.forEach(hostel => {
        const name = hostel.getAttribute('data-name').toLowerCase();
        const description = hostel.getAttribute('data-description').toLowerCase();

        if (name.includes(query) || description.includes(query)) {
            hostel.style.display = '';
        } else {
            hostel.style.display = 'none';
        }
    });
}


function goHome() {
    window.location.href = 'frontpage.html';
}