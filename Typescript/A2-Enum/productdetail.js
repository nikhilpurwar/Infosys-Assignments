var mobileVariants = {
    gold: {
        name: "Gold Platinum",
        price: 799,
        available: "In Stock",
        discount: "10%",
    },
    pink: {
        name: "Pink Gold",
        price: 749,
        available: "Limited Stock",
        discount: "5%",
    },
    silver: {
        name: "Silver Titanium",
        price: 699,
        available: "Out of Stock",
        discount: "0%",
    },
};
function getMobileByColor(color) {
    var variant = mobileVariants[color];
    if (!variant)
        return;
    document.getElementById("pName").textContent = variant.name;
    document.getElementById("pPrice").textContent = variant.price.toString();
    document.getElementById("pAvailable").textContent = variant.available;
    document.getElementById("pDiscount").textContent = variant.discount;
}
window.onload = function () {
    document.getElementById("gold").textContent = mobileVariants.gold.price.toString();
    document.getElementById("pinkgold").textContent = mobileVariants.pink.price.toString();
    document.getElementById("silver").textContent = mobileVariants.silver.price.toString();
};
