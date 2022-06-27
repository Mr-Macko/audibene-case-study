let apiURL = 'https://api.jsonbin.io/b/6023a4c93b303d3d964e8ddf';

// fetch the data from the JSON api
async function fetchProducts() {
    let response = await fetch(apiURL);
    let product = await response.json();

    // structures the fetched data
    let headline = document.getElementById('headline');
    let image = document.getElementById('image');

    // intial path of products in JSON
    let product1 = product.ricS;
    let product2 = product.ric;
    let product3 = product.ricR;
    let product4 = product.cic;

    let button1 = document.getElementById('button1');
    let button2 = document.getElementById('button2');
    let button3 = document.getElementById('button3');
    let button4 = document.getElementById('button4');
 
    // triggers layout for mobile
    const mobileSize = window.matchMedia("(max-width: 500px)") 

    // button elements for desktop & mobile
    function mobileView (mobile) {
        if (mobile.matches) {
            button1.innerHTML = product1.name.mobile;
            button2.innerHTML = product2.name.mobile;
            button3.innerHTML = product3.name.mobile;
            button4.innerHTML = product4.name.mobile;
        } else {
            button1.innerHTML = product1.name.desktop;
            button2.innerHTML = product2.name.desktop;
            button3.innerHTML = product3.name.desktop;
            button4.innerHTML = product4.name.desktop;
        }
        if (mobileView.matches) {}
    }

    // shows headline and image to the respective product
    function handleProduct1() {
        headline.innerHTML = product1.text; 
        if (mobileSize.matches) {
            image.src = product1.img.mobile;
        } else { 
         image.src = product1.img.desktop;
        }
    }
    function handleProduct2() {
        headline.innerHTML = product2.text; 
        if (mobileSize.matches) {
            image.src = product2.img.mobile;
        } else { 
         image.src = product2.img.desktop;
        }
   }
   function handleProduct3() {
        headline.innerHTML = product3.text; 
        if (mobileSize.matches) {
            image.src = product3.img.mobile;
        } else { 
        image.src = product3.img.desktop;
        }
    }
    function handleProduct4() {
        headline.innerHTML = product4.text; 
        if (mobileSize.matches) {
            image.src = product4.img.mobile;
        } else { 
         image.src = product4.img.desktop;
        }
   }

   // shows the respective product when clicked
   let selector = document.getElementById('selector');
    selector.addEventListener("click", showProduct);

    function showProduct(e) {
        if(e.target === button1) {
            handleProduct1();
        } else if (e.target === button2) {
            handleProduct2();
        } else if (e.target === button3) {
            handleProduct3();
        } else if (e.target === button4) {
            handleProduct4();
        } else {
            handleProduct1();
        }
    }

    handleProduct1();

    // updates responsive
    mobileView(mobileSize);
    mobileSize.addListener(mobileView);
    mobileSize.addListener(showProduct);
};

fetchProducts();