function addAndRedirect(title, image, price, category = "battery") {

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    let existing = cartItems.find(item => item.title === title);

    if (existing) {
        existing.qty += 1;
    } else {
        cartItems.push({
            title: title,
            image: image,
            price: price,
            qty: 1,
            category: category
        });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    console.log("Cart Updated:", cartItems); // DEBUG

    window.location.href = "cart_page.html";
}