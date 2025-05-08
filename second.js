function showProductDetails(title, price, description, imageUrl, sizes) {
  document.getElementById('productModalLabel').innerText = title;
  document.getElementById('productPrice').innerText = price;
  document.getElementById('productDescription').innerText = description;
  document.getElementById('modalProductImage').src = imageUrl;

  const sizeContainer = document.getElementById('productSizes');
  sizeContainer.innerHTML = ''; // Clear previous sizes

  sizes.forEach(size => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-outline-secondary';
    btn.innerText = size;
    btn.onclick = () => alert(`Selected size: ${size}`);
    sizeContainer.appendChild(btn);
  });

  const modal = new bootstrap.Modal(document.getElementById('productModal'));
  modal.show();
}
