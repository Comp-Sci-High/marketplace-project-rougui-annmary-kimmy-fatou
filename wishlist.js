function transcribeRecording(filename) {
  let transcript = "";

  switch (filename) {
    case 'recording1.mp3':
      transcript = "I wish I had some better shoes and a warm blanket.";
      break;
    case 'recording2.mp3':
      transcript = "Books about faith and some new socks would be nice.";
      break;
    default:
      transcript = "No transcription available.";
  }

  const section = document.getElementById('transcriptSection');
  section.classList.remove('d-none');

  setTimeout(() => {
    section.classList.add('show');
  }, 10);

  document.getElementById('transcriptText').textContent = transcript;

  const audioPlayer = document.getElementById('audioPlayer');
  const audioSource = document.getElementById('audioSource');
  audioSource.src = `audio/${filename}`;
  audioPlayer.load();
  audioPlayer.play();

  suggestItemsFromTranscript(transcript);
}

function suggestItemsFromTranscript(transcript) {
  const suggestions = [];

  if (transcript.toLowerCase().includes("shoes")) {
    suggestions.push({
      name: "Comfort Sneakers",
      price: "$39.99",
      img: "https://cdn-icons-png.flaticon.com/512/2917/2917242.png"
    });
  }

  if (transcript.toLowerCase().includes("blanket")) {
    suggestions.push({
      name: "Warm Fleece Blanket",
      price: "$25.00",
      img: "https://cdn-icons-png.flaticon.com/512/4003/4003892.png"
    });
  }

  if (transcript.toLowerCase().includes("book") || transcript.toLowerCase().includes("faith")) {
    suggestions.push({
      name: "Inspirational Book",
      price: "$12.00",
      img: "https://cdn-icons-png.flaticon.com/512/1670/1670046.png"
    });
  }

  if (transcript.toLowerCase().includes("sock")) {
    suggestions.push({
      name: "Cotton Socks (3-Pack)",
      price: "$8.99",
      img: "https://cdn-icons-png.flaticon.com/512/3100/3100716.png"
    });
  }

  displaySuggestions(suggestions);
}

function displaySuggestions(suggestions) {
  const container = document.getElementById('suggestedItems');
  container.innerHTML = '';

  if (suggestions.length === 0) {
    container.innerHTML = "<p class='text-muted'>No suggested items found from the audio.</p>";
    return;
  }

  suggestions.forEach(product => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <img src="${product.img}" class="card-img-top p-3" style="height: 200px; object-fit: contain;" alt="${product.name}">
          <div class="card-body text-center">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.price}</p>
            <button class="btn btn-outline-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
  });

  // Attach click listeners to Add to Cart buttons
  const buttons = container.querySelectorAll(".btn");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      incrementCartCount();
    });
  });
}

// LocalStorage cart count logic
function updateCartDisplay() {
  const count = localStorage.getItem("cartCount") || 0;
  const cartBadge = document.getElementById("cart-count");
  if (cartBadge) {
    cartBadge.textContent = count;
  }
}

function incrementCartCount() {
  let count = parseInt(localStorage.getItem("cartCount") || "0");
  count += 1;
  localStorage.setItem("cartCount", count);
  updateCartDisplay();
}

// Initialize cart count on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartDisplay();
});
