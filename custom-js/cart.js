

function AboutProduct(id)
{
  localStorage.getItem('aboutId');
  localStorage.setItem('aboutId', id);

}


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
                <button class="btn" onclick="AboutProduct(${dataInformation.product.productId})"><a href="about.html">About</a></button>
                <br>
                <button id="minusBtn" class="btn" onclick="minusItemFromCart(${id})">-</button>
      
                
                
                <span id="item-amount-${id}" class="fs-4 px-4">${count}</span>
                
                
                <button id="plusBtn" class="btn" onclick="addItemToCart(${id})">+</button>
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
  matchCartWithUser();
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
  matchCartWithUser();
  var total=localStorage.getItem('checkout');

  total++;
  

  localStorage.setItem('checkout',total);
  document.querySelector('#checkout').innerHTML=total;
  contentDiv.innerHTML = "";
  CartDisplay();
}


