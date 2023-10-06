import getProducts from "../apis/product.api";

const Products = async () => {
  try {
    const products = await getProducts();
    // console.log(products);
    return `${products
      .map(
        (product) => `
        <div class="card" style="width: 18rem;">
          <img src="${product.imgUrl}" class="card-img-top" alt="${
          product.name
        }">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">Giá: ${product.price || "Đang cập nhật"}</p>
            <p class="card-text">${product.desc || "Đang cập nhật"}</p>
            <a href="#" class="btn btn-primary">Thêm vào giỏ hàng</a>
          </div>
        </div>
        `
      )
      .join("")}
    `;
  } catch (error) {
    console.log(error);
  }
};

export default Products;
