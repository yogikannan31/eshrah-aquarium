function addToCart(name, price, image = "") {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name,
        price,
        image,
        quantity: 1
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();

    alert(name + " added to cart");
}

function updateCartCount() {

    const cart = JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    const countElement =
        document.getElementById("cart-count");

    if (countElement) {
        countElement.innerText = cart.length;
    }
}

document.addEventListener(
    "DOMContentLoaded",
    updateCartCount
);