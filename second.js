// Initialize or retrieve cart count from localStorage
let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;

// Function to update cart number in the navbar
function updateNavbarCart() {
  const cartBadge = document.getElementById('cart-count');
  if (cartBadge) {
    cartBadge.textContent = cartCount;
  }
}

// Function to handle adding item to cart
function addToCart() {
  cartCount++;
  localStorage.setItem('cartCount', cartCount);
  updateNavbarCart();

  // Optional: Show "added to cart" confirmation if element exists
  const confirmMessage = document.getElementById('cartConfirm');
  if (confirmMessage) {
    confirmMessage.classList.remove('d-none');
    setTimeout(() => confirmMessage.classList.add('d-none'), 2000);
  }
}

// Attach event listener on load
document.addEventListener('DOMContentLoaded', () => {
  updateNavbarCart();

  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });
});
