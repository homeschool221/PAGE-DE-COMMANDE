let cartCount = 0;

// Get the cart count display element
const cartCountElement = document.getElementById('cart-count');

// Get all order buttons and cancel buttons
const orderButtons = document.querySelectorAll('.orderButton');
const cancelButtons = document.querySelectorAll('.cancelButton');

// Add event listeners to all order buttons
orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++; // Increment the cart counter
        cartCountElement.textContent = cartCount;
    });
});

// Add event listeners to all cancel buttons
cancelButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (cartCount > 0) {
            cartCount--; // Decrement the cart counter
            cartCountElement.textContent = cartCount;
        }
    });
});
