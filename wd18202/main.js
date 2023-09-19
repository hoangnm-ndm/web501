import "./style.css";
import HomePage from "./src/pages/HomePage";
import AboutPage from "./src/pages/AboutPage";

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
app.innerHTML = HomePage();
