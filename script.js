const data = {
  "Café de Olla": {
    description: "Spiced Mexican clay pot coffee, traditionally brewed with cinnamon and piloncillo.",
    reviews: ["Amazing flavor!", "Perfect for winter mornings.", "Authentic and strong."]
  },
  "Italian Espresso": {
    description: "Strong single shot of espresso brewed under high pressure.",
    reviews: ["Super strong!", "Exactly like Italian cafes.", "Best energy booster."]
  },
  "Japanese Iced Coffee": {
    description: "Drip coffee brewed directly over ice for a smooth, crisp taste.",
    reviews: ["Refreshing and light.", "Perfect summer drink.", "Not too bitter, just right."]
  },
  "Flat White": {
    description: "Espresso with silky microfoam milk, smoother than a latte.",
    reviews: ["Very creamy!", "Great balance of coffee and milk.", "Best choice after lunch."]
  },
  "Saudi Gahwa": {
    description: "Light coffee infused with cardamom, dates often served alongside.",
    reviews: ["Very unique taste.", "Fragrant and light.", "Love the spices!"]
  }
};

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const name = card.dataset.name;
    document.getElementById('modalTitle').innerText = name;
    document.getElementById('modalDescription').innerText = data[name].description;
    
    const reviewsList = document.getElementById('modalReviews');
    reviewsList.innerHTML = '';
    data[name].reviews.forEach(review => {
      const li = document.createElement('li');
      li.textContent = "• " + review;
      reviewsList.appendChild(li);
    });

    document.getElementById('modal').style.display = 'block';
  });
});

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

window.onclick = function(event) {
  if (event.target === document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none';
  }
};
