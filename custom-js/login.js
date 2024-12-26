
var loginStatus = document.getElementById('user-login');
// add a listener for add to cart if such a button id is pressed
loginStatus.addEventListener("submit", loginUser);
const customersRegisterd = JSON.parse(localStorage.getItem('allCustomers')) || [];


function loginUser(event) {
    event.preventDefault();
    
    
    var email = document.getElementById('emailAddressID').value;
    var password= document.getElementById('passwordID').value;
    let correctData = false;
    
    customersRegisterd.forEach(registerd => 
    {
        console.log(registerd.EmailAddress);
        console.log(registerd.passwordID);
        if(registerd.EmailAddress == email && registerd.Password == password)
        {
            correctData = true;
        }
    });

    if (correctData)  {   
        // successful login, user redirected to shop.html
        localStorage.setItem('loggedIn',1);   
        localStorage.setItem(`currentUser`, email);
        // redirect to shop page 
        window.location.href = "shop.html"; 

    }
    else {
        // login unsuccessful, error message appears
        localStorage.setItem('loggedIn',0);
        var element = document.getElementById("loginerror");
        element.classList.remove("d-none");
        element.classList.remove("d-block");
        
    }
    //event.preventDefault();
    
}

