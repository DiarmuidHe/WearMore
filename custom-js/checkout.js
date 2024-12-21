// checkout.js

//localStorage.setItem('allProductIds','');
const allProductIdsSaved = JSON.parse(localStorage.getItem('allProductId')) || [];
// allProductIdsSaved.forEach(element => {
//     console.log(element);
// });

console.log(allProductIdsSaved.length);




const products = 
[

  { 
    "product" :
    {
      "productId" : "1",
      "title" : "Womens Tea Shirt",
      "price" : "12.50",
      "image" :
        {
          "img1" : "wGreenShirt1.jpg",
          "img2" :"wGreenShirt2.jpg",
          "img3" :"wGreenShirt3.jpg"
        }
    }
  },

  { 
    "product" :
    {
      "productId" : "2",
      "title" : "Womens Blue Shirt",
      "price" : "9.99",
      "image" :
        {
          "img1" : "wBlueShirt1.jpg",
          "img2" :"wBlueShirt2.jpg",
          "img3" :"wBlueShirt3.jpg"
        }
    }
  },

  { 
    "product" :
    {
      "productId" : "3",
      "title" : "Womens Red Shirt",
      "price" : "14.99",
      "image" : 
      
        {
          "img1" : "wRedShirt1.png",
          "img2" :"wRedShirt2.png",
          "img3" :"wRedShirt3.png"
        }
    }

  },

  { 
    "product" :
    {
      "productId" : "4",
      "title" : "Mens Green Shirt",
      "price" : "16.50",
      "image" : 
        
          {
            "img1" : "mGreenShirt1.jpg",
            "img2" :"mGreenShirt2.jpg",
            "img3" :"mGreenShirt3.png"
          }
    }

        
  },

  { 
    "product" :
    {
      "productId" : "5",
      "title" : "Mens Red Shirt",
      "price" : "18.99",
      "image" : 
        
          {
            "img1" : "mRedShirt1.jpg",
            "img2" :"mRedShirt2.jpg",
            "img3" :"mRedShirt3.jpg"
          }
    }

  },
  { 
    "product" :
    {
      "productId" : "6",
      "title" : "Mens Blue Shirt",
      "price" : "16.80",
      "image" : 
        
          {
            "img1" : "mBlueShirt1.png",
            "img2" : "mBlueShirt2.jpg",
            "img3" : "mBlueShirt3.jpg"
          }
    }

  },
  { 
    "product" :
    {
      "productId" : "7",
      "title" : "Black Jeans",
      "price" : "29.99",
      "image" : 
        
          {
            "img1" : "jeans1.jpg",
            "img2" : "jeans2.jpg",
            "img3" : "jeans3.jpg"
          }
    }
  },
  { 

    "product" :
    {
      "productId" : "8",
      "title" : "Blue Jeans",
      "price" : "19.99",
      "image" : 
        
          {
            "img1" : "blueJeans1.jpg",
            "img2" : "blueJeans2.jpg",
            "img3" : "blueJeans3.jpg"
          }
    }
  },
  { 
    "product" :
    {
      "productId" : "9",
      "title" : "Shoes",
      "price" : "49.99",
      "image" : 
        
          {
            "img1" : "shoe.jpg",
            "img2" : "shoe2.jpg",
            "img3" : "shoe3.jpg"
          }
    }

  }
]

