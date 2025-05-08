// Called when user clicks on a recording to "transcribe"
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

    // Reveal the transcript + audio section
    const section = document.getElementById('transcriptSection');
    section.classList.remove('d-none'); // Reveal the section
  
    // Fade in effect using the Bootstrap 'show' class
    setTimeout(() => {
      section.classList.add('show');
    }, 10);  // Small delay to trigger fade-in effect
  
    // Update the transcript text
    document.getElementById('transcriptText').textContent = transcript;
  
    // Load and play the correct audio
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');
    audioSource.src = `audio/${filename}`;  // Adjust path as needed
    audioPlayer.load();
    audioPlayer.play();
  
    // Show suggestions
    suggestItemsFromTranscript(transcript);
}
  
  // Parses transcript and matches to product suggestions
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
  
  // Injects product cards into the HTML
  
// Injects product cards into the HTML
function displaySuggestions(suggestions) {
    const container = document.getElementById('suggestedItems');
    container.innerHTML = ''; // Clear previous suggestions
  
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
  }

 
  