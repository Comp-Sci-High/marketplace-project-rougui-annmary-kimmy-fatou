// When the page loads
document.addEventListener('DOMContentLoaded', () => {
  let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;

  // Update cart badge
  const cartBadge = document.getElementById('cart-count');
  if (cartBadge) {
    cartBadge.textContent = cartCount;
  }

  // Set up click events for "Add to Cart" buttons
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      cartCount++;
      localStorage.setItem('cartCount', cartCount);
      cartBadge.textContent = cartCount;

      // Optional: confirmation message
      const confirmMessage = document.getElementById('cartConfirm');
      if (confirmMessage) {
        confirmMessage.classList.remove('d-none');
        setTimeout(() => confirmMessage.classList.add('d-none'), 2000);
      }
    });
  });
});

let cartCount = 0;

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn-outline-primary');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      cartCount++;
      document.getElementById('cart-count').textContent = cartCount;
    });
  });
});


