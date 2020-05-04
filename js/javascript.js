let carts = document.querySelectorAll('.add-cart');
let products = [
  {
    name: 'Sticker enfant crayons de couleurs',
    tag:'strC1',
    price:88,
    inCart:0
  },
  {
    name: 'Sticker ocean alphabet',
    tag:'strC2',
    price:30,
    inCart:0
  },
  {
    name: 'Sticker ardoise craie bulle',
    tag:'strC3',
    price:25,
    inCart:0
  },
  {
    name: 'autocollant de peau dordinateur portable',
    tag:'strC4',
    price:10,
    inCart:0
  },
  {
    name: 'Sticker enfant singe suspendu',
    tag:'strC5',
    price:22,
    inCart:0
  },
  {
    name: 'Sticker Le Voyage est la seule chose...',
    tag:'strC6',
    price:73,
    inCart:0
  },
  {
    name: 'Sticker enfant arc-en-ciel personnalisable',
    tag:'strC7',
    price:45,
    inCart:0
  },
  {
    name: 'Sticker salle de bain',
    tag:'strC8',
    price:15,
    inCart:0
  },
  {
    name: 'Sticker histoire damour',
    tag:'strC9',
    price:99,
    inCart:0
  }
  
];  
for(let i=0; i< carts.length;i++){
  carts[i].addEventListener('click' , () => {
    alert("Add to cart");
    cartNumbers(products[i]);
    totalCost(products[i]);
  })
}   
function onloadCartNumbers(){
  let productNumbers = localStorage.getItem('cartNumbers');
  if (productNumbers){ 
    document.querySelector('.shop span').textContent = productNumbers;
  }
}
function cartNumbers(products) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  if (productNumbers){
    localStorage.setItem('cartNumbers', productNumbers + 1 );
    document.querySelector('.shop span').textContent = productNumbers + 1;
  }else{
    localStorage.setItem('cartNumbers', 1 );
    document.querySelector('.shop span').textContent = 1;
  }
  setItems(products);
}
function setItems(products){
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

 if (cartItems != null){
   if (cartItems[products.tag] == undefined){
     cartItems = {
       ...cartItems,
       [products.tag]: products
     }
   }
   cartItems[products.tag].inCart += 1;
 }else {
  products.inCart = 1;
  cartItems = {
      [products.tag]: products
  }
 }
 localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
  function totalCost(products){
    //console.log('the prodyct', products.price);
    let cartCost = localStorage.getItem('totalCost');
    if(cartCost != null){
      cartCost = parseInt(cartCost);
      localStorage.setItem('totalCost', cartCost + products.price);
    }else{
      localStorage.setItem('totalCost', products.price);
    }
  }
  function displayCart(){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    if(cartItems && productContainer){
      productContainer.innerHTML = '';
      Object.values(cartItems).map(item =>{
        productContainer.innerHTML += `
        <div class="product">
       <img src="./res/${item.tag}.jpg">
       <span>${item.name}</span>
     </div>
     <div class="price">
     TND${item.price},000
     </div>
     <div class="quantity">
     <span>${item.inCart}</span>
     </div>
     <div class="total">
     TND${item.inCart * item.price},000
     </div>
     `
      });
      productContainer.innerHTML += `
      <div class="basketTotalContainer">
          <h4 class="basketTotalTitle">Besket Total</h4>
          <h4 class="basketTotal">
          TND${cartCost},000
          </h4>
      `;
    }
  }
onloadCartNumbers();
displayCart();