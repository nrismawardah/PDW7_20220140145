document.addEventListener('DOMContentLoaded', function() {
    const placeOrderBtn = document.getElementById('placeOrderBtn'); // Mendapatkan referensi tombol "Place Order"

    placeOrderBtn.addEventListener('click', function() {
        alert('Your order has been placed successfully!'); // Menampilkan alert saat tombol "Place Order" ditekan
    });
});  