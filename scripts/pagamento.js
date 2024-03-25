function togglePaymentDetails(method) {
    var details = document.getElementById(method + '-details');
    var allDetails = document.querySelectorAll('.payment-details');

    allDetails.forEach(function(detail) {
        if (detail.id !== method + '-details') {
            detail.style.display = 'none';
        }
    });

    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}