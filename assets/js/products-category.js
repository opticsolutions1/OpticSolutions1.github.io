const categories = [...new Set(products.map(product => product.category))];  // Get unique categories

const categorySelect = document.getElementById("category-filter");
categories.forEach(category => {
   const option = document.createElement("option");
   option.value = category;
   option.textContent = category;
   categorySelect.appendChild(option);
});
