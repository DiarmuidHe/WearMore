function addToCart(itemNumber) 
{
  allProductIdsSaved.push(itemNumber); 
  //localStorage.setItem('allProductId', JSON.stringify(null));
  localStorage.setItem('allProductId', JSON.stringify(allProductIdsSaved));
  matchCartWithUser();
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





const landScape = document.getElementById('carouselExampleIndicators');
const productTable = document.getElementsByTagName('tbody')[0];
const contentDiv = document.getElementsByClassName('row')[0];
const cartDiv = document.getElementById('addProductToCart')
function AboutDisplay()
{
    var neededID = localStorage.getItem('aboutId')
    let otherProducts = [];
        
    for (let i = 0; i < 3;i++) 
    {
      let randomID = Math.floor(Math.random() * 9)+1;

      
      console.log(neededID)
      otherProducts.push(randomID);
      if(randomID == neededID)
      {
        otherProducts.splice(i,1)
        i--
      }
      else
      {
        for(const id in otherProducts)
          {
            
            if(id != i && randomID == otherProducts[id])
            {
              otherProducts.splice(i,1)
              i--
            }
          }
      }
    }
    products.forEach(dataInformation =>
    {
        if(neededID == dataInformation.product.productId)
        {
            const landScapeImage = `

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

          landScape.innerHTML = landScapeImage;

          const productDescription = `

            <tr>
              <th scope="row">Gender</th>
              <td>${dataInformation.product.description.Gender}</td>
            </tr>
            <tr>

            </tr>
            <tr>
              <th scope="row">Colour</th>
              <td colspan="2">${dataInformation.product.description.colour}</td>
              
            </tr>
            <tr>
              <th scope="row">Type</th>
              <td colspan="2">${dataInformation.product.description.type}</td>
            </tr>
            <tr>
              <th scope="row">Fabric</th>
              <td colspan="2">${dataInformation.product.description.fabric}</td>
            </tr>
            <tr>
              <th scope="row">Brand</th>
              <td colspan="2">${dataInformation.product.description.brand}</td>
            </tr>
            <tr>
              <th scope="row">Price</th>
              <td colspan="2">${dataInformation.product.price}</td>
            </tr>
          `;
          const productAddToCart = 
           `
              <button class="btn" onclick="addToCart(${dataInformation.product.productId})"><h2>Add to cart</h2></button>

           `;
          cartDiv.innerHTML = productAddToCart;
          productTable.innerHTML = productDescription;
        }
        else
        {
          for(const id in otherProducts)
          {
            if(otherProducts[id] == dataInformation.product.productId)
            {

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
              
            }

          }
          
        }
    });
}
AboutDisplay()