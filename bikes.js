// Bike Filter Functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const bikeCards = document.querySelectorAll(".bike-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        const filter = button.getAttribute("data-filter");
        bikeCards.forEach((card) => {
            const category = card.getAttribute("data-category");
            if (filter === "all" || category === filter) {
                card.style.display = "block";
                card.classList.add("animate__fadeIn");
            } else {
                card.style.display = "none";
            }
        });
    });
});