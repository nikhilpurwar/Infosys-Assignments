var ProductList = [
    {
        pId: 101,
        productName: "Samsung Galaxy Note 7",
        productPrice: 59000,
        productAvailable: true,
        productDiscount: "10%",
        imageUrl: "SamsungGalaxy_Gold.JPG",
        productDescription: "Samsung Galaxy Note 7 is a stylish mobile with 64GB memory.",
    },
    {
        pId: 102,
        productName: "Samsung Edge Silver",
        productPrice: 45000,
        productAvailable: false,
        productDiscount: "5%",
        imageUrl: "samsung_edge_silver.JPG",
        productDescription: "Samsung Edge Silver with sleek design and powerful performance.",
    },
    {
        pId: 103,
        productName: "Lumia 640 XL",
        productPrice: 32000,
        productAvailable: true,
        productDiscount: "15%",
        imageUrl: "lumia_640xl.jpg",
        productDescription: "Lumia 640 XL with Windows OS and long battery life.",
    },
];
// 🧠 Function with default and optional parameters
function getMobileDetails(productName, productId) {
    if (productName === void 0) { productName = "Samsung Galaxy Note 7"; }
    var filteredList = ProductList.filter(function (product) {
        return product.productName === productName || product.pId === productId;
    });
    if (filteredList.length > 0) {
        localStorage.setItem("Product", JSON.stringify(filteredList[0]));
        window.location.href = "ProductDetail.html";
    }
    else {
        alert("Product not found!");
    }
}
// 🖼️ Render product list on home page
window.onload = function () {
    ProductList.forEach(function (product, index) {
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
};
