interface Product {
  pId: number;
  productName: string;
  productPrice: number;
  productAvailable: boolean;
  productDiscount: string;
  imageUrl: string;
  productDescription: string;
}

const ProductList: Product[] = [
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

function getMobileDetails(productName: string = "Samsung Galaxy Note 7", productId?: number): void {
  const filteredList = ProductList.filter(
    (product) =>
      product.productName === productName || product.pId === productId
  );

  if (filteredList.length > 0) {
    localStorage.setItem("Product", JSON.stringify(filteredList[0]));
    window.location.href = "ProductDetail.html";
  } else {
    alert("Product not found!");
  }
}

window.onload = () => {
  ProductList.forEach((product, index) => {
    const nameEl = document.getElementById(`pName${index}`);
    const priceEl = document.getElementById(`pPrice${index}`);
    const availableEl = document.getElementById(`pAvailable${index}`);
    const imgEl = document.getElementById(`img${index + 1}`) as HTMLImageElement;

    if (nameEl) nameEl.textContent = product.productName;
    if (priceEl) priceEl.textContent = product.productPrice.toString();
    if (availableEl) availableEl.textContent = product.productAvailable ? "In Stock" : "Out of Stock";
    if (imgEl) imgEl.src = `./images/${product.imageUrl}`;
  });
};