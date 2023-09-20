import "./style.css";
import Navigo from "navigo";
import HomePage from "./src/pages/HomePage";
import AboutPage from "./src/pages/AboutPage";
import Products from "./src/pages/Products";
import AdminPage from "./src/pages/admin/AdminPage";

// document.querySelector("#app").innerHTML = `
//   <div>
//    Xin chao cac ban!
//   </div>
// `;

/**
 * Home Page, About Page, Contact Page, Admin Page...
 *
 */
// const Welcome = () => {
//   return `<div>Xin chao cac ban!</div>`;
// };

/**
 * http://127.0.0.1:5137/about -> about page
 * "/contact" -> contact page
 */

const router = new Navigo("/");

router.on("/home", () => HomePage());
router.on("/about", () => AboutPage());
router.on("/products", () => Products());
router.on("/admin", () => AdminPage());
router.resolve();
const app = document.getElementById("app");
app.innerHTML = Products();
