// custom.js 
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

//localStorage.removeItem("allProductId");
if(localStorage.getItem('allProductId') == null){
    localStorage.setItem('allProductId',JSON.stringify([]))
}

const currentUser = localStorage.getItem(`currentUser`);
const allProductIdsSaved = JSON.parse(localStorage.getItem('allProductId')) || [];
const customersRegisterd = JSON.parse(localStorage.getItem('allCustomers')) || [];



var logout = document.getElementById('loginlogout');
logout.addEventListener("click", Logout);
checkLoginStatus();
//matchCartWithUser();
//const customersRegisterd = JSON.parse(localStorage.getItem('allCustomers'))

if (localStorage.getItem('checkout') == null ) {  
    localStorage.setItem('checkout',0);
   
}
var checkout = localStorage.getItem('checkout');
console.log(checkout)
document.querySelector('#checkout').innerHTML = checkout;

// run to update login/
var logout = document.getElementById('loginlogout');
// add a listener for add to cart if such a button id is pressed
logout.addEventListener("click", Logout);




//localStorage.removeItem('allCustomers');

console.log(customersRegisterd);
if (localStorage.getItem('allCustomers') == null)
{
    const defaultRegisterData = 
    [
        {
            
          "FirstName": "Walter",
          "LastName": "Mitty",
          "LocationData":
          {
              "AddressLine1": "Buenos Ayres Drive",
              "AddressLine2": "Strandhill",
              "Eircode": "F91 23FR",
              "City": "Sligo",
              "County": "Sligo"
          },
          "DOB": "1990-01-28",
          "EmailAddress": "wmitty@email.com",
          "Password": "Password1",
          "ProductsInCart" : "null",
          "CardDetails" : 
          {
            "CardNumber": "1234 1234 1234 1234",
            "CardHolder": "Walter Mitty",
            "Expiry": "2026-01",
            "CVV": "123",
          }
            
        }
    ];
    localStorage.setItem('allCustomers', JSON.stringify(defaultRegisterData));
}

function matchCartWithUser()
{
    customersRegisterd.forEach(customer => {
        if(currentUser == customer.EmailAddress){
            customer.ProductsInCart = [];
            customer.ProductsInCart.push(...allProductIdsSaved);
            
            localStorage.setItem('allCustomers', JSON.stringify(customersRegisterd));
            console.log(customer)
        }
    });
}


function Logout() {
    // if user is logged in them log them out and redirect to home page
    var loggedin=localStorage.getItem('loggedIn'); 
    if (loggedin==1) {
      localStorage.setItem('loggedIn',0);
      window.location.href = "home.html";
    } 
    else {
        window.location.href = "login.html";
    }
}


// check if user is logged in or logged out..


function checkLoginStatus() {
    
    var loggedin=localStorage.getItem('loggedIn'); 
    var element = document.getElementById("userdetails");
    if (loggedin==1) 
    {
        // change the text from Login to Logout
        document.querySelector('#loginlogout').innerHTML = "Logout";
        element.classList.remove("d-none");        
        element.classList.add("d-show");      
        customersRegisterd.forEach(customer => {
          if(currentUser == customer.EmailAddress)
          {
            if(customer.ProductsInCart == "null"){
              localStorage.setItem("checkout", 0);
            }
            else{
              localStorage.setItem("allProductId",JSON.stringify(customer.ProductsInCart));
              localStorage.setItem("checkout", customer.ProductsInCart.length);
            }
              
          }
        });
    } 
    else{
        
        // use add to hide the display of User Details
        localStorage.setItem("allProductId" ,JSON.stringify([]));
        localStorage.setItem("currentUser",JSON.stringify(null));
        localStorage.setItem('checkout',0);
        element.classList.add("d-none");        
        element.classList.remove("d-show");
        document.querySelector('#loginlogout').innerHTML="Login"; 
        element = document.getElementById("loginlogout");
        element.setAttribute("href", "login.html");
    } 

}

