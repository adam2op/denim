const apiUrl = "https://your-api-url.com/api/products"; // Replace with actual API URL

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        let productsContainer = document.querySelector(".products");
        productsContainer.innerHTML = "";
        data.forEach(product => {
            productsContainer.innerHTML += `
                <div class="product">
                    <div class="price">Rs.${product.price}</div>
                    <div class="product-name">${product.name}</div>
                </div>
            `;
        });
    })
    .catch(error => console.error("Error fetching products:", error));