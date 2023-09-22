import "./style.css";
import { router, render } from "./src/common/router";
import HomePage from "./src/pages/HomePage";
import AboutPage from "./src/pages/AboutPage";
import Products from "./src/pages/Products";
import AdminPage from "./src/pages/admin/AdminPage";
import UpdateProduct from "./src/pages/admin/UpdateProduct";
const app = document.getElementById("app");

const updateProduct = (productId) => {
  // Chuyển hướng sang trang cập nhật sản phẩm
  router.navigate(`/update-product/${productId}`);
};

router.on("/home", () => render(app, HomePage));
router.on("/about", () => render(app, AboutPage));
router.on("/products", () => render(app, Products));
router.on("/update-product/:id", ({ id }) => {
  // Lấy id sản phẩm cần cập nhật từ đường dẫn
  const productId = parseInt(id, 10);

  // Hiển thị trang cập nhật sản phẩm
  render(app, () => UpdateProduct(productId));
});
router.on("/admin", () => render(app, AdminPage));
router.resolve();
