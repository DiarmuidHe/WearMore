// shop.js


ProductInformation()



function addToCart(itemNumber) 
{

  
  console.log(allProductIdsSaved)
  allProductIdsSaved.push(itemNumber); 
  //localStorage.setItem('allProductId', JSON.stringify(null));

  
  localStorage.setItem('allProductId', JSON.stringify(allProductIdsSaved));
  
  matchCartWithUser();
  var total = localStorage.getItem('checkout');
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
