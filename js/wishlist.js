function addToWishlist(name) {

    let wishlist =
        JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];

    wishlist.push(name);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    alert(name + " added to wishlist");
}