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
          "img1" :"wRedShirt1.jpg",
          "img2" :"wRedShirt2.jpg",
          "img3" :"wRedShirt3.jpg"
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
            "img1" : "mBlueShirt1.jpg",
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
const contentDiv = document.getElementById('carouselExampleIndicators');

function AboutDisplay()
{
    var neededID = localStorage.getItem('aboutId')
    products.forEach(dataInformation =>
    {
        if(neededID == dataInformation.product.productId)
        {
            const card = `

                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="landScapeImages/${dataInformation.product.image.img1}" class="d-block w-100" alt="${dataInformation.product.title}">
                    </div>
                    <div class="carousel-item">
                    <img src="landScapeImages/${dataInformation.product.image.img2}" class="d-block w-100" alt="${dataInformation.product.title}">
                    </div>
                    <div class="carousel-item">
                    <img src="landScapeImages/${dataInformation.product.image.img3}" class="d-block w-100" alt="${dataInformation.product.title}">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
          `;
         contentDiv.innerHTML += card;
        }
    });
}
AboutDisplay()