import "./style.css";
import tenDathaydoi from "./src/pages/HomePage";
import AboutPage from "./src/pages/AboutPage";
import { Welcome as NickName, Welcome2 } from "./src/pages/HomePage";
import ProductsList from "./src/pages/Products";

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

const app = document.getElementById("app");
app.innerHTML = ProductsList();
