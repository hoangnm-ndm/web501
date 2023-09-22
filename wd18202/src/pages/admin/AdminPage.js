import { router } from "../../common/router";
import { products } from "../../data_fake/datas";

const updateProduct = (productId) => {
  router.navigate(`/update-product/${productId}`);
};

const deleteProduct = (productId) => {
  // Tìm vị trí của sản phẩm cần xóa trong mảng products
  const productIndex = products.findIndex(
    (product) => product.id === productId
  );

  if (productIndex !== -1) {
    // Xóa sản phẩm khỏi mảng products
    products.splice(productIndex, 1);

    // Định nghĩa logic xóa sản phẩm ở đây
    console.log("Delete product with ID:", productId);
    // Thực hiện các hành động cần thiết sau khi xóa sản phẩm
  } else {
    console.log("Product not found with ID:", productId);
  }
};

const AdminPage = () => `
<div>
  ${products
    .map(
      (product) => `
        <li class="product-item">
          ${product.name}
          <button onclick="${() => updateProduct(product.id)}">Update</button>
          <button onclick="${() => deleteProduct(product.id)}">Delete</button>
        </li>`
    )
    .join(" ")}
</div>
`;

export default AdminPage;
