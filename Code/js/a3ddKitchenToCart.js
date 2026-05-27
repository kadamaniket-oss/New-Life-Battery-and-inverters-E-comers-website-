// KITCHEN CLEANING
function addKitchenToCart() {

    let kitchenType =
        document.getElementById("kitchenType");

    let selectedOption =
        kitchenType.options[kitchenType.selectedIndex];

    let selectedText =
        selectedOption.text;

    let price =
        parseInt(kitchenType.value);

    let title =
        "Kitchen Cleaning - " + selectedText;

    let image =
        "./images/resource/flat01.jpg";

    let cartItems =
        JSON.parse(localStorage.getItem("cartItems"))
        || [];

    // CHECK EXISTING PRODUCT
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

            // EXTRA OPTIONS
            scrub: false,
            wash: false,

            // CATEGORY
            category: "cleaning"

        };

        cartItems.push(product);

    }

    localStorage.setItem(
        "cartItems",
        JSON.stringify(cartItems)
    );

    window.location.href =
        "cart-page.html";
}



// BATHROOM CLEANING
function addBathroomToCart() {

    let bathroomType =
        document.getElementById("bathroomType");

    let selectedOption =
        bathroomType.options[bathroomType.selectedIndex];

    let selectedText =
        selectedOption.text;

    let price =
        parseInt(bathroomType.value);

    let title =
        "Bathroom Cleaning - " + selectedText;

    let image =
        "./images/resource/washroom1.jpg";

    let cartItems =
        JSON.parse(localStorage.getItem("cartItems"))
        || [];

    // CHECK EXISTING PRODUCT
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

            // EXTRA OPTIONS
            scrub: false,
            wash: false,

            // CATEGORY
            category: "cleaning"

        };

        cartItems.push(product);

    }

    localStorage.setItem(
        "cartItems",
        JSON.stringify(cartItems)
    );

    window.location.href =
        "cart-page.html";
}