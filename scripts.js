let apiURL = 'https://api.jsonbin.io/b/6023a4c93b303d3d964e8ddf';

// fetch the data from the JSON api
async function fetchProducts() {
    let response = await fetch(apiURL);
    let product = await response.json();
};

fetchProducts();


