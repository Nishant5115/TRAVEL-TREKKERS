document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const departure = document.getElementById('departure').value;
    const returnDate = document.getElementById('return').value;
    const passengers = document.getElementById('passengers').value;
    const busClass = document.getElementById('class').value;
    const payment = document.getElementById('payment').value;

    // Removed booking details HTML
    alert('Bus Ticket Booking Successful!');
});