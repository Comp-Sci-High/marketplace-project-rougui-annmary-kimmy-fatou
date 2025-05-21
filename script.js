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
