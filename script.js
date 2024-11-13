// Define an array to store the products
let products = [];

// Select the input field and the button
const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

// Function to add a product to the list
function addProduct() {
  // Get the value of the input field
  const productName = productInput.value.trim();

  // Check if the input is empty
  if (productName === "") {
    alert("Please enter a product name.");
    return;
  }

  // Create an object to store the product (you can add more properties if needed)
  const product = { name: productName };

  // Add the product to the products array
  products.push(product);

  // Clear the input field after adding
  productInput.value = "";

  // Update the display
  displayProducts();
}

// Function to display the list of products
function displayProducts() {
  // Clear the existing product list
  productList.innerHTML = "";

  // Loop through the products array and display each product
  products.forEach((product, index) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-item");
    productDiv.textContent = `${index + 1}. ${product.name}`;
    productList.appendChild(productDiv);
  });
}

// Event listener for the add button
addButton.addEventListener("click", addProduct);

// Optionally, allow the user to press Enter to add the product
productInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addProduct();
  }
});
