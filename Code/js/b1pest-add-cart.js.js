function addAndRedirect(title, image, price) {

    let cartItems =
        JSON.parse(localStorage.getItem("cartItems"))
        || [];

    // CHECK PRODUCT ALREADY EXISTS
    let existingProduct =
        cartItems.find(item => item.title === title);

    if (existingProduct) {

        existingProduct.qty += 1;

    } else {

        let product = {

            title: title,
            image: image,
            price: price,

            qty: 1,

            // IMPORTANT
            scrub: false,
            wash: false,

            // TYPE
            category: "pest"

        };

        cartItems.push(product);
    }

    localStorage.setItem(
        "cartItems",
        JSON.stringify(cartItems)
    );

    // alert(title + " Added To Cart");

    window.location.href =
        "cart-page.html";
}