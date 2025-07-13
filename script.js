const data = {
  "Café de Olla": {
    description: "Traditional Mexican coffee spiced with cinnamon and piloncillo.",
    reviews: ["Great aroma!", "Authentic taste.", "Best served hot."]
  },
  "Italian Espresso": {
    description: "A bold, rich espresso served in a small shot.",
    reviews: ["Strong and smooth.", "Great energy boost!", "Pure Italian vibes."]
  },
  "Masala Chai": {
    description: "Spicy Indian milk tea with ginger, cardamom, and clove.",
    reviews: ["Warm and spicy!", "Just like home.", "Loved it!"]
  },
  "Green Tea": {
    description: "Light, antioxidant-rich tea, great for detox.",
    reviews: ["Very refreshing.", "Healthy choice.", "Soothing flavor."]
  },
  "French Fries": {
    description: "Crispy golden fries with a dash of salt.",
    reviews: ["Crispy!", "Loved it with ketchup.", "Simple and classic."]
  },
  "Burger": {
    description: "Juicy patty with lettuce, tomato, and cheese in a bun.",
    reviews: ["Delicious!", "Good portion size.", "Could eat every day."]
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
