// shop.js


ProductInformation()



const allProductIdsSaved = JSON.parse(localStorage.getItem('allProductId')) || [];
function addToCart(itemNumber) 
{
  allProductIdsSaved.push(itemNumber); 
  //localStorage.setItem('allProductId', JSON.stringify(null));
  localStorage.setItem('allProductId', JSON.stringify(allProductIdsSaved));
  
  var total=localStorage.getItem('checkout');
  //total = 0;
  total++;
  

  localStorage.setItem('checkout',total);
  document.querySelector('#checkout').innerHTML=total;
}

function ProductInformation()
{
    
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
var counter = 0;
  products.forEach(dataInformation => {
    counter++;
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
              <p class="card-text"><strong>$${dataInformation.product.price}</strong></p>
              <h5 class="card-title">${dataInformation.product.title}</h5>
              <button class="btn" onclick="addToCart(${dataInformation.product.productId})">Add to cart</button>
            </div>
          </div>
        </div>
      `;

      contentDiv.innerHTML += card;
  });
        
        

    //try {
 //       const response = await fetch('Json/shop.json');
 //       const data = await response.json(); // Parses the response as JSON
    
        
   //     data.products.forEach(info => {

    
     //     const h1 = document.createElement('h2');
   //       h1.textContent = info.product_name;
  //        card.appendChild(h1);

    //    });
  //    } catch (error) {
        
//        const errorMessage = document.createElement('div');
//        errorMessage.textContent = `Gah, it's not working! Error: ${error.message}`;
//        app.appendChild(errorMessage);
//      }
}
