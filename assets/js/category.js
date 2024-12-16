let selectedCategory = '';

// Function to filter products based on category
function filterProducts() {
   const filteredProducts = selectedCategory 
      ? products.filter(product => product.category === selectedCategory) 
      : products;
   
   displayProducts(currentPage, filteredProducts);
}

// Function to display products for the current page (with category filter)
function displayProducts(page, filteredProducts) {
   const startIndex = (page - 1) * productsPerPage;
   const endIndex = startIndex + productsPerPage;
   const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

   const container = document.getElementById("product-container");
   container.innerHTML = ""; // Clear previous products

   productsToDisplay.forEach((product) => {
      container.innerHTML += `
         <div class="col">
            <div class="card h-100">
               <img src="${product.image}" class="card-img-top" alt="${product.name}">
               <div class="card-body text-center">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${product.price}</p>
               </div>
            </div>
         </div>
      `;
   });
}

// Event listener for category filter
document.getElementById("category-filter").addEventListener("change", (e) => {
   selectedCategory = e.target.value;  // Set the selected category
   currentPage = 1;  // Reset to first page when changing filter
   filterProducts();  // Apply the filter
});

// Pagination logic (same as before)
document.querySelectorAll(".page-link").forEach((link) => {
   link.addEventListener("click", (e) => {
      e.preventDefault();

      if (link.id === "prev" && currentPage > 1) {
         currentPage--;
      } else if (link.id === "next" && currentPage < Math.ceil(products.length / productsPerPage)) {
         currentPage++;
      } else if (link.dataset.page) {
         currentPage = parseInt(link.dataset.page, 10);
      }

      filterProducts();  // Reapply filter on page change
      updatePagination();
   });
});

// Initial load
filterProducts();  // Initial load with filter applied
updatePagination();
