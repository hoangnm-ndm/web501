const getProducts = async () => {
  const res = await fetch("http://localhost:3000/products", {
    method: "GET",
  });
  const products = await res.json();
  return products;
};

export default getProducts;
