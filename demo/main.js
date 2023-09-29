const productList = document.getElementById("product-list");
const productForm = document.getElementById("productForm");
const productFormContent = document.getElementById("productFormContent");

function fetchData() {
  fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data) => {
      renderProductList(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function renderProductList(products) {
  productList.innerHTML = "";
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} <button onclick="editProduct(${product.id})">Edit</button> <button onclick="deleteProduct(${product.id})">Delete</button>`;
    productList.appendChild(li);
  });
}

function addProduct(event) {
  event.preventDefault();
  const productName = document.getElementById("productName").value;
  fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: productName }),
  })
    .then((response) => response.json())
    .then(() => {
      fetchData();
      closeForm();
    })
    .catch((error) => console.error("Error adding product:", error));
}

function editProduct(id) {
  const productName = prompt("Enter the new product name:");
  if (productName !== null) {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: productName }),
    })
      .then((response) => response.json())
      .then(() => {
        fetchData();
      })
      .catch((error) => console.error("Error editing product:", error));
  }
}

function deleteProduct(id) {
  fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      fetchData();
    })
    .catch((error) => console.error("Error deleting product:", error));
}

function openForm() {
  productForm.style.display = "block";
}

function closeForm() {
  productForm.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});
