let apiURL = 'https://api.jsonbin.io/b/6023a4c93b303d3d964e8ddf';

// fetch the data from the JSON api
async function fetchProducts() {
    let response = await fetch(apiURL);
    let product = await response.json();
};

fetchProducts();
    // structures the fetched data
    let headline = document.getElementById('headline');
    let image = document.getElementById('image');

    let product1 = product.ricS;
    let product2 = product.ric;
    let product3 = product.ricR;
    let product4 = product.cic;

    let button1 = document.getElementById('button1');
    let button2 = document.getElementById('button2');
    let button3 = document.getElementById('button3');
    let button4 = document.getElementById('button4');
 