const contentDiv = document.getElementsByClassName('row')[0];
function CartDisplay()
{
  
  var count = 0;
  let reoccuringids = [];
  let allPrices = [];
  idFound = false;
  products.forEach(dataInformation => 
  {
    allProductIdsSaved.forEach(id => 
    {

      count = 0;
      allProductIdsSaved.forEach(comparisonID => 
      {
        if(id == comparisonID)
        {
          count++;
        }
      });

        
      var totPrice = count * dataInformation.product.price;
      const formattedAmount = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totPrice);



      for(let i = 0; i < reoccuringids.length; i++)
      { 
        if(reoccuringids[i] == id)
        {
          idFound = true;
        }
          
      }
      
      if(id == dataInformation.product.productId && idFound == false)
      {
              
        reoccuringids.push(id);
        
        const card = `
          <div class="col-md-12">
            <div class="card">
            <div class="row g-0">
              <div class="col-md-4">
                <div id="carouselExample-${dataInformation.product.productId}" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                  
                    <img src="Images/${dataInformation.product.image.img1}" class="img-fluid rounded-start" alt="${dataInformation.product.title}">
                  </div>
                  <div class="carousel-item">
                    <img src="Images/${dataInformation.product.image.img2}" class="img-fluid rounded-start" alt="${dataInformation.product.title}">
                  </div>
                  <div class="carousel-item">
                    <img src="Images/${dataInformation.product.image.img3}" class="img-fluid rounded-start" alt="${dataInformation.product.title}">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample-${dataInformation.product.productId}" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample-${dataInformation.product.productId}" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              </div>
              <div class="col-md-8">
              <div class="card-body">
                <p class="card-text" id="price-${id}">Price: ${formattedAmount}</p>
                <h5 class="card-title">${dataInformation.product.title}</h5>
                <center>
                <button id="minusBtn" class="btn" onclick="minusItemFromCart(${id})">-</button>
      
                
                
                <span id="item-amount-${id}" class="fs-4 px-4">${count}</span>
                
                
                <button id="plusBtn" class="btn" onclick="addItemToCart(${id})">+</button></center>
              </div>
              </div>
            </div>
          </div>
        `;
        allPrices.push(totPrice);
       contentDiv.innerHTML += card;
      }

      idFound = false;
      
    });

      
  });
  var checkOutPrice = 0;
  //console.log(allPrices);
  allPrices.forEach(price=> 
  {
    checkOutPrice += price;
  });
  //console.log(checkOutPrice);
  //const cartValue = document.getElementById('cartValue');
  
  const section = document.getElementsByTagName('section')[0];

  const cartValue =  `
      <button><h2>Complete Order</h2></button>
      <p>${allProductIdsSaved.length} item(s) &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(checkOutPrice)}</p> 
      `;
  section.innerHTML = cartValue;
}
CartDisplay()


function minusItemFromCart(itemID)
{
  console.log(allProductIdsSaved);


  for (let i = 0; i < allProductIdsSaved.length; i++) 
  {
    if ( allProductIdsSaved[i] === itemID) {
      allProductIdsSaved.splice(i, 1);
      break;
    }
  }

  
  console.log(allProductIdsSaved);
  localStorage.setItem('allProductId', JSON.stringify(allProductIdsSaved));
  
  var total = localStorage.getItem('checkout');

  total--;
  

  localStorage.setItem('checkout',total);
  document.querySelector('#checkout').innerHTML=total;

  contentDiv.innerHTML = "";
  CartDisplay();
}

function addItemToCart(itemID)
{
  allProductIdsSaved.push(itemID); 
 
  localStorage.setItem('allProductId', JSON.stringify(allProductIdsSaved));
  
  var total=localStorage.getItem('checkout');

  total++;
  

  localStorage.setItem('checkout',total);
  document.querySelector('#checkout').innerHTML=total;
  contentDiv.innerHTML = "";
  CartDisplay();
}




var checkout = document.getElementById('buy-now');
// add a listener for add to cart if such a button id is pressed

var element = document.getElementById("payment-failure");
element.style.display = 'none';
var element = document.getElementById("payment-success");
element.style.display = 'none';

// add a listener so that we run this code and preventdefault for submit...
checkout.addEventListener("click", () => {
    event.preventDefault();
    var cardnumber=document.getElementById('cardNumber').value;
    var cardcvv=document.getElementById('cardCvv').value;

    if (cardnumber=="1234 5678 9102 3456" && cardcvv=="123") {
        alert("payment success");
        var element = document.getElementById("payment-failure");
        element.style.display = 'none';
        //element.classList.add("d-none"); // bootstrap hide
        var element = document.getElementById("payment-success");
        element.style.display = 'block';
        //element.classList.remove("d-none"); // bootstrap hide
        // now set cart total to zero
        var total=0;
        const divCartContainer = document.getElementsByClassName('container')[0];
        divCartContainer.innerHTML = "";
        localStorage.setItem('allProductId', JSON.stringify(null));

        // makes sure that when we goto another page the total is zero 
        localStorage.setItem('checkout',total); 

    } else {
        alert("payment failure");
        var element = document.getElementById("payment-failure");
        element.style.display = 'block';
        var element = document.getElementById("payment-success");
        element.style.display = 'none';
        //element.classList.add("d-none");
        var element = document.getElementById("payment-failure");
        //element.classList.remove("d-none");
 
    }
    return false;  

    
    
})


