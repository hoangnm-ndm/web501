import { products } from "../data_fake/datas";

export async function GetProductsList() {
  const response = await fetch("http://localhost:3000/products", {
    method: "GET",
  });
  const products = await response.json();
  console.log(products);
}

const ProductsList = () => `
<div>

  ${products
    .map((product) => `<li class="product-item">${product.name}</li>`)
    .join(" ")}
</div>
`;

export default ProductsList;
