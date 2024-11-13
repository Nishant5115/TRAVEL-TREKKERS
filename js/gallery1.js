function openModal(reviewId) {
      
    var reviews = document.querySelectorAll('.review');
    reviews.forEach(function(review) {
        review.style.display = 'none';
    });

    
    var selectedReview = document.getElementById(reviewId);
    if (selectedReview) {
        selectedReview.style.display = 'block';
    }

   
    document.getElementById('reviewModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('reviewModal').style.display = 'none';
    var reviews = document.querySelectorAll('.review');
    reviews.forEach(function(review) {
        review.style.display = 'none';
    });
}