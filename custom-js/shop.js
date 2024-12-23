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


function AboutProduct(id)
{
  localStorage.getItem('aboutId');
  localStorage.setItem('aboutId', id);

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
            "img1" : "wGreenShirt1.jpg",
            "img2" :"wGreenShirt2.jpg",
            "img3" :"wGreenShirt3.jpg"
          },
        "description" :
        {
          "Gender" : "Women",
          "colour" : "Tea",
          "type" : "Shirt",
          "fabric" : "Silk",
          "brand" : "Wear More"
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
          },
          "description" :
          {
            "Gender" : "Women",
            "colour" : "Blue",
            "type" : "Shirt",
            "fabric" : "Silk",
            "brand" : "Wear More"
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
            "img1" :"wRedShirt1.jpg",
            "img2" :"wRedShirt2.jpg",
            "img3" :"wRedShirt3.jpg"
          },
          "description" :
          {
            "Gender" : "Women",
            "colour" : "Red",
            "type" : "Shirt",
            "fabric" : "Silk",
            "brand" : "Wear More"
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
              "img3" :"mGreenShirt3.jpg"
            },
            "description" :
            {
              "Gender" : "Male",
              "colour" : "Green",
              "type" : "Shirt",
              "fabric" : "Silk",
              "brand" : "Wear More"
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
            },
            "description" :
            {
              "Gender" : "Male",
              "colour" : "Red",
              "type" : "Shirt",
              "fabric" : "Silk",
              "brand" : "Wear More"
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
              "img1" : "mBlueShirt1.jpg",
              "img2" : "mBlueShirt2.jpg",
              "img3" : "mBlueShirt3.jpg"
            },
            "description" :
            {
              "Gender" : "Male",
              "colour" : "Blue",
              "type" : "Shirt",
              "fabric" : "Silk",
              "brand" : "Wear More"
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
            },
            "description" :
            {
              "Gender" : "Unisex",
              "colour" : "Black",
              "type" : "Jeans",
              "fabric" : "Denim",
              "brand" : "Wear More"
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
            },
            "description" :
            {
              "Gender" : "Unisex",
              "colour" : "Blue",
              "type" : "Jeans",
              "fabric" : "Denim",
              "brand" : "Wear More"
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
            },
            "description" :
            {
              "Gender" : "Unisex",
              "colour" : "Black",
              "type" : "Shoes",
              "fabric" : "Leather",
              "brand" : "Wear More"
            }
      }
  
    }
  ]

  const contentDiv = document.getElementsByClassName('row')[0];
  products.forEach(dataInformation => {
      const card = `

        <div class="col-md-4">
          <div class="card">
            <div id="carouselExample-${dataInformation.product.productId}" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                
                  <img src="Images/${dataInformation.product.image.img1}" class="d-block w-100" alt="${dataInformation.product.title}">
                </div>
                <div class="carousel-item">
                  <img src="Images/${dataInformation.product.image.img2}" class="d-block w-100" alt="${dataInformation.product.title}">
                </div>
                <div class="carousel-item">
                  <img src="Images/${dataInformation.product.image.img3}" class="d-block w-100" alt="${dataInformation.product.title}">
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
              <button class="btn" onclick="AboutProduct(${dataInformation.product.productId})"><a href="about.html">About</a></button>
              <button class="btn" onclick="addToCart(${dataInformation.product.productId})">Add to cart</button>
            </div>
          </div>
        </div>
      `;

      contentDiv.innerHTML += card;
  });

}
