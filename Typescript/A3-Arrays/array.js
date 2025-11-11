var productList = [
    {
        pId: 432,
        productName: "Samsung Galaxy Note 7",
        productPrice: 59000,
        productAvailable: true,
        imageUrl: "SamsungGalaxy_Gold.JPG",
        productDescription: "Samsung Galaxy Note 7 is a stylish mobile with 64GB memory.",
    },
    {
        pId: 231,
        productName: "Samsung Edge Silver",
        productPrice: 45000,
        productAvailable: false,
        imageUrl: "samsung_edge_silver.JPG",
        productDescription: "Samsung Edge Silver with sleek design and powerful performance.",
    },
    {
        pId: 875,
        productName: "Lumia 640 XL",
        productPrice: 32000,
        productAvailable: true,
        imageUrl: "lumia_640xl.jpg",
        productDescription: "Lumia 640 XL with Windows OS and long battery life.",
    },
];
function renderProducts() {
    productList.forEach(function (product, index) {
        var nameEl = document.getElementById("pName".concat(index));
        var priceEl = document.getElementById("pPrice".concat(index));
        var availableEl = document.getElementById("pAvailable".concat(index));
        var imgEl = document.getElementById("img".concat(index + 1));
        if (nameEl)
            nameEl.textContent = product.productName;
        if (priceEl)
            priceEl.textContent = product.productPrice.toString();
        if (availableEl)
            availableEl.textContent = product.productAvailable ? "In Stock" : "Out of Stock";
        if (imgEl)
            imgEl.src = "./images/".concat(product.imageUrl);
    });
}
window.onload = renderProducts;
