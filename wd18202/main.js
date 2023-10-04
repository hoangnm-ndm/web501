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

// const myPromise = new Promise((resolve, reject) => {});

// myPromise()
//   .then()
//   // Xu ly cong viec khi loi hua duoc thuc hien

//   .catch()
//   // Xu ly loi

//   .finally();
// xu ly trong tat ca cac truong hop!

// async function thucThiLoiHua() {
//   try {
//     // Cố thử thực hiện, không thực hiện được thì bị chuyển sang catch
//     const responsive = await myPromise;
//     if (!responsive) {
//       throw new Error("O day co loi!");
//       // Tất cả những gì sau throw cũng giống sau return, không được thực hiện
//       console.log("hihi");
//     }

//     return;
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function getProduct () {
//   return;
// }

router.on("/home", () => render(app, HomePage));
router.on("/", () => router.navigate("/home"));
router.on("/about", () => render(app, AboutPage));
router.on("/products", () => render(app, Products));
router.on("/admin", () => render(app, AdminPage));
router.resolve();
