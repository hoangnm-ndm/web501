import getProducts from "../../apis/product.api";

const AdminPage = async () => {
  const products = await getProducts();
  function deleteProduct(id) {
    console.log(id);
  }
  return `
  <div>
  ${products
    .map(
      (product) => `
      <div>${product.name}</div>
      <button onclick="deleteProduct(${product.id})">Delete</button>
  `
    )
    .join("")}
  </div>
  `;
};

export default AdminPage;
