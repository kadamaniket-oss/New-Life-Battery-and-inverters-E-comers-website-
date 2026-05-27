function addUndergroundTankToCart() {

    let select =
        document.getElementById("undergroundTankType");

    let selectedText =
        select.options[select.selectedIndex].text;

    let price =
        parseInt(select.value);

    let title =
        "Underground Tank Cleaning - " +
        selectedText;

    let cartItems =
        JSON.parse(localStorage.getItem("cartItems"))
        || [];

    let existingProduct =
        cartItems.find(item => item.title === title);

    if (existingProduct) {

        existingProduct.qty += 1;

    } else {

        let product = {

            title: title,

            image:
                "../HomeCare/images/resource/tank2.jpg",

            price: price,

            qty: 1,

            category: "waterTank"

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

function addLoftTankToCart() {

    let select =
        document.getElementById("loftTankType");

    let selectedText =
        select.options[select.selectedIndex].text;

    let price =
        parseInt(select.value);

    let title =
        "Loft Tank Cleaning - " +
        selectedText;

    let cartItems =
        JSON.parse(localStorage.getItem("cartItems"))
        || [];

    let existingProduct =
        cartItems.find(item => item.title === title);

    if (existingProduct) {

        existingProduct.qty += 1;

    } else {

        let product = {

            title: title,

            image:
                "../HomeCare/images/resource/tank8.jpg",

            price: price,

            qty: 1,

            category: "waterTank"

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



function addOverheadTankToCart() {

    let select =
        document.getElementById("overheadTankType");

    let selectedText =
        select.options[select.selectedIndex].text;

    let price =
        parseInt(select.value);

    let title =
        "Overhead Tank Cleaning - " +
        selectedText;

    let cartItems =
        JSON.parse(localStorage.getItem("cartItems"))
        || [];

    let existingProduct =
        cartItems.find(item => item.title === title);

    if (existingProduct) {

        existingProduct.qty += 1;

    } else {

        let product = {

            title: title,

            image:
                "../HomeCare/images/resource/tank7.jpg",

            price: price,

            qty: 1,

            category: "waterTank"

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