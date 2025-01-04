function toggleCard(card) {
    const fullContent = card.querySelector('.card-full-content');
    if (fullContent.style.display === "none" || fullContent.style.display === "") {
        fullContent.style.display = "block"; // Show full content
    } else {
        fullContent.style.display = "none"; // Hide full content
    }
}
