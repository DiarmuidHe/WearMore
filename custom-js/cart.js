const container = document.getElementsByClassName('container')[0];
const genarelAlert = document.getElementsByClassName('alert')[0];
genarelAlert.classList.add('d-none');
genarelAlert.classList.remove('d-show');
const footer = document.getElementsByTagName('footer')[0];
const main = document.getElementsByTagName('main')[0];
const checkoutBtn = document.getElementsByClassName('btn')[0];
checkoutBtn.addEventListener('click', () => {
  window.location.href = "checkout.html";
})


const orderDescription = document.getElementsByTagName('tbody')[0];
const contentDiv = document.getElementsByClassName('row')[1];
function CartDisplay()
{
  
  var count = 0;
  let reoccuringids = [];
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
        <tr>
          <div class="col-md-12">
            <div class="card" id="horizontalCard">
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
                <h5 class="card-title" onclick="AboutProduct(${dataInformation.product.productId})"><a href="about.html">${dataInformation.product.title}</a></h5>

                <br>
                <button id="minusBtn" class="btn" onclick="minusItemFromCart(${id})">-</button>
      
                
                
                <span id="item-amount-${id}" class="fs-4 px-4">${count}</span>
                
                
                <button id="plusBtn" class="btn" onclick="addItemToCart(${id})">+</button>
              </div>
              </div>
            </div>
          </div>
        </tr>
        `;
       contentDiv.innerHTML += card;
      }

      idFound = false;
      
    });
    
      
  });
  if(reoccuringids.length == 2){
    main.style.marginBottom = "23em";
  }
  else if(reoccuringids.length == 1){
    main.style.marginBottom = "26em";
  }
  ItemsDisplay();
}



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
  CheckParams();

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


function ItemsDisplay()
{
  orderDescription.innerHTML = ""
  var count = 0;
  let reoccuringids = [];
  let allPrices = [];
  let idFound = false;
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
        
        const productInCart = `
            <tr>
              
              <td>${dataInformation.product.title}</td>
              <td>${count}</td>
              <td>${formattedAmount}</td>
            </tr>
        `;
        allPrices.push(totPrice);
        orderDescription.innerHTML += productInCart;
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

  const cartValue =  `
    <tr>
      
      <td colspan="2"><b>Order Total</b></td>
      <td scope="row"><b>${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(checkOutPrice)}</b></td>
    </tr>
      
    `;
    orderDescription.innerHTML += cartValue;
}

function CheckParams(){
  if(localStorage.getItem('loggedIn') == 0){
    container.innerHTML = "";
    genarelAlert.innerHTML = 'Please <a href="login.html">Log In</a> to view Cart'
    genarelAlert.classList.remove('d-none');
    genarelAlert.classList.add('d-show');
    footer.style.position = "fixed";
    footer.style.bottom = "0";
    footer.style.left = "0";
    footer.style.width = "100%";
  }
  else if(localStorage.getItem('checkout') == 0){
    container.innerHTML = "";
    genarelAlert.classList.remove('d-none');
    genarelAlert.classList.add('d-show');
    genarelAlert.innerHTML = 'Cart is empty :(. Go to the <a href="shop.html">Shop</a> to add items';
    footer.style.position = "fixed";
    footer.style.bottom = "0";
    footer.style.left = "0";
    footer.style.width = "100%";
  }
  else{
    CartDisplay()
  }
}
CheckParams();