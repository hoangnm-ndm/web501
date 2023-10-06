import "./style.css";
import "./node_modules/bootstrap/dist/js/bootstrap";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigo from "navigo";
import HomePage from "./src/pages/HomePage";
import AboutPage from "./src/pages/AboutPage";
import Products from "./src/pages/Products";
import AdminPage from "./src/pages/admin/AdminPage";

const router = new Navigo("/", { linksSelector: "a" });
const app = document.getElementById("app");

const render = async (target, content) => {
  // Đặt await trước các promise
  target.innerHTML = await content();
};

router.on("/home", () => render(app, HomePage));
router.on("/", () => router.navigate("/home"));
router.on("/about", () => render(app, AboutPage));
router.on("/products", () => render(app, Products));
router.on("/admin", () => render(app, AdminPage));
router.resolve();
