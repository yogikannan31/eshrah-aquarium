function searchProducts() {

    const input =
        document.getElementById("search-input");

    if (!input) return;

    const value =
        input.value.toLowerCase();

    const products =
        document.querySelectorAll(
            ".product-card"
        );

    products.forEach(card => {

        const title =
            card.querySelector("h2")
            .innerText
            .toLowerCase();

        if (title.includes(value)) {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }

    });
}