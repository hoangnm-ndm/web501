import "./style.css";
import Navigo from "navigo";
import HomePage from "./src/pages/HomePage";
import AboutPage from "./src/pages/AboutPage";
import Products from "./src/pages/Products";
import AdminPage from "./src/pages/admin/AdminPage";

const router = new Navigo("/", { linksSelector: "a" });
const app = document.getElementById("app");

router.on("/home", () => render(app, HomePage));
router.on("/about", () => render(app, AboutPage));
router.on("/products", () => render(app, Products));
router.on("/admin", () => render(app, AdminPage));
router.resolve();

function render(target, content) {
  target.innerHTML = content();
}
