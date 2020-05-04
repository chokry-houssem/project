// swiper slider
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5.2,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});
/*-------------cart shop---------------- */
let carts = document.querySelectorAll('.Add-success');
let products = [
  {
    name: 'keep calm drink wine',
    tag:'hi-slider1',
    price:40,
    inCart:0
  },
  {
    name: 'décoratif logo Apple Scrat',
    tag:'hi-slider2',
    price:20,
    inCart:0
  },
  {
    name: 'citation petit prince essentiel',
    tag:'hi-slider3',
    price:33,
    inCart:0
  },
  {
    name: 'carte du monde animaux français',
    tag:'hi-slider4',
    price:70,
    inCart:0
  },
  {
    name: ' Sticker espace lunes et étoiles',
    tag:'str1',
    price:55,
    inCart:0
  }
  ,
  {
    name: 'stickers muraux jeu vidéo gamer',
    tag:'str2',
    price:40,
    inCart:0
  }
  ,
  {
    name: '  Autocollant planètes de lespace du système solaire',
    tag:'str3',
    price:45,
    inCart:0
  },
  {
    name: 'Ciel plein détoiles autocollant couvercle de linterrupteur de l',
    tag:'str4',
    price:15,
    inCart:0
  },
  {
    name: 'Sticker texte chez nous',
    tag:'str5',
    price:60,
    inCart:0
  }
  ,
  {
    name: 'Sticker fenêtre pissenlit',
    tag:'str6',
    price:15,
    inCart:0
  },
  {
    name: 'Sticker fleur pissenlit réaliste',
    tag:'str7',
    price:19,
    inCart:0
  },
  {
    name: 'Sticker Maison rêves et réalité',
    tag:'str8',
    price:43,
    inCart:0
  },
  {
    name: 'Sticker Maison drapeaux du monde',
    tag:'str9',
    price:89,
    inCart:0
  },
  {
    name: 'Ensemble de décoration papillon',
    tag:'str10',
    price:36,
    inCart:0
  },
  {
    name: ' Sticker interrupteur ampoule idée',
    tag:'str11',
    price:25,
    inCart:0
  },
  {
    name: 'Sticker décoratif enfant papillon bleu',
    tag:'str12',
    price:20,
    inCart:0
  },
  {
    name: ' Sticker phrase do what you love',
    tag:'str13',
    price:67,
    inCart:0
  },
  {
    name: 'Sticker musculation texte',
    tag:'str14',
    price:37,
    inCart:0
  },
  {
    name: 'Sticker musculation texte',
    tag:'str15',
    price:65,
    inCart:0
  }
  ,
  {
    name: 'Sticker PC portable Snoopy bulle',
    tag:'str16',
    price:10,
    inCart:0
  },
  {
    name: 'Stickers Monde Ooh la la',
    tag:'str17',
    price:43,
    inCart:0
  },
  {
    name: 'Avion avec nuages illustration art mural',
    tag:'str18',
    price:73,
    inCart:0
  },
  {
    name: 'Sticker ordinateur panda Banksy',
    tag:'str19',
    price:10,
    inCart:0
  },
  {
    name: 'Jouer toute la journée decoration murale chambre denfants',
    tag:'str20',
    price:43,
    inCart:0
  },
  {
    name: 'Sticker décoratif sweet love',
    tag:'str21',
    price:55,
    inCart:0
  },
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
  },
  {
    name: ' Beau t-shirt fleur de botanique',
    tag:'ts1',
    price:55,
    inCart:0
  }
  
];  
for(let i=0; i< carts.length;i++){
  carts[i].addEventListener('click' , () => {
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
        <i class="fas fa-times-circle"></i>
       <img src="./res/${item.tag}.jpg">
       <span>${item.name}</span>
     </div>
     <div class="price">
     TND${item.price},000
     </div>
     <div class="quantity">
     <i class="fas fa-arrow-circle-left"></i>
     <span>${item.inCart}</span>
     <i class="fas fa-arrow-circle-right"></i>
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
/*------------- voir plus------------------- */
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Voir plus "; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "voir moins"; 
    moreText.style.display = "inline";
  }
}
function VoirPlus() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("plus");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Voir plus "; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "voir moins"; 
    moreText.style.display = "inline";
  }
}
/*-------------------Carousel-example-multi------------------------- */
$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<3;i++) {
    next=next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});
$(document).ready(function() {
  $('#sideModalTR').modal('show');
   });

