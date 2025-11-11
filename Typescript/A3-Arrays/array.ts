interface Product {
  pId: number;
  productName: string;
  productPrice: number;
  productAvailable: boolean;
  imageUrl: string;
  productDescription: string;
}

const productList: Product[] = [
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

function renderProducts(): void {
  productList.forEach((product, index) => {
    const nameEl = document.getElementById(`pName${index}`);
    const priceEl = document.getElementById(`pPrice${index}`);
    const availableEl = document.getElementById(`pAvailable${index}`);
    const imgEl = document.getElementById(`img${index + 1}`) as HTMLImageElement;

    if (nameEl) nameEl.textContent = product.productName;
    if (priceEl) priceEl.textContent = product.productPrice.toString();
    if (availableEl) availableEl.textContent = product.productAvailable ? "In Stock" : "Out of Stock";
    if (imgEl) imgEl.src = `./images/${product.imageUrl}`;
  });
}

window.onload = renderProducts;