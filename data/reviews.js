const reviews = [
  {
    name: "Priya",
    rating: 5,
    text: "Beautiful craftsmanship! The toy was exactly as shown."
  },
  {
    name: "Instagram Customer",
    rating: 5,
    text: "Loved the personal touch ❤️ Perfect gift."
  },
  {
    name: "WhatsApp Order",
    rating: 4,
    text: "Cute keychain, neat finishing."
  }
];

function renderReviews() {
  const container = document.getElementById("reviewsContainer");
  if (!container) return;

  container.innerHTML = "";

  reviews.forEach(r => {
    const stars =
      "★".repeat(r.rating) +
      "☆".repeat(5 - r.rating);

    const card = document.createElement("div");
    card.className =
      "min-w-[240px] bg-white rounded-2xl p-4 shadow";

    card.innerHTML = `
      <div class="text-yellow-500 text-sm mb-1">${stars}</div>
      <p class="text-sm text-gray-700">${r.text}</p>
      <p class="text-xs text-gray-500 mt-2">— ${r.name}</p>
    `;

    container.appendChild(card);
  });
}

// Auto-run when page loads
document.addEventListener("DOMContentLoaded", renderReviews);
