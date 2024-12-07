// checkout.js

//localStorage.setItem('allProductIds','');
const allProductIdsSaved = JSON.parse(localStorage.getItem('allProductId')) || [];
// allProductIdsSaved.forEach(element => {
//     console.log(element);
// });






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
            "img1" : "Images/wGreenShirt1.jpg",
            "img2" :"Images/wGreenShirt2.jpg",
            "img3" :"Images/wGreenShirt3.jpg",
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
            "img1" : "Images/wBlueShirt1.jpg",
            "img2" :"Images/wBlueShirt2.jpg",
            "img3" :"Images/wBlueShirt3.jpg",
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
            "img1" : "Images/wRedShirt1.png",
            "img2" :"Images/wRedShirt2.png",
            "img3" :"Images/wRedShirt3.png"
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
              "img1" : "Images/mGreenShirt1.jpg",
              "img2" :"Images/mGreenShirt2.jpg",
              "img3" :"Images/mGreenShirt3.png"
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
              "img1" : "Images/mRedShirt1.jpg",
              "img2" :"Images/mRedShirt2.jpg",
              "img3" :"Images/mRedShirt3.jpg"
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
              "img1" : "Images/mBlueShirt1.png",
              "img2" : "Images/mBlueShirt2.jpg",
              "img3" : "Images/mBlueShirt3.jpg"
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
              "img1" : "Images/jeans1.jpg",
              "img2" : "Images/jeans2.jpg",
              "img3" : "Images/jeans3.jpg"
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
              "img1" : "Images/blueJeans1.jpg",
              "img2" : "Images/blueJeans2.jpg",
              "img3" : "Images/blueJeans3.jpg"
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
              "img1" : "Images/shoe.jpg",
              "img2" : "Images/shoe2.jpg",
              "img3" : "Images/shoe3.jpg"
            }
      }

    },
]
const contentDiv = document.getElementsByClassName('row')[0];
var count = 0;
let reoccuringids = [];
let priceOfItems = [];
var indexOfPrice = 0;
idFound = false;
products.forEach(dataInformation => {
    allProductIdsSaved.forEach(id => {
      count = 0;
      allProductIdsSaved.forEach(comparisonID => {
        if(id == comparisonID)
        {
          count++;
        }
      });

      
      const totPrice = count * dataInformation.product.price;
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
                // priceOfItems.push(dataInformation.product.price);
                reoccuringids.push(id);
                priceOfItems.push(totPrice);
                const card = `
    
                <div class="col-md-4">
                  <div class="card">
                    <div id="carouselExample-${dataInformation.product.productId}" class="carousel slide">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                        
                          <img src="${dataInformation.product.image.img1}" class="d-block w-100" alt="${dataInformation.product.title}">
                        </div>
                        <div class="carousel-item">
                          <img src="${dataInformation.product.image.img2}" class="d-block w-100" alt="${dataInformation.product.title}">
                        </div>
                        <div class="carousel-item">
                          <img src="${dataInformation.product.image.img3}" class="d-block w-100" alt="${dataInformation.product.title}">
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
                    
                    <div class="card-body">
                      <p class="card-text" id="price-${id}">Price: ${formattedAmount}</p>
                      <h5 class="card-title">${dataInformation.product.title}</h5>
                      <center>
                      <button id="minusBtn" class="btn" onclick="minusItemFromCart(${count},${id},${totPrice},${dataInformation.product.price})">-</button>
             
                      <!-- Display Counter -->
                      
                      <span id="item-amount-${id}" class="fs-4 px-4">${count}</span>
                      
                      <!-- Plus Button -->
                      <button id="plusBtn" class="btn" onclick="addItemToCart(${count},${id},${totPrice},${dataInformation.product.price})">+</button></center>
                    </div>
                  </div>
                </div>
              `;
          
              contentDiv.innerHTML += card;
            }

            idFound = false;

    });

    
});
let counterDisplay
function minusItemFromCart(counter,itemID,totalPrice,priceOfProduct)
{
  if (counter > 0) 
  { 
    totalPrice -= priceOfProduct;
    counter--;
    updateCountAndPrice(counter,itemID,totalPrice);
  }
}
function addItemToCart(counter,itemID,totalPrice,priceOfProduct)
{
  counter++;
  totalPrice += priceOfProduct;
  updateCountAndPrice(counter,itemID,totalPrice);
}
function updateCountAndPrice(counter,itemID,totalPrice)
{
  var priceAmountID = "price-"+itemID;
  var itemAmountID = "item-amount-"+itemID;
  const priceAmountDisplay = document.getElementById(priceAmountID);
  const itemAmountDisplay = document.getElementById(itemAmountID);
  itemAmountDisplay.textContent = counter;
  priceAmountDisplay.textContent = "Price: $"+totalPrice;
}
// Add click event listener to the Plus button



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


