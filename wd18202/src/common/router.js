import Navigo from "navigo";
const router = new Navigo("/", { linksSelector: "a" });

function render(target, content) {
  target.innerHTML = content();
}

export { router, render };
