const Products = async () => {
  try {
    const res = await fetch("http://localhost:3000/products", {
      method: "GET",
    });
    // console.log(res);
    const products = await res.json();
    // console.log(products);
    return `${products.map((product) => `<div>${product.name}</div>`).join("")}
    `;
  } catch (error) {
    console.log(error);
  }
};

export default Products;
