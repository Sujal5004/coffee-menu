const data = {
  "Café de Olla": {
    description: "Spiced Mexican clay pot coffee, traditionally brewed with cinnamon and piloncillo.",
    reviews: ["Authentic and warm!", "Loved the aroma.", "Perfect for winter."]
  },
  "Italian Espresso": {
    description: "Strong single shot of espresso brewed under high pressure.",
    reviews: ["Bold flavor.", "Very energizing.", "Tastes like Italy!"]
  },
  "Flat White": {
    description: "Espresso with microfoam milk — smoother than latte.",
    reviews: ["Smooth and creamy.", "Perfect balance.", "Mild yet flavorful."]
  },
  "Masala Chai": {
    description: "Traditional Indian tea with milk, spices, and herbs.",
    reviews: ["Spicy and sweet!", "Very comforting.", "My favorite morning tea."]
  },
  "Green Tea": {
    description: "A calming and healthy tea rich in antioxidants.",
    reviews: ["Light and fresh.", "Very relaxing.", "Great after meals."]
  },
  "French Fries": {
    description: "Crispy golden fries served with tomato ketchup.",
    reviews: ["Perfectly crispy!", "Couldn’t stop eating.", "Classic snack."]
  },
  "Burger": {
    description: "Juicy grilled patty in a fresh bun with toppings.",
    reviews: ["So juicy!", "Best burger I’ve had.", "Very filling."]
  },
  "Pizza": {
    description: "Hot cheesy pizza with rich toppings and herbs.",
    reviews: ["Melts in your mouth.", "Cheesy goodness!", "Super delicious."]
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
