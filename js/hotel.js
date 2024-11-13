let selectedPrice;

function bookNow(hotelName, price) {
   
    document.getElementById('checkin').value = '';
    document.getElementById('checkout').value = '';
    document.getElementById('people').value = '1';
    document.getElementById('price-details').textContent = '';
    document.getElementById('payment-method').value = 'credit-card';
    
    
    selectedPrice = price;
    document.getElementById('hotel-name').textContent = `Booking: ${hotelName} - $${price} per night`;
    document.getElementById('paymentModal').style.display = "flex";
}

function closeModal() {
    document.getElementById('paymentModal').style.display = "none";
}

function submitBooking() {
    const checkinDate = document.getElementById('checkin').value;
    const checkoutDate = document.getElementById('checkout').value;
    const numberOfPeople = document.getElementById('people').value;

    if (!checkinDate || !checkoutDate) {
        alert("Please select both check-in and check-out dates.");
        return;
    }

    const days = Math.floor((new Date(checkoutDate) - new Date(checkinDate)) / (1000 * 3600 * 24));
    const totalCost = selectedPrice * days * numberOfPeople;
    const paymentMethod = document.getElementById('payment-method').value;

    document.getElementById('price-details').textContent = `Total: $${totalCost} (${days} nights, ${numberOfPeople} people)`;
    
    alert(`Booking confirmed! Total cost: $${totalCost}. Payment Method: ${paymentMethod}`);
    closeModal();
}

function searchAccommodation() {
const searchValue = document.getElementById('searchBar').value.toLowerCase();
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
const name = card.getAttribute('data-name').toLowerCase();
const description = card.getAttribute('data-description').toLowerCase();
const location = card.querySelector('p:nth-of-type(2)').textContent.toLowerCase(); 


if (name.includes(searchValue) || description.includes(searchValue) || location.includes(searchValue)) {
    card.style.display = 'block'; 
} else {
    card.style.display = 'none';
}
});
}