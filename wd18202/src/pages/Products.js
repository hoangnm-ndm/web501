import { products } from "../data_fake/datas";

const ProductsList = () => `
<div>
  ${products
    .map((product) => `<li class="product-item">${product.name}</li>`)
    .join(" ")}
</div>
`;

export default ProductsList;
